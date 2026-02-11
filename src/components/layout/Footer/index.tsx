import { Images } from "@/assets/home"
import { Button, Typography } from "@/components/common"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


export const Footer = () => {
    return (
        <>
            <section className="relative w-[90%] mx-auto py-3 xl:py-0  xl:h-[370px] rounded-[20px] sm:flex justify-center items-center px-5 sm:px-10 z-50" style={{backgroundImage: `url(${Images.FooterBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div>

                <Typography variant="h2Heading" color="white" className="mt-3">Don't Miss A Thing</Typography>
                <Typography variant="mainBodyPara" className="xl:w-[60%] mt-3" color="white">Get essential travel tips, destination inspiration, itineraries, and the best places to stay in your inbox.</Typography>
                <Typography variant="mainBodyPara" className="sm:mt-10 mt-6" color="white" weight="semibold">Sign up to the Mr Luxury Travels Newsletter.</Typography>
                </div>
                <div className="flex flex-col gap-5 mt-10 sm:mt-0">
                    <input type="text" placeholder="Full Name"  className="border border-white text-white px-8 py-3 rounded-[20px] sm:w-[400px] w-full font-bodsy"/>
                    <input type="email" placeholder="Email" className="border border-white text-white px-8 py-3 rounded-[20px] sm:w-[400px] w-full font-body"/>
                    <div className="flex justify-end">
                    <Button title="Subscribe" variant="outline"  className=""/>
                    </div>
                </div>
            </section>
            <footer className="bg-FooterBg container rounded-[20px] pt-20 -mt-20 pb-8">
                {/* Footer Links Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center w-[95%] mx-auto gap-8 sm:gap-32">
                    <div>
                        <Typography variant="mainBodyPara" color="primary" weight="semibold" className="mt-8 sm:mt-10">Discover</Typography>
                        <Typography variant="mainBodyPara" color="secondary" className="mt-2">About Us</Typography>
                        <Typography variant="mainBodyPara" color="secondary" className="mt-1">Services</Typography>
                    </div>
                    <div>
                        <Typography variant="mainBodyPara" color="primary" weight="semibold" className="mt-0 sm:mt-10">Legal</Typography>
                        <Typography variant="mainBodyPara" color="secondary" className="mt-2">Terms and Conditions</Typography>
                        <Typography variant="mainBodyPara" color="secondary" className="mt-1">Privacy Policy</Typography>
                    </div>
                    <div>
                        <Typography variant="mainBodyPara" color="primary" weight="semibold" className="mt-0 sm:mt-10">Contact</Typography>
                        <Typography variant="mainBodyPara" color="secondary" className="mt-2">+44 (0)203 595 1487</Typography>
                        <Typography variant="mainBodyPara" color="secondary" className="mt-1">Danny@mrluxurytravels.com</Typography>
                    </div>
                </div>

                {/* Copyright & Social Section */}
                <div className="flex flex-col sm:flex-row items-center w-[95%] mx-auto justify-between border-t border-t-secondary mt-8 sm:mt-12 pt-6 sm:pt-8 gap-6 sm:gap-0">
                    <Typography variant="mainBodyPara" color="primary" weight="medium" className="text-center sm:text-left order-2 sm:order-1">
                        © 2026 Mr Luxury Travels. All rights reserved.
                    </Typography>
                    
                    <div className="flex items-center gap-2 order-1 sm:order-2">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                            <FaWhatsapp className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                            <FaInstagram className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                            <FaFacebookF className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                            <RiTwitterXFill className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>

                {/* Large Heading */}
                <Typography 
                    variant="h1Heading"
                    color="primary" 
                    weight="regular" 
                    className="w-[95%] mx-auto py-6 sm:py-3 text-center sm:text-left xl:!text-[140px] xl:!leading-[140px] xl:!mt-10"
                >
                    travel beyond your expectation.
                </Typography>
            </footer>
        </>
    )
}