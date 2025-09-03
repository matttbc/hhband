import { getConcerts } from '@/lib/data';
import PageClient from './page-client';

export default function Home() {
  const concerts = getConcerts();
  
  return <PageClient concerts={concerts} />;
}