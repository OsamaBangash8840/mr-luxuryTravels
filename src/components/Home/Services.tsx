import { Images } from '@/assets/home';
import { MImage, Typography } from '../common';

export const Services = () => {
  return (
    <section className="container mt-10 xl:mt-20">
      <div className="sm:w-[60%]">
        <Typography variant="h2Heading">Services</Typography>
        <Typography className="mt-5">
          MRLUXURYTRAVELS is dedicated to providing the ultimate lifestyle
          service, guiding you through the ever-changing world of luxury, making
          every moment a memory. Whether you require assistance with your
          day-to-day life or your lifelong dreams, the MRLUXURYTRAVELS team are
          experts in all things luxury
        </Typography>
      </div>
      <div className="flex justify-center items-center gap-3 mt-10 md:-mt-12 xl:mt-16 2xl:mt-32 min-h-[500px]">
        {/* Left column - single large image - Hidden on mobile */}
        <div className="hidden sm:block relative sm:w-1/4 rounded-[20px]">
          <MImage src={Images.Service9} alt="" />
          <div className="gradient-overlay" />
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <Typography variant="destinationTitle" className="text-white mb-1">
              Bespoke Travel Planning
            </Typography>
            <Typography variant="mainBodyPara" className="text-white/90">
              Dream. Plan. Explore.
            </Typography>
          </div>
        </div>

        {/* Middle column - single large image - Hidden on mobile */}
        <div className="hidden sm:block relative sm:w-1/4 rounded-[20px]">
          <MImage src={Images.Service10} alt="" />
          <div className="gradient-overlay" />
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <Typography variant="destinationTitle" className="text-white mb-1">
              Corporate Travel and Events
            </Typography>
            <Typography variant="mainBodyPara" className="text-white/90">
              Explore Without Limits
            </Typography>
          </div>
        </div>

        {/* Right column - grid of images - Full width on mobile */}
        <div className="w-full sm:w-1/2 flex flex-col gap-3 xl:gap-18">
          {/* Top row - two images side by side */}
          <div className="flex gap-3">
            <div className="relative w-1/2 rounded-[20px] h-[200px] sm:h-auto overflow-hidden">
              <MImage
                src={Images.Service17}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay" />
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
                <Typography
                  variant="destinationTitle"
                  className="text-white mb-1 !text-[18px] sm:!text-[24px]"
                >
                  Cruises
                </Typography>
                <Typography
                  variant="mainBodyPara"
                  className="text-white/90 !text-[12px] sm:!text-[14px]"
                >
                  Personalized Every Journey
                </Typography>
              </div>
            </div>
            <div className="relative w-1/2 rounded-[20px] h-[200px] sm:h-auto overflow-hidden">
              {/* <MImage
                src={Images.Service15}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay" />
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
                <Typography
                  variant="destinationTitle"
                  className="text-white mb-1 !text-[18px] sm:!text-[24px]"
                >
                  Wellness Travel
                </Typography>
                <Typography
                  variant="mainBodyPara"
                  className="text-white/90 !text-[12px] sm:!text-[14px]"
                >
                  Travel Perfectly Tailored
                </Typography>
              </div> */}
              <MImage
                src={Images.Service11}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay" />
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <Typography
                  variant="destinationTitle"
                  className="text-white mb-1 !text-[18px] sm:!text-[24px]"
                >
                  Hotel Partners
                </Typography>
                <Typography variant="mainBodyPara" className="text-white/90">
                  Travel Your Way
                </Typography>
              </div>
            </div>
          </div>

          {/* Bottom row - three images side by side on mobile, single wide on desktop */}
          <div className="flex gap-3">
            {/* Show Service1 on mobile in bottom row */}
            <div className="block sm:hidden relative w-1/3 rounded-[20px] h-[200px] overflow-hidden">
              <MImage
                src={Images.Service9}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay" />
              <div className="absolute bottom-3 left-3 z-10 text-white">
                <Typography
                  variant="destinationTitle"
                  className="text-white mb-1 !text-[16px] !leading-[18px]"
                >
                  Bespoke Travel Planning
                </Typography>
                <Typography
                  variant="mainBodyPara"
                  className="text-white/90 !text-[10px]"
                >
                  Dream. Plan. Explore.
                </Typography>
              </div>
            </div>

            {/* Show Service2 on mobile in bottom row */}
            <div className="block sm:hidden relative w-1/3 rounded-[20px] h-[200px] overflow-hidden">
              <MImage
                src={Images.Service10}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay" />
              <div className="absolute bottom-3 left-3 z-10 text-white">
                <Typography
                  variant="destinationTitle"
                  className="text-white mb-1 !text-[16px] !leading-[18px]"
                >
                  Corporate Travel and Events
                </Typography>
                <Typography
                  variant="mainBodyPara"
                  className="text-white/90 !text-[10px]"
                >
                  Explore Without Limits
                </Typography>
              </div>
            </div>

            {/* Wellness - shows on both mobile and desktop */}
            <div className="relative w-1/3 sm:w-full rounded-[20px] !h-[200px] sm:h-auto overflow-hidden">
              {/* <MImage
                src={Images.Service12}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay" />
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
                <Typography
                  variant="destinationTitle"
                  className="text-white mb-1 !text-[16px] !leading-[18px] sm:!text-[24px]"
                >
                  Private Jet Charter Luxury Yachts
                </Typography>
                <Typography
                  variant="mainBodyPara"
                  className="text-white/90 !text-[10px] sm:!text-[14px]"
                >
                  Adventure, Your Way
                </Typography>
              </div> */}
              <MImage
                src={Images.Service16}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay" />
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
                <Typography
                  variant="destinationTitle"
                  className="text-white mb-1 !text-[16px] !leading-[18px] sm:!text-[24px]"
                >
                  Lifestyle Services
                </Typography>
                <Typography
                  variant="mainBodyPara"
                  className="text-white/90 !text-[10px] sm:!text-[14px]"
                >
                  Unique Trips Await
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 -mt-4 md:-mt-14 xl:mt-4">
        <div className="relative w-full sm:w-1/4 rounded-[20px] h-[250px] overflow-hidden">
          {/* <MImage
            src={Images.Service16}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <Typography variant="destinationTitle" className="text-white mb-1">
              Lifestyle Services
            </Typography>
            <Typography variant="mainBodyPara" className="text-white/90 w-full">
              Unique Trips Await
            </Typography>
          </div> */}
          <MImage
            src={Images.Service12}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
            <Typography variant="destinationTitle" className="text-white mb-1">
              Private Jet Charter Luxury Yachts
            </Typography>
            <Typography
              variant="mainBodyPara"
              className="text-white/90 !text-[10px] sm:!text-[14px]"
            >
              Adventure, Your Way
            </Typography>
          </div>
        </div>
        <div className="relative w-full sm:w-1/4 rounded-[20px] h-[250px] overflow-hidden">
          <MImage
            src={Images.Service13}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <Typography variant="destinationTitle" className="text-white mb-1">
              Train Journeys
            </Typography>
            <Typography variant="mainBodyPara" className="text-white/90">
              Curated Travel Experiences
            </Typography>
          </div>
        </div>
        <div className="relative w-full sm:w-1/4 rounded-[20px] h-[250px] overflow-hidden">
          <MImage
            src={Images.Service14}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <Typography variant="destinationTitle" className="text-white mb-1">
              Villas and Private Islands
            </Typography>
            <Typography variant="mainBodyPara" className="text-white/90">
              Journeys Made Personal
            </Typography>
          </div>
        </div>
        <div className="relative w-full sm:w-1/4 rounded-[20px] h-[250px] overflow-hidden">
          {/* <MImage
            src={Images.Service11}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <Typography variant="destinationTitle" className="text-white mb-1">
              Hotel Partners
            </Typography>
            <Typography variant="mainBodyPara" className="text-white/90">
              Travel Your Way
            </Typography>
          </div> */}
          <MImage
            src={Images.Service15}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
            <Typography variant="destinationTitle" className="text-white mb-1">
              Wellness Travel
            </Typography>
            <Typography
              variant="mainBodyPara"
              className="text-white/90 !text-[12px] sm:!text-[14px]"
            >
              Travel Perfectly Tailored
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
