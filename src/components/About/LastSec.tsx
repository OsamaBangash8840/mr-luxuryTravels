import { Images } from "@/assets/home"
import { MImage, Typography } from "../common"

export const LastSec = () => {
    return (
      <section className="container mx-auto mt-10 mb-16">
                  <div className="flex flex-col sm:flex-row items-center gap-20">
                         <div className="w-full sm:w-1/2">
                          <Typography variant="h2Heading" color="primary" className="mt-8 sm:mt-10">Travel Beyond<br/>Your Expectations</Typography>
                          <Typography variant="mainBodyPara" className="mt-4" color="secondary">Today, Danny continues to travel extensively, sharing his insights, experiences, and expertise with a global audience through Instagram and TikTok, inspiring thousands with breathtaking destinations, insider tips, and luxury travel guidance. </Typography>  
                          <Typography variant="mainBodyPara" className="mt-4" color="secondary">With his extensive industry relationships, purchasing power, and unwavering commitment to excellence, Danny confidently delivers travel experiences that go beyond expectations — both in quality and value.</Typography>
                          <Typography variant="mainBodyPara" className="mt-4" color="secondary">If you are seeking a travel expert who genuinely goes above and beyond, Danny Akhtar is the trusted name in luxury travel. </Typography>
                          <Typography variant="largePara" color="primary" className="mt-8 sm:mt-4">Experience Travel Beyond Your Expectations.</Typography>
                          <Typography variant="mainBodyPara" color="secondary" weight="semibold" className=" !italic">Danny Akhtar, Managing Director</Typography>
                      </div>
                      <div className="w-full sm:w-1/2">
                          <MImage src={Images.LastSecImg} alt="Personal Info" className="w-full h-auto rounded-lg" />
                      </div>
                  </div>
              </section>
    )
}