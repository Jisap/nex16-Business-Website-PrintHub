
import { blogPosts } from "@/app/lib/blogData"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20 px-[5%] lg:px-[12%] min-h-screen text-white bg-body">
      <Link href="/#blog" className="inline-flex items-center gap-2 mb-8 text-secondary hover:text-white transition-colors cursor-pointer">
        <i className="bi bi-arrow-left text-xl"></i> <span className="Syne font-bold">Back to Blog</span>
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="relative w-full h-[300px] md:h-[500px] mb-8 rounded-2xl overflow-hidden border border-gray-800">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-2">
            <i className="bi bi-calendar-event text-xl text-secondary"></i>
            <span className="Inter">{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="bi bi-person text-xl text-secondary"></i>
            <span className="Inter">Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="bi bi-patch-question text-xl text-secondary"></i>
            <span className="Inter">{post.comments} Comments</span>
          </div>
        </div>

        <h1 className="Syne font-bold text-3xl md:text-5xl mb-8 leading-tight">{post.title}</h1>

        <div
          className="Inter text-gray-300 leading-relaxed text-lg space-y-6 blog-content-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
