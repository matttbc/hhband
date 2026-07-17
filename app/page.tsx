import { getConcerts, getContent } from '@/lib/data';
import PageClient from './page-client';

// Notion query results aren't covered by Next's data cache (POST requests are
// never cached), so the page itself is rebuilt periodically to pick up edits.
// Kept to 30 minutes rather than an hour: photos uploaded to Notion are served
// from S3 links that expire 60 minutes after we fetch them, so the cached HTML
// must be replaced well before its image URLs go stale.
export const revalidate = 1800;

export default async function Home() {
  const concerts = await getConcerts();
  const content = getContent();

  return <PageClient concerts={concerts} content={content} />;
}
