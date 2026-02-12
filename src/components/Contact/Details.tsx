import { Images } from "@/assets/home"
import { MImage, Typography } from "../common"

export const Details = () => {
    return (
        <>
        <section className="container mx-auto mt-8">
            <div className="flex-col md:flex-row flex justify-center items-center gap-10 md:gap-20 lg:gap-40 px-4 md:px-12 lg:px-20">
                <div className="w-full md:w-1/2">
                    <Typography variant="h2Heading">
                        Contact <br /> Us Today
                    </Typography>
                    <Typography variant="largePara" color="primary" className="mt-3">
                        To Start Your Journey Of A Lifetime
                    </Typography>
                    <Typography variant="mainBodyPara" color="secondary" className="mt-3">
                        Step into a world of curated elegance, seamless service,<br/> and unforgettable destinations
                    </Typography>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex gap-4 md:gap-6 lg:gap-8 items-center">
                        <div className="bg-white border border-primary rounded-[15px] px-3 py-2">
                        <MImage src={Images.CallIcon} alt="contact-1" width={25} height={25}  />
                        </div>
                        <Typography variant="mainBodyPara" color="secondary">
                            <a href="tel:+4402035951487">
                             +44 (0)203 595 1487
                            </a>
                        </Typography>
                    </div>
                    <div className="flex gap-4 md:gap-6 lg:gap-8 items-center mt-6 md:mt-8">
                        <div className="bg-white border border-primary rounded-[13px] px-3 py-3">
                        <MImage src={Images.EmailIcon} alt="contact-1" width={28} height={28}  />
                        </div>
                        <Typography variant="mainBodyPara" color="secondary">
                            <a href="mailto:Danny@mrluxurytravels.com">

                             Danny@mrluxurytravels.com
                            </a>
                        </Typography>
                    </div> 
                    <div className="flex gap-4 md:gap-6 lg:gap-8 items-center mt-6 md:mt-8">
                        <div className="bg-white border border-primary rounded-[15px] px-3 py-2">
                        <MImage src={Images.LocationIcon} alt="contact-1" width={25} height={25}  />
                        </div>
                        <Typography variant="mainBodyPara" color="secondary">
                             101 St Martin's Lane London, <br/>WC2N 4AZ
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}