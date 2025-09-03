import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface Concert {
  title: string;
  date: string;
  venue: string;
  address?: string;
  description: string;
  price?: string;
  image?: string | null;
}

export interface GalleryItem {
  title: string;
  image: string;
  caption?: string;
  date?: string;
  category?: string;
}

export interface ContentData {
  hero: {
    image: string;
    alt: string;
  };
  about: {
    title: string;
    content: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
  };
  join: {
    title: string;
    subtitle: string;
    description: string;
    offers: string[];
    rehearsal_details: {
      when: string;
      where: string;
      bring: string;
      first_visit: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
    social: {
      title: string;
      description: string;
      links: Array<{
        name: string;
        url: string;
      }>;
    };
  };
}

export function getConcerts(): Concert[] {
  const filePath = path.join(process.cwd(), 'data', 'concerts.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents) as { concerts: Concert[] };
  return data.concerts || [];
}

export function getGallery(): GalleryItem[] {
  const filePath = path.join(process.cwd(), 'data', 'gallery.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents) as { gallery: GalleryItem[] };
  return data.gallery || [];
}

export function getContent(): ContentData {
  const filePath = path.join(process.cwd(), 'data', 'content.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents) as ContentData;
  return data;
}