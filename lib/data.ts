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