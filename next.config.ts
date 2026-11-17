import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: 'security'
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
