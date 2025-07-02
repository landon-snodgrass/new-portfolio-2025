import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ProjectData {
  title: string
  description: string
  technologies: string[]
  status: 'completed' | 'in-progress' | 'coming-soon'
  featured: boolean
  order: number
  slug: string
  content: string
  image?: string
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
}

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects(): ProjectData[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read MDX file as string
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        content: matterResult.content,
        ...(matterResult.data as Omit<ProjectData, 'slug' | 'content'>),
      }
    })

  // Sort by order (ascending - lower numbers first)
  return allProjectsData.sort((a, b) => a.order - b.order)
}

export function getFeaturedProjects(): ProjectData[] {
  return getAllProjects().filter(project => project.featured)
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      content: matterResult.content,
      ...(matterResult.data as Omit<ProjectData, 'slug' | 'content'>),
    }
  } catch (error) {
    return null
  }
}