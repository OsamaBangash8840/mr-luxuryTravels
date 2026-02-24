import { Images } from "@/assets/home"
import { Button, MImage, Typography } from "../common"

export const Form = () => {
    return (
        <>
        <section className="container mx-auto mt-10 mb-10 md:mb-20 px-4 md:px-8 lg:px-12">
            <div className="flex-col md:flex-row flex justify-between items-center gap-8 md:gap-12 lg:gap-16">
                <div className="w-full md:w-1/2">
                    <MImage src={Images.ContactImg} alt="contact-1" className=""/>
                </div>
                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    <Typography variant="h2Heading">
                        Begin Your Next <br /> Adventure With <br /> Us Today...
                    </Typography>
                    <div className="flex flex-col gap-5 mt-8 md:mt-7">
                        <input type="text" placeholder="Full Name"  className="border border-primary text-primary px-6 md:px-8 py-3 rounded-[20px] w-full lg:w-[600px] 2xl:w-[800px] font-body focus:outline-none"/>
                        <input type="email" placeholder="Email" className="border border-primary text-primary px-6 md:px-8 py-3 rounded-[20px] w-full lg:w-[600px] 2xl:w-[800px] font-body focus:outline-none"/>
                        <input type="number" placeholder="Phone Number" className="border border-primary text-primary px-6 md:px-8 py-3 rounded-[20px] w-full lg:w-[600px] 2xl:w-[800px] font-body focus:outline-none"/>
                        <textarea placeholder="Message" className="border border-primary text-primary px-6 md:px-8 py-3 rounded-[20px] w-full lg:w-[600px] 2xl:w-[800px] font-body focus:outline-none" rows={4}/>
                        <div className="flex justify-end w-full lg:w-[600px] 2xl:w-[800px]">
                            <Button title="Subscribe" variant="primary"  className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}