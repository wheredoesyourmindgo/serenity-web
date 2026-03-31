import {defineConfig, globalIgnores} from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tailwind from 'eslint-plugin-tailwindcss'
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
    'src/public/static/fonts/fontawesome/**'
  ]),
  ...nextTs,
  ...nextVitals,
  prettierRecommended,
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      // Suppress "Cannot resolve default tailwindcss config path. Please manually set the config option." during lint
      tailwindcss: {
        config: path.join(__dirname, './tailwind.config.mjs')
      }
    },
    rules: {
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
          varsIgnorePattern: '^_'
        }
      ],
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-shorthand': 'off',
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          // Via ChatGPT for use with Tailwind CSS + shadcn/ui design system
          whitelist: [
            'bg-background',
            'bg-background/70',
            'text-foreground',
            'text-foreground/90',
            'text-foreground/80',
            'text-foreground/70',
            'text-foreground/60',
            'bg-card',
            'text-card-foreground',
            'bg-popover',
            'text-popover-foreground',
            'bg-primary',
            'text-primary',
            'text-primary-foreground',
            'bg-primary-light',
            'text-primary-light',
            'bg-primary-dark',
            'bg-primary-dark/70',
            'text-primary-dark',
            'bg-secondary',
            'text-secondary',
            'text-secondary/90',
            'text-secondary-foreground',
            'bg-secondary-light',
            'text-secondary-light',
            'bg-secondary-dark',
            'text-secondary-dark',
            'text-accent',
            'text-accent-foreground',
            'bg-muted',
            'bg-muted/40',
            'text-muted-foreground',
            'bg-accent',
            'bg-accent/25',
            'bg-destructive',
            'text-destructive-foreground',
            'border-border',
            'border-accent',
            'border-accent/60',
            'border-muted',
            'bg-input',
            'ring-ring',
            'bg-sidebar',
            'text-sidebar-foreground',
            'bg-sidebar-primary',
            'text-sidebar-primary-foreground',
            'bg-sidebar-accent',
            'text-sidebar-accent-foreground',
            'border-sidebar-border',
            'ring-sidebar-ring',
            'border-primary',
            'border-accent/50',
            'border-accent/90',
            'border-accent/15',
            'bg-primary/10',
            'bg-surface-soft',
            'ring-accent/10',
            'bg-surface-soft/90',
            // Added to tailwind config
            'font-heading',
            '!font-heading',
            'font-display',
            '!font-display',
            // animate
            'animate-in',
            'fade-in',
            'fill-mode-both'
          ]
        }
      ]
    }
  }
])

export default eslintConfig
