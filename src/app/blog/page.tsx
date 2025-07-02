import Link from 'next/link'
import { getAllBlogPosts, formatDate } from '@/lib/blog'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag } from 'lucide-react'

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-[#F5F2E8]">
      {/* Header */}
      <header className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="fascinate-font text-4xl md:text-6xl text-[#CC5500] mb-6">
            Technical Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real-world insights from building production applications, 
            technical challenges, and lessons learned from the trenches.
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#4A3426] mb-4 hover:text-[#CC5500] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 bg-[#CC5500] bg-opacity-10 text-[#CC5500] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#CC5500] font-medium hover:text-[#4A3426] transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}