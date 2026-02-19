import Link from 'next/link'
import Image from 'app/components/image'
import { formatDate, getProjectPosts } from 'app/projects/utils'

export function ProjectPosts() {
  let allProjects = getProjectPosts()

  return (
    <div>
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
            className="flex items-start gap-4 mb-4 p-4 -mx-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all"
            href={`/projects/${post.slug}`}
          >
            {post.slug === 'rider-weather' ? (
              <Image
                src="/rider-weather.png"
                alt="Rider Weather"
                width={60}
                height={60}
                className="rounded-xl shrink-0"
              />
            ) : post.slug === 'honest-weather' ? (
              <Image
                src="/honest-weather.png"
                alt="Honest Weather"
                width={60}
                height={60}
                className="rounded-xl shrink-0"
              />
            ) : post.slug === 'convex-currency-converter' ? (
              <Image
                src="/convex-currency-converter.png"
                alt="Convex - Currency Converter"
                width={60}
                height={60}
                className="rounded-xl shrink-0"
              />
            ) : post.slug === 'rider-dashboard-speedometer' ? (
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
              <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mb-1">
                {post.metadata.summary}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
