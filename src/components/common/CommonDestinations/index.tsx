import { Images } from '@/assets/home';
import { Typography } from '../Typography';
import { MImage } from '../MImage';
import { destinationsData } from '@/data/destinations';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';

const PAGE_SIZE = 6;

export const CommonDestinations = () => {
  const navigate = useNavigate();
  const destinationsList = useMemo(() => Object.values(destinationsData), []);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleDestinations = destinationsList.slice(0, visibleCount);
  const hasMore = visibleCount < destinationsList.length;

  return (
    <>
      {/* Hero Banner */}
      <div
        className="bg-secondary h-[100%] w-[98%] mx-auto 2xl:h-[1080px] gap-5 bg-cover bg-no-repeat px-4 sm:px-12 sm:pt-56 pt-12 rounded-[20px]"
        style={{
          backgroundImage: `url(${Images.heroBannerImg})`,
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="largePara" color="white" weight="regular">
          Find And Book Your Perfect Destination.
        </Typography>
        <Typography variant="h1Heading" color="white" className="mt-8">
          Plan Your <br /> Next Trip
        </Typography>
        <Typography color="white" className="sm:w-[900px] mt-8 pb-5">
          Yes, you can try us for free for 30 days. If you want, we'll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </Typography>
      </div>

      {/* Destinations List */}
      {visibleDestinations.map((destination, index) => {
        // Using the map's native index guarantees 0, 1, 2, 3, 4, 5... sequentially
        const isEven = index % 2 === 0;

        return (
          <div
            key={destination.id}
            onClick={() => navigate(`/destination/${destination.id}`)}
            className="container mx-auto mt-16 px-4 cursor-pointer group"
          >
            <div className="flex flex-col sm:flex-row items-center sm:gap-20 gap-8 border-b border-gray-100 pb-16">
              {/* Text Wrapper */}
              <div
                className={`w-full sm:w-1/2 ${isEven ? 'sm:order-1' : 'sm:order-2'}`}
              >
                <Typography
                  variant="h2Heading"
                  weight="regular"
                  className="group-hover:text-primary transition-colors"
                >
                  {destination.name}
                </Typography>
                <Typography
                  color="secondary"
                  variant="mainBodyPara"
                  className="mt-8 pb-5"
                >
                  {destination.hero.description}
                </Typography>
                <div className="mt-4 inline-flex items-center text-primary font-semibold group-hover:underline">
                  Explore Destination &rarr;
                </div>
              </div>

              {/* Image Wrapper */}
              <div
                className={`w-full sm:w-1/2 ${isEven ? 'sm:order-2' : 'sm:order-1'} overflow-hidden rounded-2xl`}
              >
                <MImage
                  src={destination.hero.backgroundImage}
                  alt={destination.name}
                  className="w-full object-cover h-[300px] sm:h-[400px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount(prev => prev + PAGE_SIZE)}
            className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Load More Destinations
          </button>
        </div>
      )}
    </>
  );
};
