import { getProjectPosts } from 'app/projects/utils'
import { getPrivacyPolicies } from 'app/privacy-policy/utils'
import { getTermsOfServices } from 'app/terms-of-service/utils'

export const baseUrl = 'https://mihaicojocaru.online'

export default async function sitemap() {
  let projects = getProjectPosts().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let privacyPolicies = getPrivacyPolicies().map((post) => ({
    url: `${baseUrl}/privacy-policy/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let termsOfServices = getTermsOfServices().map((post) => ({
    url: `${baseUrl}/terms-of-service/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/projects', '/privacy-policy', '/terms-of-service', '/app-ads.txt'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects, ...privacyPolicies, ...termsOfServices]
}
