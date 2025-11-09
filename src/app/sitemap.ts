import {MetadataRoute} from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://serenity-layout.fyi'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toJSON(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/alphas`,
      lastModified: new Date().toJSON(),
      changeFrequency: 'weekly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/firmware`,
      lastModified: new Date().toJSON(),
      changeFrequency: 'weekly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/software`,
      lastModified: new Date().toJSON(),
      changeFrequency: 'weekly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/config`,
      lastModified: new Date().toJSON(),
      changeFrequency: 'weekly',
      priority: 0.5
    }
  ]
}
