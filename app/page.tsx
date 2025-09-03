import { getConcerts, getContent } from '@/lib/data';
import PageClient from './page-client';

export default function Home() {
  const concerts = getConcerts();
  const content = getContent();
  
  return <PageClient concerts={concerts} content={content} />;
}