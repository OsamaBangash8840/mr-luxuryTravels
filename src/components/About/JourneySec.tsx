import { Images } from "@/assets/home"
import { MImage, Typography } from "../common"

export const JourneySec = () => {
    return (
        <>
       <section className=" container 2xl:mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="w-full sm:w-1/2">
                <Typography variant="h2Heading" color="primary" className="mt-12 sm:mt-10 text-left">A Journey <br className="hidden sm:block"/>That Began<br/> With Curiosity</Typography>
                <Typography variant="mainBodyPara" className="mt-6 sm:w-[87%]" color="secondary" >Danny’s passion for travel began at a young age. Growing up, his earliest memories of adventure were watching aeroplanes cross the sky while his grandmother would say, “There goes your father in the aeroplane.” Travel in those days meant long, arduous journeys by beautifully decorated buses through mountain villages — experiences that planted the seed for a lifelong fascination with the world beyond the horizon. </Typography>
                 <Typography variant="mainBodyPara" className="mt-6 sm:w-[87%]" color="secondary" >In 1992, while sitting on a rock in Hawaii, Danny made a life-changing decision: travel would not just be a passion, but his profession. That moment sparked a journey that continues to this day. </Typography>
                 <Typography variant="mainBodyPara" className="mt-6 sm:w-[87%]" color="secondary" >At just 22, Danny embarked on his first major trip around the world — flying from London through Asia, Australia, New Zealand, the Pacific Islands, Hawaii, the United States, and back home. From that moment on, he was truly “bitten by the travel bug.” </Typography>
            </div>
            <div className="flex gap-5 ">
                <MImage src={Images.JourneyImg} alt="Journey" className="sm:w-[320px] w-[160px] 2xl:w-[405px] rounded-lg" />
                <div className="">
                    <MImage src={Images.JourneyImg2} alt="Journey" className="sm:w-[320px] w-[160px] 2xl:w-[405px]   rounded-lg mt-5" />
                    <MImage src={Images.JourneyImg3} alt="Journey" className="sm:w-[320px] w-[160px] 2xl:w-[405px] rounded-lg mt-5" />
                </div>
            </div>
        </div>
       </section>
        </>
    )
}