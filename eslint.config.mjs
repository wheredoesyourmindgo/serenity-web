import {defineConfig, globalIgnores} from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tailwind from 'eslint-plugin-tailwindcss'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const eslintConfig = defineConfig([
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'src/public/static/fonts/fontawesome/**',
    '.claude/**', // Claude Code worktrees/settings — not project source
    'scripts/**',
    // Vendored code (shadcn/ui, animate-ui, upstream libs) — don't lint or format
    'src/components/ui/**',
    'src/components/animate-ui/**',
    'src/lib/utils.ts',
    'src/lib/get-strict-context.tsx',
    'src/hooks/use-controlled-state.tsx',
    'src/hooks/use-auto-height.tsx'
  ]),
  ...nextTs,
  ...nextVitals,
  prettierRecommended,
  // eslint-plugin-tailwindcss v4 exposes a single flat-config object at
  // `configs.recommended` (the v3 `configs['flat/recommended']` array is gone)
  tailwind.configs.recommended,
  {
    // Match the file globs eslint-config-next registers its plugins (eg.
    // jsx-a11y) for, so the rule overrides below never apply to a file where
    // the plugin itself is missing
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
    // `tailwind.configs.recommended` only registers the tailwindcss plugin for
    // its own file globs; re-register it here (same instance) so the rule
    // overrides below are valid for every file this object applies to.
    // jsx-a11y is already registered by eslint-config-next, so we reuse that
    // registration and only pull in its recommended rules below.
    plugins: {
      tailwindcss: tailwind
    },
    languageOptions: {
      parserOptions: {
        ...jsxA11y.flatConfigs.recommended.languageOptions?.parserOptions
      }
    },
    settings: {
      // Tailwind v4 is CSS-first: point the plugin at the CSS entry that defines the theme (@theme in
      // globals.css) so it can resolve custom utilities. Default is 'src/style.css', which doesn't exist here.
      tailwindcss: {
        cssConfigPath: path.join(__dirname, './src/app/globals.css')
      }
    },
    rules: {
      // jsx-a11y recommended rules, downgraded to warnings (non-blocking) while
      // preserving each rule's options — accessibility issues to fix over time
      ...Object.fromEntries(
        Object.entries(jsxA11y.flatConfigs.recommended.rules).map(([name, val]) => [
          name,
          Array.isArray(val) ? ['warn', ...val.slice(1)] : 'warn'
        ])
      ),
      'linebreak-style': ['error', 'unix'],
      'no-console': 'off',
      'react/no-unescaped-entities': 0,
      'react/self-closing-comp': 1,
      radix: 1,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      camelcase: 'off',
      '@next/next/no-img-element': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      // prettier-plugin-tailwindcss owns class ordering; the eslint rule
      // disagrees with it, so keep it off to avoid churn
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/enforces-shorthand': 'off',
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          // shadcn/theme tokens are auto-recognized from the CSS @theme (see
          // cssConfigPath above), so the whitelist only needs genuinely-custom
          // classes — chiefly Font Awesome icon utilities.
          whitelist: ['fa-[a-z0-9-]+']
        }
      ]
    }
  }
])

export default eslintConfig
