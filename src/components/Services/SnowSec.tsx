import { Images } from "@/assets/home"
import { Typography } from "../common"

export const SnowSec = () => {
    return (
        <>
        <div className="container mx-auto mt-16">
            <div style={{backgroundImage: `url(${Images.SnowImg})`}} className="w-full sm:h-[320px] h-[160px] rounded-lg mt-8 bg-cover bg-center bg-no-repeat"></div>

              <Typography variant="h2Heading" weight='regular' className="mt-6">
                Ski & <br /> Snow
              </Typography>
              <Typography color='secondary' variant="mainBodyPara" className='sm:w-[750px] mt-5 pb-5'>
                 From glamorous Alpine chalets to remote igloo stays, our ski and snow escapes combine adventure with indulgence. Think private instructors, luxury après-ski, and magical winter landscapes tailored for every level of skier.
              </Typography>
        </div>
        </>
    )
}