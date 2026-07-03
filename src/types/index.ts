import type { ImageMetadata } from "astro";

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  aiExpertise: AIExpertiseItem[];
  techExpertise: TechExpertiseItem[];
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  highlights?: string[];
}

export interface AIExpertiseItem {
  title: string;
  description: string;
  icon: AIExpertiseIcon;
}

export type AIExpertiseIcon =
  | "agents"
  | "rag"
  | "chat"
  | "vision"
  | "multimodal"
  | "tools"
  | "prompt"
  | "search"
  | "vector"
  | "workflow"
  | "enterprise"
  | "context"
  | "streaming"
  | "llm";

export interface TechExpertiseItem {
  title: string;
  description: string;
  icon: TechExpertiseIcon;
  tags?: string[];
}

export type TechExpertiseIcon =
  | "node"
  | "vue"
  | "react"
  | "api"
  | "database"
  | "auth"
  | "devops"
  | "integration"
  | "frontend"
  | "realtime"
  | "typescript"
  | "saas";

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
  highlights?: string[];
}

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  tagline?: string;
  flagship?: boolean;
  aiPlatform?: boolean;
  category?: string;
  technologies?: string[];
  highlights?: string[];
  features?: ProjectFeature[];
  images?: ProjectImage[];
  image?: ImageMetadata;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: ImageMetadata;
}

export interface HeaderProps {
  siteLogo: ImageMetadata;
  navLinks: { text: string; href: string }[];
}
