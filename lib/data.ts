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

const NOTION_VERSION = '2022-06-28';

function plainText(richText: any[] | undefined): string {
  return (richText || []).map((rt) => rt.plain_text ?? '').join('').trim();
}

// The Image text field holds either a bare filename (e.g. "HH-Christmas.jpg"),
// resolved against public/images, or a full external URL, passed through as-is.
function imagePath(value: string): string | null {
  if (!value) return null;
  if (value.startsWith('http') || value.startsWith('/')) return value;
  return `/images/${value}`;
}

// The Photo files field accepts both uploads and linked URLs. Notion's own
// uploads come back as S3 links signed for one hour, so the page must be
// rebuilt more often than that (see `revalidate` in app/page.tsx) or visitors
// get broken images. Linked files return a permanent URL and are exempt.
function fileUrl(files: any[] | undefined): string | null {
  const file = (files || [])[0];
  if (!file) return null;
  return file.type === 'external'
    ? file.external?.url ?? null
    : file.file?.url ?? null;
}

function toConcert(page: any): Concert | null {
  const props = page.properties ?? {};
  const title = plainText(props.Name?.title);
  const date = props.Date?.date?.start;

  // A row with no title or no date isn't a concert anyone can attend.
  if (!title || !date) return null;

  return {
    title,
    date,
    venue: plainText(props.Venue?.rich_text),
    address: plainText(props.Address?.rich_text) || undefined,
    description: plainText(props.Description?.rich_text),
    price: plainText(props.Price?.rich_text) || undefined,
    // A photo dropped into Notion wins over a filename typed into Image.
    image: fileUrl(props.Photo?.files) ?? imagePath(plainText(props.Image?.rich_text)),
  };
}

export async function getConcerts(): Promise<Concert[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_CONCERTS_DB_ID;

  if (!apiKey || !databaseId) {
    console.error('[concerts] NOTION_API_KEY or NOTION_CONCERTS_DB_ID is not set');
    return [];
  }

  // Date-only comparison, so a concert stays listed for the whole of its own day
  // rather than vanishing the moment it starts.
  const today = new Date().toISOString().slice(0, 10);

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Notion-Version': NOTION_VERSION,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
            and: [
              { property: 'Date', date: { on_or_after: today } },
              { property: 'Published', checkbox: { equals: true } },
            ],
          },
          sorts: [{ property: 'Date', direction: 'ascending' }],
          page_size: 50,
        }),
      }
    );

    if (!res.ok) {
      console.error(`[concerts] Notion returned ${res.status}: ${await res.text()}`);
      return [];
    }

    const data = await res.json();
    return (data.results ?? []).map(toConcert).filter(Boolean) as Concert[];
  } catch (error) {
    console.error('[concerts] failed to fetch from Notion:', error);
    return [];
  }
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