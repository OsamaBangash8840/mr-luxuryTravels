import { SwiperSlide } from "swiper/react"
import { CustomSwiper, Typography } from "../common"
import { Images } from "@/assets/home"

export const Destinations = () => {
    const destinations = [
        {
            id: 1,
            name: 'Paris',
            description: 'Travel the world in style',
            image: Images.Destination1
        },
        {
            id: 2,
            name: 'Maldives',
            description: 'Paradise on earth',
            image: Images.Destination2
        },
        {
            id: 3,
            name: 'Switzerland',
            description: 'Alpine luxury awaits',
            image: Images.Destination3
        },
        {
            id: 4,
            name: 'Dubai',
            description: 'Modern luxury redefined',
            image: Images.Destination4
        },  {
            id: 5,
            name: 'Paris',
            description: 'Travel the world in style',
            image: Images.Destination1
        },
        {
            id: 6,
            name: 'Maldives',
            description: 'Paradise on earth',
            image: Images.Destination2
        },
        {
            id: 7,
            name: 'Switzerland',
            description: 'Alpine luxury awaits',
            image: Images.Destination3
        },
        {
            id: 8,
            name: 'Dubai',
            description: 'Modern luxury redefined',
            image: Images.Destination4
        },
    ]

    return (
        <section className="container mt-20">
            <div className="flex justify-between items-start mb-8">
                <div className="w-[60%]">
                    <Typography variant="h2Heading">Destinations</Typography>
                    <Typography className="mt-5">
                        MRLUXURYTRAVELS is dedicated to providing the ultimate lifestyle service, guiding you through the ever-changing world of luxury, making every moment a memory. Whether you require assistance with your day-to-day life or your lifelong dreams, the MRLUXURYTRAVELS team are experts in all things luxury
                    </Typography>
                </div>
            </div>

            <div className="relative py-5">
                <CustomSwiper
                    loop={true}
                    spaceBetween={24}
                    speed={600}
                    centeredSlides={true}
                    showButtons={true}
                    showPagination={false}
                    arrowStyle="default"
                    slidesOnPhone={1}
                    slidesOnTablet={2.2}
                    slidesOnDesktop={4.2}
                    slidesOnLargeScreens={5.5}
                >
                    {destinations.map((destination, index) => (
                        <SwiperSlide key={`${destination.id}-${index}`}>
                            {({ isActive }) => (
                                <div className="group cursor-pointer">
                                    <div className={`relative overflow-hidden rounded-2xl h-[400px] transition-all duration-500 ${
                                        isActive ? 'scale-100' : 'scale-93'
                                    }`}>
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    </div>
                                    <div className={`mt-4 transition-all duration-500 ${
                                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}>
                                        <Typography variant="destinationTitle" className="text-primary mb-1">
                                            {destination.name}
                                        </Typography>
                                        <Typography variant="mainBodyPara" className="text-secondary">
                                            {destination.description}
                                        </Typography>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </CustomSwiper>
                
                {/* Left fade-out gradient overlay */}
                <div className="absolute left-0 top-0 bottom-0 sm:w-[30%] md:w-[30%] bg-gradient-to-r from-white via-white/100 to-transparent pointer-events-none z-10" />
            </div>
        </section>
    )
}