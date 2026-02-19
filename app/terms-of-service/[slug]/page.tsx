import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getTermsOfServices } from 'app/terms-of-service/utils'
import { baseUrl } from 'app/sitemap'
import { LanguageSelector } from 'app/components/language-selector'
import Image from 'app/components/image'

export async function generateStaticParams() {
    let posts = getTermsOfServices()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export function generateMetadata({ params }) {
    let post = getTermsOfServices().find((post) => post.slug === params.slug)
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

    const alternates = params.slug.startsWith('rider-weather') ? {
        canonical: `${baseUrl}/terms-of-service/${params.slug}`,
        languages: {
            'en': `${baseUrl}/terms-of-service/rider-weather`,
            'es': `${baseUrl}/terms-of-service/rider-weather-es`,
            'fr': `${baseUrl}/terms-of-service/rider-weather-fr`,
            'de': `${baseUrl}/terms-of-service/rider-weather-de`,
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
            url: `${baseUrl}/terms-of-service/${post.slug}`,
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

export default function TermsOfService({ params }) {
    let post = getTermsOfServices().find((post) => post.slug === params.slug)

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
                        url: `${baseUrl}/terms-of-service/${post.slug}`,
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
            <LanguageSelector slug={params.slug} basePath="/terms-of-service" />
            <article className="prose">
                <CustomMDX source={post.content} />
            </article>
        </section>
    )
}
