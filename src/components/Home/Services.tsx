import { Images } from "@/assets/home"
import { MImage, Typography } from "../common"

export const Services = () => {
    return (
        <section className="container mt-10 xl:mt-20">
                <div className="sm:w-[60%]">
                    <Typography variant="h2Heading">Services</Typography>
                    <Typography className="mt-5">
                       MRLUXURYTRAVELS is dedicated to providing the ultimate lifestyle service, guiding you through the ever-changing world of luxury, making every moment a memory. Whether you require assistance with your day-to-day life or your lifelong dreams, the MRLUXURYTRAVELS team are experts in all things luxury
                    </Typography>
                </div>
                <div className="flex justify-center items-center gap-3 mt-10 md:-mt-12 xl:mt-16 2xl:mt-32 min-h-[500px]">
                    {/* Left column - single large image - Hidden on mobile */}
                    <div className="hidden sm:block relative sm:w-1/4 rounded-[20px]">
                        <MImage src={Images.Service1} alt="" />
                        <div className="gradient-overlay" />
                        <div className="absolute bottom-6 left-6 z-10 text-white">
                            <Typography variant="destinationTitle" className="text-white mb-1">
                                Travel
                            </Typography>
                            <Typography variant="mainBodyPara" className="text-white/90">
                                Travel The World In Style
                            </Typography>
                        </div>
                    </div>
                    
                    {/* Middle column - single large image - Hidden on mobile */}
                    <div className="hidden sm:block relative sm:w-1/4 rounded-[20px]">
                        <MImage src={Images.Service2} alt="" />
                        <div className="gradient-overlay" />
                        <div className="absolute bottom-6 left-6 z-10 text-white">
                            <Typography variant="destinationTitle" className="text-white mb-1">
                                Vip Service
                            </Typography>
                            <Typography variant="mainBodyPara" className="text-white/90">
                                Travel Beyond Ordinary
                            </Typography>
                        </div>
                    </div>
                    
                    {/* Right column - grid of images - Full width on mobile */}
                    <div className="w-full sm:w-1/2 flex flex-col gap-3 xl:gap-9">
                        {/* Top row - two images side by side */}
                        <div className="flex gap-3">
                            <div className="relative w-1/2 rounded-[20px] h-[200px] sm:h-auto overflow-hidden">
                                <MImage src={Images.Service3} alt="" className="w-full h-full object-cover" />
                                <div className="gradient-overlay" />
                                <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
                                    <Typography variant="destinationTitle" className="text-white mb-1 !text-[18px] sm:!text-[24px]">
                                        Lifestyle
                                    </Typography>
                                    <Typography variant="mainBodyPara" className="text-white/90 !text-[12px] sm:!text-[14px]">
                                        Live Your Ultimate Life
                                    </Typography>
                                </div>
                            </div>
                            <div className="relative w-1/2 rounded-[20px] h-[200px] sm:h-auto overflow-hidden">
                                <MImage src={Images.Service4} alt="" className="w-full h-full object-cover" />
                                <div className="gradient-overlay" />
                                <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
                                    <Typography variant="destinationTitle" className="text-white mb-1 !text-[18px] sm:!text-[24px]">
                                        Shopping
                                    </Typography>
                                    <Typography variant="mainBodyPara" className="text-white/90 !text-[12px] sm:!text-[14px]">
                                        Sourcing The Extraordinary
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom row - three images side by side on mobile, single wide on desktop */}
                        <div className="flex gap-3">
                            {/* Show Service1 on mobile in bottom row */}
                            <div className="block sm:hidden relative w-1/3 rounded-[20px] h-[200px] overflow-hidden">
                                <MImage src={Images.Service1} alt="" className="w-full h-full object-cover" />
                                <div className="gradient-overlay" />
                                <div className="absolute bottom-3 left-3 z-10 text-white">
                                    <Typography variant="destinationTitle" className="text-white mb-1 !text-[16px]">
                                        Travel
                                    </Typography>
                                    <Typography variant="mainBodyPara" className="text-white/90 !text-[10px]">
                                        Travel The World
                                    </Typography>
                                </div>
                            </div>
                            
                            {/* Show Service2 on mobile in bottom row */}
                            <div className="block sm:hidden relative w-1/3 rounded-[20px] h-[200px] overflow-hidden">
                                <MImage src={Images.Service2} alt="" className="w-full h-full object-cover" />
                                <div className="gradient-overlay" />
                                <div className="absolute bottom-3 left-3 z-10 text-white">
                                    <Typography variant="destinationTitle" className="text-white mb-1 !text-[16px]">
                                        VIP
                                    </Typography>
                                    <Typography variant="mainBodyPara" className="text-white/90 !text-[10px]">
                                        Beyond Ordinary
                                    </Typography>
                                </div>
                            </div>
                            
                            {/* Wellness - shows on both mobile and desktop */}
                            <div className="relative w-1/3 sm:w-full rounded-[20px] h-[200px] sm:h-auto overflow-hidden">
                                <MImage src={Images.Service5} alt="" className="w-full h-full object-cover" />
                                <div className="gradient-overlay" />
                                <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-10 text-white">
                                    <Typography variant="destinationTitle" className="text-white mb-1 !text-[16px] sm:!text-[24px]">
                                        Wellness
                                    </Typography>
                                    <Typography variant="mainBodyPara" className="text-white/90 !text-[10px] sm:!text-[14px]">
                                        Mind Body & Soul
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second row */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 -mt-4 md:-mt-14 xl:mt-4">
                    <div className="relative w-full sm:w-1/4 rounded-[20px] h-[250px] overflow-hidden">
                        <MImage src={Images.Service6} alt="" className="w-full h-full object-cover" />
                        <div className="gradient-overlay" />
                        <div className="absolute bottom-6 left-6 z-10 text-white">
                            <Typography variant="destinationTitle" className="text-white mb-1">
                                Personal
                            </Typography>
                            <Typography variant="mainBodyPara" className="text-white/90 w-full">
                                Personal Services Redefined
                            </Typography>
                        </div>
                    </div>
                     <div className="relative w-full sm:w-1/2 rounded-[20px] h-[250px] overflow-hidden">
                        <MImage src={Images.Service7} alt="" className="w-full h-full object-cover" />
                        <div className="gradient-overlay" />
                        <div className="absolute bottom-6 left-6 z-10 text-white">
                            <Typography variant="destinationTitle" className="text-white mb-1">
                                Families
                            </Typography>
                            <Typography variant="mainBodyPara" className="text-white/90">
                                The Family Collection
                            </Typography>
                        </div>
                    </div>
                     <div className="relative w-full sm:w-1/4 rounded-[20px] h-[250px] overflow-hidden">
                        <MImage src={Images.Service8} alt="" className="w-full h-full object-cover" />
                        <div className="gradient-overlay" />
                        <div className="absolute bottom-6 left-6 z-10 text-white">
                            <Typography variant="destinationTitle" className="text-white mb-1">
                                Hot & New
                            </Typography>
                            <Typography variant="mainBodyPara" className="text-white/90">
                                Exciting Openings Exclusive Offers
                            </Typography>
                        </div>
                    </div>
                </div>
        </section>
    )
}