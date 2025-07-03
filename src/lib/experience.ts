import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ExperienceData {
  title: string
  company: string
  location: string
  period: string
  skills: string[]
  order: number
  slug: string
  content: string
}

const experienceDirectory = path.join(process.cwd(), 'content/experience')

export function getAllExperience(): ExperienceData[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(experienceDirectory)) {
    fs.mkdirSync(experienceDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(experienceDirectory)
  const allExperienceData = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read MDX file as string
      const fullPath = path.join(experienceDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        content: matterResult.content,
        ...(matterResult.data as Omit<ExperienceData, 'slug' | 'content'>),
      }
    })

  // Sort by order (ascending - lower numbers first)
  return allExperienceData.sort((a, b) => a.order - b.order)
}

export async function getExperienceBySlug(slug: string): Promise<ExperienceData | null> {
  try {
    const fullPath = path.join(experienceDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      content: matterResult.content,
      ...(matterResult.data as Omit<ExperienceData, 'slug' | 'content'>),
    }
  } catch (error) {
    console.error(error);
    return null
  }
}