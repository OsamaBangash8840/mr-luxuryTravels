import { Images } from "@/assets/home"
import { Typography } from "../common"

export const PrivateIslands = () => {
    return (
        <>
         <div className="container mx-auto mt-16">
              <Typography variant="h2Heading" weight='regular' className="mt-6">
                Private <br />Islands
              </Typography>
              <Typography color='secondary' variant="mainBodyPara" className='sm:w-[750px] mt-5 pb-5'>
                Unwind in pure seclusion with exclusive access to private islands worldwide. Pristine beaches, luxurious villas, and unmatched privacy create the ultimate escape for families or couples seeking total peace and exclusivity.
              </Typography>

              <div style={{backgroundImage: `url(${Images.PrivateIslandsImg})`}} className="w-full sm:h-[320px] h-[160px] rounded-lg mt-8 bg-cover bg-center bg-no-repeat"></div>
              </div>
        </> 
    )
}