import type { ImageMetadata } from "astro";
import profile from "./profile.png";
import dominiqx1 from "./projects/dominiqx-1.png";
import dominiqx2 from "./projects/dominiqx-2.png";
import dominiqx3 from "./projects/dominiqx-3.png";
import tdh1 from "./projects/tdh-1.png";
import tdh2 from "./projects/tdh-2.png";
import tdh3 from "./projects/tdh-3.png";

export interface ImageAsset {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export const profileImage = profile;

export const dominiqxProjectImages: ImageAsset[] = [
  {
    src: dominiqx1,
    alt: "DOMINIQX AI chat interface with Knowledge Vault and document-based Q&A",
    caption: "AI Chat · Knowledge Vault & RAG Conversations",
  },
  {
    src: dominiqx2,
    alt: "DOMINIQX Ask DOM AI hub with Sight, Upload, and agent stitching",
    caption: "Unified AI Hub · Sight, Vault & Personal Assistants",
  },
  {
    src: dominiqx3,
    alt: "DOMINIQX integrated business dashboard with Ask DOM assistant",
    caption: "Enterprise Dashboard · Ask DOM & Business Operations",
  },
];

export const tdhProjectImages: ImageAsset[] = [
  {
    src: tdh1,
    alt: "TDH Engine map view with pipeline routing and hydraulic design tools",
    caption: "Infrastructure Map · Pipeline Design & TDH Analysis",
  },
  {
    src: tdh2,
    alt: "TDH AI assistant performing pump calculations and data extraction",
    caption: "TDH AI · Engineering Calculations & Pump Optimization",
  },
  {
    src: tdh3,
    alt: "TDH Engine calculator with hydraulic data table and column configuration",
    caption: "TDH Engine · Hydraulic Calculator & Design Data",
  },
];

export function getImageUrl(image: ImageMetadata): string {
  return image.src;
}
