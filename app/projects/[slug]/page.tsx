import Image from 'app/components/image'
import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getProjectPosts } from 'app/projects/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getProjectPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getProjectPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/me.jpg`

  const alternates = post.slug.startsWith('rider-weather') ? {
    canonical: `${baseUrl}/projects/${post.slug}`,
    languages: {
      'en': `${baseUrl}/projects/rider-weather`,
      'es': `${baseUrl}/projects/rider-weather-es`,
      'fr': `${baseUrl}/projects/rider-weather-fr`,
      'de': `${baseUrl}/projects/rider-weather-de`,
    }
  } : undefined

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

import { LanguageSelector } from 'app/components/language-selector'

export default function Project({ params }) {
  let post = getProjectPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/me.jpg`,
            url: `${baseUrl}/projects/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Mihai Cojocaru',
            },
          }),
        }}
      />
      <div className="flex items-center gap-4 mb-8">
        {post.slug.startsWith('rider-weather') ? (
          <Image
            src="/rider-weather.png"
            alt="Rider Weather"
            width={60}
            height={60}
            className="rounded-xl shrink-0"
          />
        ) : post.slug.startsWith('honest-weather') ? (
          <Image
            src="/honest-weather.png"
            alt="Honest Weather"
            width={60}
            height={60}
            className="rounded-xl shrink-0"
          />
        ) : post.slug.startsWith('convex-currency-converter') ? (
          <Image
            src="/convex-currency-converter.png"
            alt="Convex - Currency Converter"
            width={60}
            height={60}
            className="rounded-xl shrink-0"
          />
        ) : post.slug.startsWith('rider-dashboard-speedometer') ? (
          <Image
            src="/rider-dashboard-speedometer.png"
            alt="Rider Dashboard: Speedometer"
            width={60}
            height={60}
            className="rounded-xl shrink-0"
          />
        ) : (
          <div className="w-[60px] h-[60px] bg-neutral-100 dark:bg-neutral-800 rounded-xl shrink-0 flex items-center justify-center text-2xl">
            {post.metadata.title[0]}
          </div>
        )}
        <div className="flex flex-col">
          <h1 className="title font-semibold text-2xl tracking-tighter">
            {post.metadata.title}
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
      </div>

      <LanguageSelector slug={params.slug} basePath="/projects" />

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
