import { Concert } from '@/lib/data';

interface ConcertsProps {
  concerts: Concert[];
}

export default function Concerts({ concerts }: ConcertsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-4">
      {concerts.map((concert, index) => (
        <div key={index} className="border-l-4 border-blue-500 pl-4">
          <p className="font-semibold text-gray-800">{concert.title}</p>
          <p className="text-gray-600">{formatDate(concert.date)} - {concert.venue}</p>
          {concert.description && (
            <p className="text-gray-600 mt-1">{concert.description}</p>
          )}
          {concert.price && (
            <p className="text-gray-500 text-sm mt-1">Tickets: {concert.price}</p>
          )}
        </div>
      ))}
    </div>
  );
}