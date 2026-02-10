import { Images } from '@/assets/home';
import { Typography } from '../common';

export const Hero = () => {
    return (
         <div
            className="bg-secondary h-[100%] w-[98%] mx-auto 2xl:h-[1080px] gap-5 bg-cover bg-no-repeat px-4 sm:px-12 sm:pt-56 pt-12 rounded-[20px]"
            style={{
              backgroundImage: `url(${Images.heroBannerImg})`,
              backgroundPosition: 'center',
            }}
          >
            <Typography variant="largePara" color='white' weight='regular'>
              Find And Book Your Perfect Destination.
            </Typography>
            <Typography variant="h1Heading" color='white' className='mt-8'>
              Plan Your <br/> Next Trip
            </Typography> 
             <Typography color='white' className='sm:w-[900px] mt-8 pb-5'>
            Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </Typography>
        </div>
    );
};