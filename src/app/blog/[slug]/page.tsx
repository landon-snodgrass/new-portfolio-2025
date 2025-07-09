import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPostBySlug, getAllBlogPosts, formatDate } from "@/lib/blog";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { MDXComponents } from "@/lib/useMDXComponents";

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const components = MDXComponents({});

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header */}
      <header className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-burnt-orange hover:text-deep-brown transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Post meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-deep-brown mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 bg-burnt-orange bg-opacity-10 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={components} />
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-burnt-orange hover:text-deep-brown transition-colors"
            >
              <ArrowLeft size={20} />
              Back to all posts
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
