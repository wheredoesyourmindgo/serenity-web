#!/usr/bin/env node

import {readFileSync, writeFileSync, existsSync} from 'node:fs'
import path from 'node:path'
import {spawnSync} from 'node:child_process'

const cwd = process.cwd()
const manifestPath = path.join(cwd, 'vendor-components.json')
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))

const SOURCE_DIRS = {
  shadcn: path.join('src', 'components', 'ui'),
  'animate-ui': path.join('src', 'components', 'animate-ui'),
  'motion-primitives': path.join('src', 'components', 'ui')
}

const MOTION_PRIMITIVES_FILES = new Set(['disclosure.tsx', 'in-view.tsx'])

function printHelp() {
  console.log(`Usage:
  yarn vendor-components list
  yarn vendor-components sync
  yarn vendor-components sync <name> [more names...]
  yarn vendor-components sync --source=<source>
  yarn vendor-components discover

Options:
  --dry-run   Passes --dry-run through to shadcn add.
  --silent    Passes --silent through to shadcn add.

Sources:
  shadcn
  animate-ui
  motion-primitives`)
}

// This project uses `@tabler/icons-react` (components.json `iconLibrary: tabler`),
// but third-party registries such as animate-ui hardcode `lucide-react`. Map the
// icons we actually vendor; extend this table as new components arrive. Unmapped
// icons are left on lucide and warned about loudly rather than guessed wrong.
const LUCIDE_TO_TABLER = {
  CopyIcon: 'IconCopy',
  CheckIcon: 'IconCheck'
}

function rewriteLucideToTabler(source, relPath) {
  const importRe = /import\s*\{([^}]*)\}\s*from\s*['"]lucide-react['"];?\n?/
  const match = source.match(importRe)
  if (!match) {
    return source
  }

  const names = match[1]
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
  const mapped = names.filter((name) => LUCIDE_TO_TABLER[name])
  const unmapped = names.filter((name) => !LUCIDE_TO_TABLER[name])

  let out = source
  for (const name of mapped) {
    out = out.replace(new RegExp(`\\b${name}\\b`, 'g'), LUCIDE_TO_TABLER[name])
  }

  const importLines = []
  if (mapped.length > 0) {
    importLines.push(`import { ${mapped.map((name) => LUCIDE_TO_TABLER[name]).join(', ')} } from '@tabler/icons-react';`)
  }
  if (unmapped.length > 0) {
    importLines.push(`import { ${unmapped.join(', ')} } from 'lucide-react';`)
    console.warn(`  ! ${relPath}: no @tabler mapping for lucide icon(s): ${unmapped.join(', ')} — left on lucide-react (add them to LUCIDE_TO_TABLER)`)
  }

  return out.replace(importRe, `${importLines.join('\n')}\n`)
}

// Registries such as animate-ui still emit the pre-rename Base UI package
// (`@base-ui-components/react`). This project depends on the renamed package
// (`@base-ui/react`), and its tsconfig runs with `noUnusedLocals`, which trips
// on the bare `import * as React` some registry files ship. Normalize these here
// so a re-sync reproduces exactly what we hand-verified instead of regressing.
function normalizeVendoredFile(relPath) {
  const absPath = path.join(cwd, relPath)
  if (!existsSync(absPath)) {
    return
  }

  const original = readFileSync(absPath, 'utf8')
  let next = original.replaceAll('@base-ui-components/react', '@base-ui/react')

  next = rewriteLucideToTabler(next, relPath)

  // Drop a sole `import * as React from 'react'` when React is never referenced
  // (safe: kept whenever any other `React` token, e.g. `React.ComponentProps`, exists).
  const reactImport = /^import \* as React from ['"]react['"];?\n/m
  if (reactImport.test(next)) {
    const withoutImport = next.replace(reactImport, '')
    if (!/\bReact\b/.test(withoutImport)) {
      next = withoutImport
    }
  }

  if (next !== original) {
    writeFileSync(absPath, next)
    console.log(`Normalized ${relPath}`)
  }
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
    const dir = path.join(cwd, relativeDir)
    const result = spawnSync('rg', ['--files', dir], {
      cwd,
      encoding: 'utf8'
    })

    if (result.status !== 0) {
      continue
    }

    for (const absPath of result.stdout.split('\n').filter(Boolean)) {
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
    const args = ['shadcn', 'add', '-y', '-o']
    if (options.dryRun) {
      args.push('--dry-run')
    }
    if (options.silent) {
      args.push('--silent')
    }
    args.push(component.spec)

    console.log(`Syncing ${component.source}:${component.name}`)
    const result = spawnSync('yarn', args, {
      cwd,
      stdio: 'inherit',
      encoding: 'utf8'
    })

    if (result.status !== 0) {
      process.exitCode = result.status ?? 1
      return
    }

    if (!options.dryRun) {
      const filesToFormat = component.paths.filter((file) => existsSync(path.join(cwd, file)))

      for (const file of filesToFormat) {
        normalizeVendoredFile(file)
      }

      if (filesToFormat.length > 0) {
        console.log(`Formatting ${component.source}:${component.name}`)
        const prettierResult = spawnSync('yarn', ['prettier', '--write', ...filesToFormat], {
          cwd,
          stdio: 'inherit',
          encoding: 'utf8'
        })

        if (prettierResult.status !== 0) {
          process.exitCode = prettierResult.status ?? 1
          return
        }
      }
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
