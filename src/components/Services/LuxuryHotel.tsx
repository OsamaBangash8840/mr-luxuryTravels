import { Images } from "@/assets/home"
import { Typography } from "../common"

export const LuxuryHotel = () => {
    return (
        <>
        <div className="container mx-auto mt-8">
            <Typography variant="h2Heading" weight='regular'>
                Luxury <br /> Hotel
            </Typography>
            <Typography color='secondary' variant="mainBodyPara" className='sm:w-[750px] mt-8 pb-5'>
                Access the world’s most prestigious hotels with MRLUXURYTRAVELS, from iconic city landmarks to serene coastal resorts. Enjoy exclusive perks such as upgrades, spa treatments, and hotel credits, ensuring every stay feels indulgent, seamless, and unforgettable.
                </Typography>

                 <div style={{backgroundImage: `url(${Images.LuxuryHotelImg})`}} className="w-full sm:h-[320px] h-[160px] rounded-lg mt-8 bg-cover bg-center bg-no-repeat"></div>
        </div>
        </>
    )
}