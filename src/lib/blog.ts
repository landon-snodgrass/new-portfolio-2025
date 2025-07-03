import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readTime: string
  content: string
}

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(blogDirectory)) {
    fs.mkdirSync(blogDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read MDX file as string
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        content: matterResult.content,
        ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
      }
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      content: matterResult.content,
      ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
    }
  } catch (error) {
    console.error(error);
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const allTags = posts.flatMap(post => post.tags)
  return [...new Set(allTags)].sort()
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllBlogPosts()
  return posts.filter(post => post.tags.includes(tag))
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}