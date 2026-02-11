import { SwiperSlide } from "swiper/react"
import { CustomSwiper, MImage } from "../common"
import { Images } from "@/assets/home"

export const ClientsLogo = () => {
    const logos = [
    { name: 'Rosewood', src: Images.Logo1 },
    { name: 'Best Western Sunrise', src: Images.Logo2 },
    { name: 'Bulgari', src: Images.Logo3 },
    { name: 'Sheraton', src: Images.Logo4 },
    { name: 'The Luxury Collection', src: Images.Logo5 },
    { name: 'Four Seasons', src: Images.Logo6 },
    { name: 'Belmond', src: Images.Logo7 },
    { name: 'Belmond', src: Images.Logo1 },
    { name: 'Belmond', src: Images.Logo2 },
    { name: 'Belmond', src: Images.Logo3 },
  ]
  return (
    <div className="w-full bg-white py-6">
      <CustomSwiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        speed={800}
        centeredSlides={true}
        showButtons={false}
        showPagination={false}
        slidesOnPhone={3}
        slidesOnTablet={4}
        slidesOnDesktop={6.5}
        slidesOnLargeScreens={6.5}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <MImage
                src={logo.src}
                alt={logo.name}
                className="max-h-[120px] w-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  )
}