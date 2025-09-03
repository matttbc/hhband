'use client';

import { useState } from 'react';

interface KeyEvent {
  year: string;
  event: string;
}

interface HistoryImage {
  src: string;
  caption: string;
  alt: string;
}

interface HistoryPeriod {
  id: string;
  title: string;
  summary: string;
  content: string;
  images?: HistoryImage[];
  keyEvents: KeyEvent[];
}

interface HistoryClientProps {
  periods: HistoryPeriod[];
}

export default function HistoryClient({ periods }: HistoryClientProps) {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);

  const togglePeriod = (id: string) => {
    setExpandedPeriod(expandedPeriod === id ? null : id);
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Our History</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">The Musical Stationers</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hemel Hempstead Band has a remarkable heritage spanning over 130 years. Originally formed as the John Dickinson Company Band in 1894, our story is one of community spirit, musical excellence, and remarkable resilience through changing times.
            </p>
            <p className="text-gray-600 italic">
              "Their playing brought the Royal Albert Hall audience to its feet" - Peter Davis and Michael Stanyon
            </p>
          </div>

          <div className="space-y-6">
            {periods.map((period) => (
              <div key={period.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => togglePeriod(period.id)}
                  className="w-full p-6 text-left hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{period.title}</h3>
                      <p className="text-gray-700">{period.summary}</p>
                    </div>
                    <div className="text-blue-600 text-2xl">
                      {expandedPeriod === period.id ? '−' : '+'}
                    </div>
                  </div>
                </button>
                
                {expandedPeriod === period.id && (
                  <div className="border-t bg-blue-50 p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="prose prose-lg text-gray-700 leading-relaxed mb-6">
                          {period.content.split('\\n\\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4">{paragraph}</p>
                          ))}
                        </div>
                        
                        {period.images && period.images.length > 0 && (
                          <div className="mt-8">
                            <h4 className="font-semibold text-blue-900 mb-4">Historical Images</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {period.images.map((image, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-lg shadow">
                                  <img 
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-48 object-cover object-top rounded mb-2"
                                  />
                                  <p className="text-sm text-gray-600 italic">{image.caption}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-3">Key Events</h4>
                        <div className="space-y-2">
                          {period.keyEvents.map((event, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold min-w-[3rem] text-center">
                                {event.year}
                              </span>
                              <span className="text-gray-700 text-sm">{event.event}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Notable Members</h3>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Peter Davis - Band President</h4>
              <p className="text-gray-700 mb-4">
                When Peter joined the John Dickinson band as an engineering apprentice in 1946, he would not have imagined that over seventy years later he would still be playing. His remarkable service to the band was recognized with an invitation to a Buckingham Palace garden party in 2006, and he was made Band President in 2014.
              </p>
              <p className="text-gray-600 text-sm">
                One memorable event was during his national service in the RAF when he was permitted special leave in July 1952 to play for HM The Queen's visit to Hemel Hempstead.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
              Return to Home
            </a>
            <a href="/gallery" className="ml-4 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
              View Gallery
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Hemel Hempstead Band. All rights reserved.</p>
          <p className="mt-2 text-blue-200">Founded 1894 • Over 130 Years of Music</p>
        </div>
      </footer>
    </>
  );
}