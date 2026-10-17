import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // pages that were renamed
      {source: '/alphas', destination: '/layout', permanent: true},
      {source: '/misc', destination: '/extras', permanent: true}
    ]
  }
}

export default nextConfig
