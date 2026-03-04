// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Relief Operation
export interface DrupalOperation extends DrupalNode {
  disasterType?: DrupalTerm[]
  operationStatus?: string
  location?: string
  startDate?: {
    timestamp: number
  }
  peopleServed?: string
}

export interface OperationsData {
  nodeOperations: {
    nodes: DrupalOperation[]
  }
}

// Resource
export interface DrupalResource extends DrupalNode {
  resourceType?: DrupalTerm[]
  audience?: string
  downloadUrl?: string
}

export interface ResourcesData {
  nodeResources: {
    nodes: DrupalResource[]
  }
}

// Situation Update
export interface DrupalUpdate extends DrupalNode {
  operationName?: string
  updateDate?: {
    timestamp: number
  }
  urgencyLevel?: string
}

export interface UpdatesData {
  nodeUpdates: {
    nodes: DrupalUpdate[]
  }
}

// Team Member
export interface DrupalTeamMember extends DrupalNode {
  position?: string
  department?: DrupalTerm[]
  email?: string
  phone?: string
  photo?: DrupalImage
}

export interface TeamMembersData {
  nodeTeamMembers: {
    nodes: DrupalTeamMember[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
