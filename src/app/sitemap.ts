import {MetadataRoute} from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.serenity-layout.fyi'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toJSON(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/why`,
      lastModified: new Date().toJSON(),
      changeFrequency: 'weekly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/layout`,
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
      url: `${baseUrl}/extras`,
      lastModified: new Date().toJSON(),
      changeFrequency: 'weekly',
      priority: 0.5
    }
  ]
}
