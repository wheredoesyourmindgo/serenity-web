#!/usr/bin/env node

/**
 * Re-fetches the files this app vendors rather than authors, from the manifest
 * in vendor-components.json.
 *
 * shadcn components are copied into the repo by design, which makes them
 * indistinguishable from hand-written code once committed. The manifest records
 * which files came from where so they can be refreshed in place, and so
 * `discover` can flag a vendored file nobody wrote down.
 *
 *   npm run vendor-components list
 *   npm run vendor-components sync
 *   npm run vendor-components sync -- button dialog
 *   npm run vendor-components discover
 *
 * Vendored files stay in the CLI's own formatting -- .prettierignore and the
 * ESLint ignores both skip them -- so that `shadcn diff` compares against
 * upstream without style noise.
 */

import {readFileSync, existsSync, readdirSync, statSync} from 'node:fs'
import path from 'node:path'
import {spawnSync} from 'node:child_process'

const cwd = process.cwd()
const manifestPath = path.join(cwd, 'vendor-components.json')
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))

const SOURCE_DIRS = {
  shadcn: path.join('src', 'components', 'ui'),
  'animate-ui': path.join('src', 'components', 'animate-ui'),
  'motion-primitives': path.join('src', 'components', 'ui'),
  reui: path.join('src', 'components', 'reui')
}

const MOTION_PRIMITIVES_FILES = new Set(['disclosure.tsx', 'in-view.tsx'])

function printHelp() {
  console.log(`Usage:
  npm run vendor-components list
  npm run vendor-components sync
  npm run vendor-components sync -- <name> [more names...]
  npm run vendor-components sync -- --source=<source>
  npm run vendor-components discover

Options:
  --dry-run   Passes --dry-run through to shadcn add.
  --silent    Passes --silent through to shadcn add.

Sources:
  shadcn
  animate-ui
  motion-primitives
  reui`)
}

function componentStatus(component) {
  const existingPaths = component.paths.filter((file) => existsSync(path.join(cwd, file)))

  return {
    status:
      existingPaths.length === 0
        ? 'missing'
        : existingPaths.length === component.paths.length
          ? 'complete'
          : 'partial',
    existingPaths
  }
}

function normalizeName(value) {
  return value.trim().toLowerCase()
}

function findComponents(selectors, source) {
  const selectorSet = new Set(selectors.map(normalizeName))

  return manifest.components.filter((component) => {
    if (source && component.source !== source) {
      return false
    }

    if (selectorSet.size === 0) {
      return true
    }

    return (
      selectorSet.has(normalizeName(component.name)) ||
      selectorSet.has(normalizeName(component.spec))
    )
  })
}

function listComponents() {
  for (const component of manifest.components) {
    const {status, existingPaths} = componentStatus(component)
    const paths = existingPaths.length > 0 ? existingPaths.join(', ') : component.paths.join(', ')
    console.log(
      `${component.source.padEnd(17)} ${component.name.padEnd(32)} ${status.padEnd(9)} ${paths}`
    )
  }
}

/**
 * Every file under a directory. Walked here rather than shelled out to `rg`,
 * which is not installed everywhere -- and a missing binary would otherwise
 * read as "found nothing untracked", the same output as a clean tree.
 */
function collectFiles(dir) {
  const files = []

  const walk = (current) => {
    if (!existsSync(current)) return
    for (const entry of readdirSync(current)) {
      if (entry === 'node_modules' || entry.startsWith('.')) continue
      const full = path.join(current, entry)
      if (statSync(full).isDirectory()) walk(full)
      else files.push(full)
    }
  }

  walk(dir)
  return files
}

function discoverComponents() {
  const trackedPaths = new Map()
  for (const component of manifest.components) {
    for (const file of component.paths) {
      const entries = trackedPaths.get(file) ?? []
      entries.push(component.name)
      trackedPaths.set(file, entries)
    }
  }

  const findings = []

  for (const [source, relativeDir] of Object.entries(SOURCE_DIRS)) {
    for (const absPath of collectFiles(path.join(cwd, relativeDir))) {
      const relPath = path.relative(cwd, absPath)

      if (source === 'motion-primitives' && !MOTION_PRIMITIVES_FILES.has(path.basename(relPath))) {
        continue
      }

      if (source === 'shadcn' && MOTION_PRIMITIVES_FILES.has(path.basename(relPath))) {
        continue
      }

      findings.push({
        source,
        path: relPath,
        trackedBy: trackedPaths.get(relPath) ?? []
      })
    }
  }

  if (findings.length === 0) {
    console.log('No vendored files found under any source directory.')
    return
  }

  for (const finding of findings.sort((a, b) => a.path.localeCompare(b.path))) {
    const tracking =
      finding.trackedBy.length > 0 ? `tracked by ${finding.trackedBy.join(', ')}` : 'untracked'
    console.log(`${finding.source.padEnd(17)} ${finding.path} (${tracking})`)
  }
}

function syncComponents(selectors, source, options) {
  const components = findComponents(selectors, source)

  if (components.length === 0) {
    console.error('No matching tracked components found.')
    process.exitCode = 1
    return
  }

  for (const component of components) {
    // npx resolves the shadcn dependency already in package.json.
    const args = ['shadcn', 'add', '-y', '-o']
    if (options.dryRun) {
      args.push('--dry-run')
    }
    if (options.silent) {
      args.push('--silent')
    }
    args.push(component.spec)

    console.log(`Syncing ${component.source}:${component.name}`)
    const result = spawnSync('npx', args, {
      cwd,
      stdio: 'inherit',
      encoding: 'utf8'
    })

    if (result.status !== 0) {
      process.exitCode = result.status ?? 1
      return
    }
  }
}

const args = process.argv.slice(2)
const command = args[0] ?? 'list'
const selectors = []
let source
const options = {
  dryRun: false,
  silent: false
}

for (const arg of args.slice(1)) {
  if (arg === '--dry-run') {
    options.dryRun = true
    continue
  }

  if (arg === '--silent') {
    options.silent = true
    continue
  }

  if (arg.startsWith('--source=')) {
    source = arg.slice('--source='.length)
    continue
  }

  selectors.push(arg)
}

if (source && !Object.keys(SOURCE_DIRS).includes(source)) {
  console.error(`Unknown source "${source}".`)
  process.exit(1)
}

switch (command) {
  case 'list':
    listComponents()
    break
  case 'discover':
    discoverComponents()
    break
  case 'sync':
    syncComponents(selectors, source, options)
    break
  case 'help':
  case '--help':
  case '-h':
    printHelp()
    break
  default:
    console.error(`Unknown command "${command}".`)
    printHelp()
    process.exit(1)
}
