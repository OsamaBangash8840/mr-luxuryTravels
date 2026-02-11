import { Images } from "@/assets/home"
import { MImage, Typography } from "../common"

export const Destination = () => {
    return (
        <>
         <div className="container mx-auto my-16">
                    <div className="flex flex-col sm:flex-row items-center sm:gap-20 gap-8">
                        <div className="w-full sm:w-1/2">
                            <Typography variant="h2Heading" weight='regular'>
                                Destination  <br /> Inspiratio
                            </Typography>
                            <Typography color='secondary' variant="mainBodyPara" className='   mt-8 pb-5'>
                                Not sure where to go? MRLUXURYTRAVELS curates destination inspiration tailored to your desires, unveiling the world’s hottest hotels, hidden gems, and unique escapes designed to spark your imagination and wanderlust.
                            </Typography>
                
                        </div>
                        <div className="w-full sm:w-1/2">
                            <MImage src={Images.DestinationImg} alt="Luxury Hotel" className="" />
                        </div>
                    </div>
                 </div>
        </>
    )
}