import { getConcerts, getContent } from '@/lib/data';
import PageClient from './page-client';

// Notion query results aren't covered by Next's data cache (POST requests are
// never cached), so the page itself is rebuilt periodically to pick up edits.
// 15 minutes: well under the 60-minute expiry on Notion's uploaded-photo S3
// links, so cached HTML is always replaced before its image URLs go stale.
export const revalidate = 900;

export default async function Home() {
  const concerts = await getConcerts();
  const content = getContent();

  return <PageClient concerts={concerts} content={content} />;
}
