import { Images } from '@/assets/home';

export interface DestinationSection {
  id: number;
  title: string; // Changed from React.ReactNode to string
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  alt: string;
}

export interface DestinationData {
  id: string; // slug-like id, e.g., 'paris'
  name: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
  };
  sections: DestinationSection[];
}

export const destinationsData: Record<string, DestinationData> = {
  asia: {
    id: 'asia',
    name: 'Asia',
    hero: {
      title: 'Asia',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.AsiaBg,
    },
    sections: [
      {
        id: 1,
        title: 'Pakistan',
        description:
          'Experience Pakistan beyond the ordinary with exclusive escapes to iconic landscapes and cultural landmarks.Stay in handpicked properties while enjoying tailored itineraries and private local experiences. A journey defined by elegance, discovery, and refined adventure.',
        image: Images.Pakistan,
        imagePosition: 'right',
        alt: 'Luxury Paris Hotel',
      },
      {
        id: 2,
        title: 'China',
        description:
          'Discover China through curated journeys across iconic cities, ancient heritage, and modern marvels from Beijing to Shanghai and Xi’an. Experience private tours, luxury stays, and seamless travel designed with precision and cultural depth.',
        image: Images.China,
        imagePosition: 'left',
        alt: 'Parisian Experience',
      },
      {
        id: 3,
        title: 'Thailand',
        description:
          'Experience Thailand through curated wellness retreats, tropical escapes, and vibrant cultural journeys. Indulge in luxury resorts, private experiences, and holistic spa traditions designed for relaxation and renewal. A seamless blend of serenity, elegance, and immersive discovery.',
        image: Images.Thailand,
        imagePosition: 'right',
        alt: 'Parisian Experience',
      },
      {
        id: 4,
        title: 'Tokyo',
        description:
          'Discover Tokyo through a refined blend of cutting-edge modernity and timeless tradition. Enjoy exclusive stays, private cultural experiences, and world-class dining in one of the world’s most dynamic cities.',
        image: Images.Tokyo,
        imagePosition: 'left',
        alt: 'Luxury Paris Hotel',
      },
      {
        id: 5,
        title: 'Vietnam',
        description:
          'Discover Vietnam through curated journeys across vibrant cities, serene coastlines, and timeless cultural landscapes. Enjoy luxury stays, private guided experiences, and seamless travel from Hanoi to Ha Long Bay and beyond.',
        image: Images.Vietnam,
        imagePosition: 'right',
        alt: 'Parisian Experience',
      },
      {
        id: 6,
        title: 'India',
        description:
          'Experience India through curated journeys across royal heritage, vibrant cities, and serene wellness retreats. Stay in iconic palaces and luxury resorts while enjoying private cultural and spiritual experiences.',
        image: Images.India,
        imagePosition: 'left',
        alt: 'Parisian Experience',
      },
    ],
  },
  europe: {
    id: 'europe',
    name: 'Europe',
    hero: {
      title: 'Europe',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.Europe,
    },
    sections: [
      {
        id: 1,
        title: 'Italy',
        description:
          'Discover Italy’s timeless beauty through bespoke journeys from Rome to the Amalfi Coast and beyond. Indulge in luxury stays, private tours, and world-class culinary experiences. A seamless blend of art, culture, and refined indulgence.',
        image: Images.Itlay,
        imagePosition: 'right',
        alt: 'Maldives Overwater Villa',
      },
      {
        id: 2,
        title: 'United Kingdom',
        description:
          'Explore the United Kingdom with exclusive access to historic landmarks and refined city experiences. Stay in prestigious hotels while enjoying private tours and cultural encounters. A journey defined by heritage, sophistication, and timeless charm.',
        image: Images.UnitedKingdom,
        imagePosition: 'left',
        alt: 'Private Island',
      },
      {
        id: 3,
        title: 'Spain',
        description:
          'Experience Spain through vibrant cities, coastal escapes, and rich cultural heritage. Enjoy luxury accommodations, private tours, and world-renowned gastronomy. A dynamic blend of passion, elegance, and immersive discovery.',
        image: Images.Spain,
        imagePosition: 'right',
        alt: 'Maldives Overwater Villa',
      },
      {
        id: 4,
        title: 'Portugal',
        description:
          'Discover Portugal’s coastal beauty, historic charm, and world-class wine regions. Stay in boutique luxury properties while enjoying curated cultural and culinary experiences. A refined journey of relaxation, heritage, and understated elegance.',
        image: Images.Portugal,
        imagePosition: 'left',
        alt: 'Private Island',
      },
      {
        id: 5,
        title: 'Turkey',
        description:
          'Uncover Türkiye through a fusion of ancient history, vibrant bazaars, and breathtaking landscapes. Enjoy luxury stays, private guided tours, and exclusive cultural experiences.    A captivating journey where East meets West in style.',
        image: Images.Turkey,
        imagePosition: 'right',
        alt: 'Maldives Overwater Villa',
      },
      {
        id: 6,
        title: 'Greece',
        description:
          'Experience Greece through sun-soaked islands, ancient wonders, and luxury seaside retreats.Indulge in private villa stays, curated tours, and exceptional Mediterranean cuisine.A perfect blend of relaxation, culture, and timeless beauty.',
        image: Images.Greece,
        imagePosition: 'left',
        alt: 'Private Island',
      },
    ],
  },
  africa: {
    id: 'africa',
    name: 'Africa',
    hero: {
      title: 'Africa',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.Africa,
    },
    sections: [
      {
        id: 1,
        title: 'Egypt',
        description:
          'Explore Egypt’s legendary history through exclusive journeys across Cairo, Luxor, and the Nile.Enjoy luxury accommodations, private guides, and curated cultural experiences. A timeless adventure of heritage, mystery, and refined travel.',
        image: Images.Egypt,
        imagePosition: 'right',
        alt: 'Swiss Alps Chalet',
      },
      {
        id: 2,
        title: 'Morocco',
        description:
          'Discover Morocco’s vibrant culture through curated journeys across Marrakech, deserts, and coastal towns. Stay in luxury riads and enjoy private guided experiences rich in tradition.An exotic blend of color, elegance, and immersive exploration.',
        image: Images.Morroco,
        imagePosition: 'left',
        alt: 'Swiss Adventure',
      },
      {
        id: 3,
        title: 'Kenya',
        description:
          'Experience Kenya through exclusive luxury safaris across iconic wildlife reserves. Stay in premium lodges while enjoying private game drives and curated nature experiences. An unforgettable journey of adventure, elegance, and raw natural beauty.',
        image: Images.Kenya,
        imagePosition: 'right',
        alt: 'Swiss Alps Chalet',
      },
      {
        id: 4,
        title: 'Tanzania',
        description:
          'Discover Tanzania’s extraordinary landscapes through bespoke safari and nature experiences.Enjoy luxury lodges, private guides, and seamless travel across Serengeti and beyond.A refined blend of wilderness, exclusivity, and discovery.',
        image: Images.Tanzania,
        imagePosition: 'left',
        alt: 'Swiss Adventure',
      },
      {
        id: 5,
        title: 'Zanzibar ',
        description:
          'Escape to Zanzibar’s pristine beaches and crystal-clear waters with curated luxury stays.Enjoy private villas, cultural experiences, and serene coastal relaxation. A tranquil blend of island beauty, elegance, and indulgence.',
        image: Images.Zanizabir,
        imagePosition: 'right',
        alt: 'Swiss Adventure',
      },
    ],
  },
  scandinavia: {
    id: 'Scandinavia & Nordics',
    name: 'Scandinavia & Nordics',
    hero: {
      title: 'Scandinavia & Nordics',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.Scandinavia,
    },
    sections: [
      {
        id: 1,
        title: 'Norway',
        description:
          'Explore Norway’s dramatic fjords and natural wonders through curated luxury journeys.Stay in exclusive properties while enjoying private excursions and scenic experiences.A serene escape defined by nature, elegance, and discovery.',
        image: Images.Norway,
        imagePosition: 'right',
        alt: 'norway-northern-lights',
      },
      {
        id: 2,
        title: 'Sweden',
        description:
          'Discover Sweden’s refined design, vibrant cities, and tranquil landscapes. Enjoy luxury stays, private tours, and immersive cultural experiences. A perfect balance of modern elegance and natural beauty.',
        image: Images.Sweden,
        imagePosition: 'left',
        alt: 'sweden-countryside',
      },

      {
        id: 2,
        title: 'Iceland',
        description:
          'Experience Iceland’s otherworldly landscapes through curated luxury adventures.Stay in premium lodges while exploring glaciers, volcanoes, and northern lights. A journey of raw beauty, exclusivity, and unforgettable moments.',
        image: Images.Iceland,
        imagePosition: 'right',
        alt: 'vatnajukull-glacier-iceland',
      },

      {
        id: 2,
        title: 'Finland',
        description:
          'Uncover Finland’s Arctic beauty with bespoke journeys across forests and frozen landscapes.Enjoy glass igloos, private experiences, and luxury wellness retreats. A magical blend of serenity, nature, and Nordic elegance.',
        image: Images.Finland,
        imagePosition: 'left',
        alt: 'tapio-haaja-finland',
      },
    ],
  },

  middleeast: {
    id: 'middleeast',
    name: 'middleeast',
    hero: {
      title: 'Middle East',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.MiddelEast,
    },
    sections: [
      {
        id: 1,
        title: 'United Arab Emirates',
        description:
          'Experience the UAE through ultra-luxury cityscapes, desert escapes, and iconic landmarks. Stay in world-class hotels while enjoying private experiences and curated adventures. A bold blend of innovation, opulence, and modern luxury.',
        image: Images.UnitedArabEmirates,
        imagePosition: 'right',
        alt: 'mousque-shaikh-zayed-dusk',
      },
      {
        id: 2,
        title: 'Oman',
        description:
          'Discover Oman’s untouched beauty through curated journeys across deserts, mountains, and coastlines. Enjoy luxury resorts, private experiences, and authentic cultural encounters.A serene blend of tradition, nature, and refined exploration.',
        image: Images.Oman,
        imagePosition: 'left',
        alt: '',
      },

      {
        id: 3,
        title: 'Saudi Arabia',
        description:
          'Explore Saudi Arabia’s emerging luxury destinations through curated cultural and desert experiences. Stay in exclusive properties while discovering heritage sites and modern developments. A journey of discovery, authenticity, and evolving elegance.',
        image: Images.SaudiArabia,
        imagePosition: 'right',
        alt: 'Riyadh Kingdom Center',
      },
    ],
  },
  latin_america: {
    id: 'latin_america',
    name: 'Latin America',
    hero: {
      title: 'Latin America',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.LatinAmerica,
    },
    sections: [
      {
        id: 1,
        title: 'Brazil',
        description:
          'Experience Brazil’s vibrant energy through curated journeys across cities, beaches, and rainforests. Enjoy luxury stays, private tours, and immersive cultural experiences.A dynamic blend of rhythm, nature, and refined adventure.',
        image: Images.Brazil,
        imagePosition: 'right',
        alt: '',
      },
      {
        id: 2,
        title: 'Mexico',
        description:
          'Discover Mexico’s rich heritage through curated journeys across beaches, ruins, and vibrant towns. Stay in luxury resorts and boutique properties with private cultural experiences.A colourful blend of history, elegance, and coastal indulgence.',
        image: Images.Mexico,
        imagePosition: 'left',
        alt: 'maxican-maxico-city-building-park-people-twon-square-sky-clouds',
      },
    ],
  },
  antartica: {
    id: 'antartica',
    name: 'Antartica',
    hero: {
      title: 'Antarctica',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.Antartica,
    },
    sections: [
      {
        id: 1,
        title: 'Antarctica',
        description:
          'Embark on an extraordinary journey to Antarctica with exclusive expedition experiences.Travel in luxury vessels while exploring pristine ice landscapes and unique wildlife.A once-in-a-lifetime adventure defined by rarity, purity, and exploration.',
        image: Images.Antartica2,
        imagePosition: 'right',
        alt: 'Antarctica',
      },
    ],
  },
  north_america: {
    id: 'north_america',
    name: 'North America',
    hero: {
      title: 'North America',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.NorthAmerica,
    },
    sections: [
      {
        id: 1,
        title: 'Los Angeles',
        description:
          'Experience Los Angeles through iconic luxury hotels, exclusive shopping, and vibrant coastal living. Enjoy curated stays, private experiences, and world-class dining across Beverly Hills and beyond.',
        image: Images.LosAngles,
        imagePosition: 'right',
        alt: 'Los Angeles',
      },

      {
        id: 1,
        title: 'New York',
        description:
          'Discover New York through refined city experiences, iconic landmarks, and prestigious luxury stays. Enjoy private tours, rooftop dining, and world-class hospitality in the heart of Manhattan.A timeless blend of energy, culture, and elevated urban living.',
        image: Images.NewYork,
        imagePosition: 'left',
        alt: '',
      },
    ],
  },
  indian_ocean: {
    id: 'indian_ocean',
    name: 'Indian Ocean ',
    hero: {
      title: 'Indian Ocean',
      subtitle: 'Find And Book Your Perfect Destination.',
      description: 'Travel the world in style.',
      backgroundImage: Images.IndianOcean,
    },
    sections: [
      {
        id: 1,
        title: 'Maldives',
        description:
          'Experience the Maldives through ultra-luxury island escapes, private villas, and world-class hospitality. Enjoy curated stays, wellness experiences, and personalized service surrounded by crystal-clear waters. A seamless blend of luxury.',
        image: Images.Maldives,
        imagePosition: 'right',
        alt: '',
      },
      {
        id: 2,
        title: 'Mauritius',
        description:
          'Discover Mauritius through pristine beaches, turquoise lagoons, and world-class luxury resorts.Enjoy private island experiences, wellness retreats, and curated coastal adventures tailored to perfection. A serene escape defined by tropical elegance, relaxation, and refined hospitality',
        image: Images.Mauritis,
        imagePosition: 'left',
        alt: 'Mauritius',
      },
      {
        id: 1,
        title: 'Seychelles',
        description:
          'Experience Seychelles through secluded island escapes, crystal-clear waters, and untouched natural beauty. Stay in world-renowned luxury resorts while enjoying private beach experiences and curated wellness retreats.',
        image: Images.Seychelles,
        imagePosition: 'right',
        alt: '',
      },
    ],
  },
};
