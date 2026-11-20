import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: 'security'
  },
  turbopack: {
    rules: {
      // Tailwind's Turbopack loader, in place of PostCSS.
      '*.css': {loaders: ['@tailwindcss/turbopack']}
    }
  },
  async redirects() {
    return [
      // pages that were renamed
      {source: '/alphas', destination: '/layout', permanent: true},
      {source: '/misc', destination: '/extras', permanent: true}
    ]
  }
}

export default nextConfig
