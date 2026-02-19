import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'
import Image from 'app/components/image'

export const metadata = {
    title: 'Blog',
    description: 'Read my blog.',
}

export default function Page() {
    let allBlogs = getBlogPosts()

    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
            <p className="mb-4">
                {`I write about my experiences in software development, tech trends, and whatever else comes to mind.`}
            </p>

            <div className="flex flex-col space-y-4">
                {allBlogs
                    .sort((a, b) => {
                        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                            return -1
                        }
                        return 1
                    })
                    .map((post) => (
                        <Link
                            key={post.slug}
                            className="flex flex-col space-y-1 mb-4 p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all"
                            href={`/blog/${post.slug}`}
                        >
                            <div className="w-full flex items-center justify-between space-x-2">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium text-lg">
                                        {post.metadata.title}
                                    </p>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                        {post.metadata.summary}
                                    </p>
                                </div>
                                {post.metadata.image && (
                                    <Image
                                        src={post.metadata.image}
                                        alt={post.metadata.title}
                                        width={100}
                                        height={60}
                                        className="rounded-lg object-cover"
                                    />
                                )}
                            </div>
                        </Link>
                    ))}
            </div>
        </section>
    )
}
