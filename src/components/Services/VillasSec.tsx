import { Images } from "@/assets/home"
import { MImage, Typography } from "../common"

export const VillasSec = () => {
    return (
        <>
        <div className="container mx-auto mt-16">
            <div className="flex flex-col sm:flex-row items-center sm:gap-20 gap-8">
                <div className="w-full sm:w-1/2">
                    <Typography variant="h2Heading" weight='regular'>
                        Villas <br /> Chalets
                    </Typography>
                    <Typography color='secondary' variant="mainBodyPara" className='   mt-8 pb-5'>
                       Discover handpicked luxury villas designed for privacy, space, and style. From beachfront estates to countryside and mountain retreats, each property offers bespoke service, exceptional amenities, and a perfect home for families or groups.
                        </Typography>
        
                </div>
                <div className="w-full sm:w-1/2">
                    <MImage src={Images.VillasImg} alt="Luxury Hotel" className="" />
                </div>
            </div>
         </div>
        </>
    )
}