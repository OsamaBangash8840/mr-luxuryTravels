import { Images } from "@/assets/home"
import { MImage, Typography } from "../common"

export const Adventures = () => {
    return (
        <>
          <div className="container mx-auto mt-16">
                            <div className="flex flex-col sm:flex-row items-center sm:gap-20 gap-8">
                                   <div className="w-full sm:w-1/2">
                                    <MImage src={Images.AdventuresImg} alt="Luxury Hotel" className="" />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <Typography variant="h2Heading" weight='regular'>
                                        Adventures
                                    </Typography>
                                    <Typography color='secondary' variant="mainBodyPara" className='   mt-8 pb-5'>
                                       For those craving adrenaline, our adventure escapes range from African safaris to rainforest treks. LURA curates extraordinary journeys balancing exhilaration with comfort, delivering once-in-a-lifetime experiences in nature’s most breath taking settings.
                                        </Typography>
                        
                                </div>
                            </div>
                         </div>
        </>
    )
}