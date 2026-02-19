import type { Metadata } from 'next'
import { ProjectPosts } from 'app/components/project-posts'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <ProjectPosts />
    </section>
  )
}
