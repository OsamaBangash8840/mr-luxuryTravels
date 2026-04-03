import { Images } from "@/assets/home"
import { MImage, Typography } from "@/components/common"

export const PersonalInfo = () => {
    return (
        <>
        <section className="container mx-auto mt-4">
            <div className="flex flex-col sm:flex-row items-center sm:gap-20 gap-8">
                   <div className="w-full sm:w-1/2">
                    <Typography variant="h2Heading" color="primary" className="mt-8 sm:mt-10">Danny <br className="hidden sm:block"/>Akhtar</Typography>
                    <Typography variant="largePara" color="primary" className="mt-8 sm:mt-4">Founder & Managing Director – Mr Luxury Travels</Typography>
                    <Typography variant="mainBodyPara" className="mt-4" color="secondary">Danny Akhtar is a highly respected luxury travel expert, renowned for curating exceptional, tailor-made journeys for discerning travellers worldwide. With decades of experience and an intimate knowledge of the global travel landscape, Danny specializes in designing bespoke itineraries that are seamless, exclusive, and truly unforgettable. </Typography>  
                    <Typography variant="mainBodyPara" className="mt-4" color="secondary">Often referred to as <b>“Mr Luxury Travel,”</b> Danny is celebrated for his meticulous attention to detail and his ability to transform travel dreams into extraordinary realities. From European city breaks and African safaris to honeymoons in Bali or the Maldives, beach escapes, wellness retreats, and once-in-a-lifetime adventures, every journey is carefully crafted to exceed expectations. </Typography>
                    <Typography variant="mainBodyPara" className="mt-4" color="secondary">Danny is a proud <b>Virtuoso Travel Advisor</b> and a partner of <b>Global Travel Collection</b>, giving his clients access to unparalleled global infrastructure, preferred partnerships, exclusive benefits, and exceptional value. Whether managing complex corporate travel or creating indulgent leisure experiences, Danny delivers a level of service his clients consider the standard. </Typography>
                </div>
                <div className="w-full sm:w-1/2 ">
                    <MImage src={Images.PersonalInfoImg} alt="Personal Info" className="w-full h-auto md:h-full md:object-cover rounded-lg" />
                </div>
            </div>
            <div style={{backgroundImage: `url(${Images.PersonalInfoImg2})`}} className="w-full sm:h-[320px] h-[160px] rounded-lg mt-8 bg-cover bg-center bg-no-repeat"></div>
        </section>
        </>
    )
}