import { baseUrl } from 'app/sitemap'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/app-ads.txt',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
