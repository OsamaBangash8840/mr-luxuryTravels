import { Images } from "@/assets/home"
import { MImage, Typography } from "../common"

export const PhilosophySec = () => {
    return (
         <>
             <section className=" container mt-8 2xl:mt-16">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-24">
                  <div className="flex gap-5 ">
                     <div className="">
                          <MImage src={Images.PhilosophyImg} alt="Journey" className="sm:w-[320px] w-[160px] 2xl:w-[405px]  rounded-lg mt-5" />
                          <MImage src={Images.PhilosophyImg2} alt="Journey" className="sm:w-[320px] w-[160px] 2xl:w-[405px] rounded-lg mt-5" />
                      </div>
                      <MImage src={Images.PhilosophyImg3} alt="Journey" className="sm:w-[320px] w-[160px] 2xl:w-[405px] rounded-lg" />
                  </div>
                   <div className="w-full sm:w-1/2">
                      <Typography variant="h2Heading" color="primary" className="mt-8 sm:mt-10 text-left">A Philosophy <br className="hidden sm:block"/>of Travel</Typography>
                      <Typography variant="mainBodyPara" className="mt-6 sm:w-[87%]" color="secondary" >Danny’s passion for travel began at a young age. Growing up, his earliest memories of adventure were watching aeroplanes cross the sky while his grandmother would say, “There goes your father in the aeroplane.” Travel in those days meant long, arduous journeys by beautifully decorated buses through mountain villages — experiences that planted the seed for a lifelong fascination with the world beyond the horizon. </Typography>
                       <Typography variant="mainBodyPara" className="mt-6 sm:w-[87%]" color="secondary" >This philosophy is at the heart of <b>Mr Luxury Travels. </b></Typography>
                  </div>
              </div>
             </section>
              </>
    )
}