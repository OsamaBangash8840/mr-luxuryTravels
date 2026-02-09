import { Images } from "@/assets/home";
import { Button, MImage, Typography } from "../common";

export const AboutUs = () => {
    return (
        <section className="container flex items-center gap-10 justify-between">
            <div className="w-1/2">
                <Typography variant="h2Heading" className="">
                    WELCOME TO <br/> MRLUXURYTRAVELS
                </Typography>
                <Typography variant="mainBodyPara" className="mt-4">
                    Celebrating the French Art de Vivre in every detail, each MRLUXURYTRAVELS Maison is a canvas where bold design meets the soul of local craftsmanship. Serene havens unfold in harmony with their surroundings, culinary moments become symphonies of flavour, and well-being is reimagined through exclusive rituals.
                    <br/>
                    Wander through, and select the Maison that speaks to you.
                </Typography>
                  <Button
                    title="Learn More"
                    variant="primary"
                    icon={<MImage src={Images.ButtonIconSvg} alt="" w={90} className="" />}
                    className="mt-7 font-heading font-normal flex justify-center items-center gap-5"
                />
            </div>
            <div className=" relative">
                <MImage
                    src={Images.AboutUsSecTopImg} 
                    alt="Logo" 
                    w={170} 
                    h={340}
                    id="priority"
                    className="absolute top-15 -right-5 z-10" 
                /> 
                <MImage
                    src={Images.AboutUsSecMainImg} 
                    alt="Logo" 
                    w={460} 
                    id="priority"
                    className="relative z-0 mt-10 mr-7" 
                /> 
                <MImage
                    src={Images.AboutUsSecBottomImg} 
                    alt="Logo" 
                    w={170} 
                    h={340}
                    id="priority"
                    className="absolute -bottom-1 -left-30 z-10" 
                /> 
            </div>
        </section>
    );
};