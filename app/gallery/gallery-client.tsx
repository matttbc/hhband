'use client';

import { GalleryItem } from '@/lib/data';
import { useState } from 'react';

interface GalleryClientProps {
  items: GalleryItem[];
}

export default function GalleryClient({ items }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-GB', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo-blue-small.png" alt="Hemel Hempstead Band" className="h-16" />
            <nav>
              <a href="/" className="text-blue-800 hover:text-blue-600 font-semibold"
                 style={{fontFamily: "'Optima', 'Trebuchet MS', sans-serif"}}>
                ← Back to Home
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                 onClick={() => setSelectedImage(item)}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                {item.caption && (
                  <p className="text-gray-600 text-sm mb-2">{item.caption}</p>
                )}
                {item.date && (
                  <p className="text-gray-500 text-xs">{formatDate(item.date)}</p>
                )}
                {item.category && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
                    {item.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
             onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <button onClick={() => setSelectedImage(null)} 
                        className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
              </div>
            </div>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full" />
            <div className="p-4">
              {selectedImage.caption && (
                <p className="text-gray-700 mb-2">{selectedImage.caption}</p>
              )}
              <div className="flex justify-between text-sm text-gray-500">
                {selectedImage.date && <span>{formatDate(selectedImage.date)}</span>}
                {selectedImage.category && <span>{selectedImage.category}</span>}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Hemel Hempstead Band. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}