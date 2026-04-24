import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goldenshiruhllc.com'

  const pages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/amazon-account-management',
    '/services/amazon-ppc-management',
    '/services/listing-optimization',
    '/services/a-plus-ebc-content',
    '/services/product-photography',
    '/services/brand-store-design',
    '/services/new-product-launch',
    '/services/e-commerce-store',
    '/terms',
    '/privacy',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }))
}
