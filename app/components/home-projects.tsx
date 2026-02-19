import Link from 'next/link'
import Image from 'app/components/image'
import { getProjectPosts } from 'app/projects/utils'

export function HomeProjects() {
    let allProjects = getProjectPosts()

    return (
        <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold tracking-tighter">Projects</h2>
            <div className="flex flex-col gap-4">
                {allProjects
                    .filter((post) => !post.slug.match(/-(es|fr|de)$/))
                    .sort((a, b) => {
                        if (
                            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                        ) {
                            return -1
                        }
                        return 1
                    })
                    .map((post) => (
                        <Link
                            key={post.slug}
                            className="flex items-center gap-3 group"
                            href={`/projects/${post.slug}`}
                        >
                            {post.slug === 'rider-weather' ? (
                                <Image
                                    src="/rider-weather.png"
                                    alt="Rider Weather"
                                    width={40}
                                    height={40}
                                    className="rounded-lg shrink-0"
                                />
                            ) : post.slug === 'honest-weather' ? (
                                <Image
                                    src="/honest-weather.png"
                                    alt="Honest Weather"
                                    width={40}
                                    height={40}
                                    className="rounded-lg shrink-0"
                                />
                            ) : post.slug === 'convex-currency-converter' ? (
                                <Image
                                    src="/convex-currency-converter.png"
                                    alt="Convex - Currency Converter"
                                    width={40}
                                    height={40}
                                    className="rounded-lg shrink-0"
                                />
                            ) : post.slug === 'rider-dashboard-speedometer' ? (
                                <Image
                                    src="/rider-dashboard-speedometer.png"
                                    alt="Rider Dashboard: Speedometer"
                                    width={40}
                                    height={40}
                                    className="rounded-lg shrink-0"
                                />
                            ) : (
                                <div className="w-[40px] h-[40px] bg-neutral-100 dark:bg-neutral-800 rounded-lg shrink-0 flex items-center justify-center text-lg">
                                    {post.metadata.title[0]}
                                </div>
                            )}
                            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline decoration-neutral-400 underline-offset-4 decoration-[0.5px]">
                                {post.metadata.title}
                            </p>
                        </Link>
                    ))}
            </div>
        </div>
    )
}
