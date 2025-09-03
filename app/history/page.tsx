import HistoryClient from './history-client';

export default function HistoryPage() {
  const historyData = [
    {
      id: 'foundation',
      title: 'Foundation Years (1894-1919)',
      summary: 'The band was formed when employees approached John Dickinson & Co. management in 1894.',
      content: `During the late Victorian period making music was a popular way of relaxing and escape; especially from difficult occupations. In 1894 several enthusiasts approached the management of the John Dickinson Apsley stationery mill about the creation of a company band. This approach was fully ratified in 1900 when band members were allowed six half-days for band matters.

On the first anniversary of their formation the members and their wives were invited to tea by the firm's general manager, R H Ling who praised them for their rapid progress; the occasion concluded with a concert and solo performances.

Competitions provided a spur to improvement as well as bringing cash prizes. During 1888 their first attempt at competition yielded three prizes totalling £8-10s. During these early days the band frequently played for summer concerts in the gardens of local houses. In due course an invitation came from the London County Council to play in London Parks from 1913; a tradition which would continue with breaks until 2003.

Their first conductor, Mr Baugham was paid £12 annually until he retired in 1919. Notable fund-raising events supported by the band included troop comforts during the Boer War, celebrating the relief of Mafeking, also the Titanic relief fund.`,
      images: [
        {
          src: '/images/Image-1-History-June-1922.jpg',
          caption: 'Historic band photograph from June 1922',
          alt: 'Hemel Hempstead Band June 1922'
        },
        {
          src: '/images/Image-2-History-Music-sheet.jpg', 
          caption: 'Original music sheet from the early years',
          alt: 'Historical music sheet'
        }
      ],
      keyEvents: [
        { year: '1894', event: 'Band formation approached' },
        { year: '1900', event: 'Officially ratified with six half-days for band matters' },
        { year: '1888', event: 'First competition prizes (£8-10s)' },
        { year: '1913', event: 'London Parks performances begin' },
        { year: '1919', event: 'First conductor Mr Baugham retires' }
      ]
    },
    {
      id: 'growth',
      title: 'Growth Period (1920s-1930s)',
      summary: 'Rapid competition success and BBC radio broadcasts established the band\'s reputation.',
      content: `The rapid growth of the company meant that many men had to fight during the First World War with 116 Apsley employees losing their lives. Inevitably this had an effect on the band's members. At the dedication ceremony of the company's war memorial in July 1922, it was natural that buglers from the band were called on to sound the Last Post and Reveille.

During the 1930's a general resurgence in brass band playing brought competition playing to the fore. These were arranged around four stages of ability graded from four up to one which was Championship standard. The band entered group four in 1932, by the following year they had won six trophies and been promoted to group three, the next year five trophies leading to advancement to the Championship group.

Recognition of their abilities was rewarded by an invitation to play on a BBC radio broadcast in March 1935. Then, from 1937 until the outbreak of the Second World War they broadcast almost monthly. One of the tunes frequently played was The Basildon March composed by their Conductor, JC Dyson. The title recalled the company's then famous Basildon Bond writing stationery range.`,
      keyEvents: [
        { year: '1922', event: 'War memorial dedication ceremony' },
        { year: '1932', event: 'Entered group four competitions' },
        { year: '1933', event: 'Won six trophies, promoted to group three' },
        { year: '1934', event: 'Five trophies, advanced to Championship group' },
        { year: '1935', event: 'First BBC radio broadcast' },
        { year: '1937-1939', event: 'Monthly BBC broadcasts' }
      ]
    },
    {
      id: 'postwar',
      title: 'Post-War Revival (1946-1965)',
      summary: 'Reformed after WWII with new talents and professional conductors.',
      content: `Wartime forced the cessation of activities until 1946 when the band was reformed; this time Peter Davis, a young fourteen-year-old engineering apprentice, was amongst the new recruits. By 1948 the band had returned to competitions achieving National Competition standard again in 1957.

They had been fortunate in gaining the services of Philip Catalinet, a professor at Trinity College of Music, as Conductor who composed the march, The Lion Rampant, reflecting the company's famous Lion Brand range of stationery. Geoffrey Brand then took them to new heights as Music Director and Conductor. He had been professionally trained and was a music producer for the BBC. After several years with the Dickinson band Brand left to become the professional conductor for the well-known Black Dyke Mills Band.

During the 1960's the fortunes of several of the local bands were in jeopardy with players being absorbed into the Dickinson Band. Unfortunately, in 1965, this coincided with the John Dickinson company sponsorship coming to an end when Dickinson's merged with the Bristol-based Robinson Group (DRG). Despite this severance the company allowed the band members to retain the instruments and uniforms.`,
      keyEvents: [
        { year: '1946', event: 'Band reformed after WWII' },
        { year: '1948', event: 'Returned to competitions' },
        { year: '1952', event: 'Royal visit performance for HM The Queen' },
        { year: '1957', event: 'Achieved National Competition standard' },
        { year: '1965', event: 'Dickinson sponsorship ends' }
      ]
    },
    {
      id: 'survival',
      title: 'Survival Period (1965-1999)',
      summary: 'Overcame loss of sponsorship through community support and adult education.',
      content: `The band might have ceased to exist after Dickinson's withdrew their support in 1965, however, the will to survive, without either sponsorship or practice facilities, produced an unexpected solution. An approach to the Mayor of Hemel Hempstead at a period of Hemel Hempstead's growth as a New Town meant that many agencies were cooperating. The solution was the creation of an evening class in the local adult education college. During this period the name was changed to The Hemel Hempstead Band.

The lack of sponsorship and the high cost of uniforms and instruments created a financial crisis. Funds were raised by jumble sales and carol singing to supplement performance fees. Then in 1982 the band's name was changed to the Hemel Hempstead Atlas Copco Band after obtaining new sponsorship with the local branch of a Swedish company making air compressors. They became augmented by players from two other struggling local bands. Several concerts abroad were memorable highlights of this period.

The pre-war radio broadcasts were repeated during the 1960's and 70's with regular appearances on Friday Night is Music Night and the Charlie Chester Show. Additionally, there were recording sessions, originally on twelve-inch vinyl records, and later on CD and DVD discs.

Support from the Heritage Lottery Fund was obtained in 1988 for buying new instruments and again in 2006 for recording their history by holding an exhibition, publishing their story and the creation of a web site.`,
      keyEvents: [
        { year: '1965', event: 'Name changed to Hemel Hempstead Band' },
        { year: '1982', event: 'Atlas Copco sponsorship begins' },
        { year: '1988', event: 'Heritage Lottery Fund support' },
        { year: '1999', event: 'Atlas Copco sponsorship ends' }
      ]
    },
    {
      id: 'modern',
      title: 'Modern Era (1999-Present)',
      summary: 'Returned to original roots with support from Apsley Paper Trail.',
      content: `Losing the Atlas Copco sponsorship meant that once again the band was without storage for its instruments and the huge library of music and practice facilities. It was at about this time that the John Dickinson Stationery company was vacating its Apsley site, some of it in favour of The Apsley Paper Trail (APT). Although APT was unable to offer financial sponsorship they did provide valuable storage and practice facilities.

Through this offer some of the earlier John Dickinson Band members could return to their original home; including Peter Davis. Peter joined the John Dickinson band as an engineering apprentice in 1946 and over seventy years later was still playing. His work for the band was rewarded in 2006 by an invitation to a Buckingham Palace garden party with his wife Eve. He was made Band President in 2014.

A tragic event occurred in August 2004 whilst playing in a Chesham Park when an audience member was fatally stabbed. Band members rendered assistance and calmed the audience but were affected by shock after the event. In contrast to this, band members have often boasted about how they brought the audience of The Royal Albert Hall to their feet with their rendition of the National Anthem!`,
      images: [
        {
          src: '/images/Band-Photo-2023-edited.jpg',
          caption: 'The band in 2023 - continuing our proud tradition',
          alt: 'Hemel Hempstead Band 2023'
        },
        {
          src: '/images/Band-Photo-2024.jpg',
          caption: 'Our most recent band photograph from 2024',
          alt: 'Hemel Hempstead Band 2024'
        },
        {
          src: '/images/Image-3-History.jpg',
          caption: 'Historical archive photograph',
          alt: 'Historical band photograph'
        }
      ],
      keyEvents: [
        { year: '1999', event: 'Partnership with Apsley Paper Trail begins' },
        { year: '2004', event: 'Chesham Park incident' },
        { year: '2006', event: 'Peter Davis attends Buckingham Palace garden party' },
        { year: '2014', event: 'Peter Davis becomes Band President' }
      ]
    }
  ];

  return <HistoryClient periods={historyData} />;
}