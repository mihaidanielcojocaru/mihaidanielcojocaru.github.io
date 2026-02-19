import Image from 'app/components/image'
import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getPrivacyPolicies } from 'app/privacy-policy/utils'
import { baseUrl } from 'app/sitemap'
import { LanguageSelector } from 'app/components/language-selector'

export async function generateStaticParams() {
    let posts = getPrivacyPolicies()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export function generateMetadata({ params }) {
    let post = getPrivacyPolicies().find((post) => post.slug === params.slug)
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
        canonical: `${baseUrl}/privacy-policy/${params.slug}`,
        languages: {
            'en': `${baseUrl}/privacy-policy/rider-weather`,
            'es': `${baseUrl}/privacy-policy/rider-weather-es`,
            'fr': `${baseUrl}/privacy-policy/rider-weather-fr`,
            'de': `${baseUrl}/privacy-policy/rider-weather-de`,
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
            url: `${baseUrl}/privacy-policy/${post.slug}`,
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

export default function PrivacyPolicy({ params }) {
    let post = getPrivacyPolicies().find((post) => post.slug === params.slug)

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
                        url: `${baseUrl}/privacy-policy/${post.slug}`,
                        author: {
                            '@type': 'Person',
                            name: 'Mihai Cojocaru',
                        },
                    }),
                }}
            />

            <div className="flex items-center gap-4 mb-8">
                {params.slug.startsWith('rider-weather') ? (
                    <Image
                        src="/rider-weather.png"
                        alt="Rider Weather"
                        width={60}
                        height={60}
                        className="rounded-xl shrink-0"
                    />
                ) : params.slug.startsWith('honest-weather') ? (
                    <Image
                        src="/honest-weather.png"
                        alt="Honest Weather"
                        width={60}
                        height={60}
                        className="rounded-xl shrink-0"
                    />
                ) : params.slug.startsWith('convex-currency-converter') ? (
                    <Image
                        src="/convex-currency-converter.png"
                        alt="Convex - Currency Converter"
                        width={60}
                        height={60}
                        className="rounded-xl shrink-0"
                    />
                ) : params.slug.startsWith('rider-dashboard-speedometer') ? (
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
            <LanguageSelector slug={params.slug} basePath="/privacy-policy" />
            <article className="prose">
                <CustomMDX source={post.content} />
            </article>
        </section>
    )
}
