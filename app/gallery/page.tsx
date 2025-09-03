import { getGallery } from '@/lib/data';
import GalleryClient from './gallery-client';

export default function GalleryPage() {
  const galleryItems = getGallery();
  
  // Sort by date, newest first
  const sortedItems = [...galleryItems].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
  
  return <GalleryClient items={sortedItems} />;
}