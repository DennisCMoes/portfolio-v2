import { Project } from '@/types'

export async function getAllProjects(
  makeDefaultSize: boolean = false
): Promise<Project[]> {
  return projects
    .sort((a, b) => b.date.valueOf() - a.date.valueOf())
    .map((project) => ({
      ...project,
      size: makeDefaultSize ? 'default' : project.size,
    }))
}

export async function getAllFeaturedProjects(): Promise<Project[]> {
  return (await getAllProjects()).filter((project) => project.isFeatured)
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  return projects.find((project) => project.slug === slug)!
}

const projects: Project[] = [
  {
    title: 'AES encryption',
    subtitle: 'Encrypt files and folders with AES-256',
    icon: 'IconShieldLock',
    slug: 'aes-encryption',
    date: new Date('2024-01-10T00:00:00.000Z'),
    size: 'large',
    isFeatured: true,
  },
  {
    title: 'Zoo',
    subtitle: 'A java zoo with inherited animals',
    icon: 'IconPaw',
    slug: 'zoo',
    date: new Date('2023-05-25T00:00:00.000Z'),
    size: 'small',
    isFeatured: true,
  },
  {
    title: 'Musicbox',
    subtitle: 'A mobile music player',
    icon: 'IconVinyl',
    slug: 'music-box',
    date: new Date('2022-11-11T00:00:00.000Z'),
    size: 'small',
    isFeatured: true,
  },
  {
    title: 'Pong',
    subtitle: 'Made with 8086 architecture assembly',
    icon: 'IconPingPong',
    slug: 'pong',
    date: new Date('2024-03-13T00:00:00.000Z'),
    size: 'medium',
    isFeatured: true,
  },
  {
    title: 'Car Dealership',
    subtitle: 'Manage cars on the ethereum blockchain',
    icon: 'IconCarGarage',
    slug: 'car-dealership',
    date: new Date('2023-03-28T00:00:00.000Z'),
  },
  {
    title: 'Social Connect',
    subtitle: 'Manage your social life via this API',
    icon: 'IconUserSearch',
    slug: 'social-connect',
    date: new Date('2023-09-01T00:00:00.000Z'),
  },
]
