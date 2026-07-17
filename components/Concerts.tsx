import Image from 'next/image';
import { Concert } from '@/lib/data';

interface ConcertsProps {
  concerts: Concert[];
}

// next/image throws on any host missing from next.config's remotePatterns, which
// would break the whole homepage if someone pasted a link from an unexpected
// domain into Notion. Optimise the sources we control; serve the rest untouched
// rather than let one pasted URL take the page down.
const OPTIMISED_HOSTS = ['prod-files-secure.s3.us-west-2.amazonaws.com'];

function canOptimise(src: string): boolean {
  if (src.startsWith('/')) return true;
  try {
    return OPTIMISED_HOSTS.includes(new URL(src).hostname);
  } catch {
    return false;
  }
}

export default function Concerts({ concerts }: ConcertsProps) {
  const formatDate = (dateString: string) => {
    // Notion omits the time portion when a date is entered without one; showing
    // "00:00" in that case would invent a start time the band never gave.
    const hasTime = dateString.includes('T');
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...(hasTime ? { hour: '2-digit' as const, minute: '2-digit' as const } : {}),
    });
  };

  if (concerts.length === 0) {
    return (
      <p className="text-gray-600">
        No dates are announced just yet — please check back soon.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {concerts.map((concert, index) => (
        <div key={index} className="border-l-4 border-blue-500 pl-4">
          <div className={`${concert.image ? 'md:flex md:items-start md:gap-4' : ''}`}>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{concert.title}</p>
              <p className="text-gray-600">{formatDate(concert.date)} - {concert.venue}</p>
              {concert.description && (
                <p className="text-gray-600 mt-1">{concert.description}</p>
              )}
              {concert.price && (
                <p className="text-gray-500 text-sm mt-1">Tickets: {concert.price}</p>
              )}
            </div>
            {concert.image && (
              <div className="mt-3 md:mt-0 md:flex-shrink-0">
                <div className="relative w-full md:w-24 md:h-24 h-48">
                  {canOptimise(concert.image) ? (
                    <Image
                      src={concert.image}
                      alt={concert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 96px"
                      className="object-cover rounded-lg"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={concert.image}
                      alt={concert.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}