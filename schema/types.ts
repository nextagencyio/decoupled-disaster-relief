// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeOperation {
  id: string;
  body: { value: string; summary?: string };
  disasterType: any[];
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  operationStatus: string;
  path: string;
  peopleServed: string;
  startDate: { time: string };
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeResource {
  id: string;
  audience: string;
  body: { value: string; summary?: string };
  downloadUrl: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  resourceType: any[];
  title: string;
}

export interface NodeTeamMember {
  id: string;
  body: { value: string; summary?: string };
  department: any[];
  email: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}

export interface NodeUpdate {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  operationName: string;
  path: string;
  title: string;
  updateDate: { time: string };
  urgencyLevel: string;
}
