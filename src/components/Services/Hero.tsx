import { Images } from "@/assets/home"
import { Typography } from "../common"

export const Hero = () => {
    return (
        <>
         <div
                    className="bg-secondary h-[100%] w-[98%] mx-auto 2xl:h-[1080px] gap-5 bg-cover bg-no-repeat px-4 sm:px-12 sm:pt-60 pt-12 rounded-[20px]"
                    style={{
                      backgroundImage: `url(${Images.ServiceBannerImg})`,
                      backgroundPosition: 'center',
                    }}
                  >
                    <Typography variant="h1Heading" color='white' className='mt-20'>
                      Travel
                    </Typography> 
                     <Typography color='white' className='sm:w-[700px] mt-8 pb-10'>
                    We provide seamless travel experiences tailored to your needs—offering reliable bookings, curated destinations, and stress-free journeys from start to finish.
                    </Typography>
                </div>
        </>
    )
}