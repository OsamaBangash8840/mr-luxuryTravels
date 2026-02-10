'use client'
import { Pagination, Autoplay } from 'swiper/modules'
// import React, { useRef, ReactNode } from 'react'
import { FaRegCirclePause } from 'react-icons/fa6'
import { Swiper } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
  FaCaretLeft,
  FaCaretRight,
} from 'react-icons/fa6'
// import { IconType } from 'react-icons'

// Import Swiper styles (v12 uses bundled CSS)
import 'swiper/swiper-bundle.css'
import { MImage } from '../MImage'
import { Images } from '@/assets/home'

// Types
type ArrowStyleType = 'default' | 'minimal' | 'bold' | 'caret' | 'custom'

interface ArrowConfig {
  leftIcon: React.ReactNode
  rightIcon: React.ReactNode
  buttonClass: string
  containerClass: string
  iconClass: string
}

interface CustomSwiperProps {
  children: ReactNode
  slidesOnPhone?: number
  slidesOnTablet?: number
  slidesOnDesktop?: number
  slidesOnLargeScreens?: number
  showPagination?: boolean
  showButtons?: boolean
  arrowStyle?: ArrowStyleType
  customArrowConfig?: Partial<ArrowConfig>
  leftArrowPosition?: string
  rightArrowPosition?: string
  loop?: boolean
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean }
  spaceBetween?: number
  speed?: number
  centeredSlides?: boolean
  slidesPerView?: number | 'auto'
  onSwiper?: (swiper: SwiperType) => void
  onSlideChange?: (swiper: SwiperType) => void
}

// Arrow style configurations
const ARROW_STYLES: Record<ArrowStyleType, ArrowConfig> = {
  default: {
    leftIcon: <MImage src={Images.ButtonLeftIconSvg} alt="" />,
    rightIcon: <MImage src={Images.ButtonIconSvg} alt="" className='-ml-4'/>,
    buttonClass:
      'bg-white  flex justify-center items-center h-9 w-16  hover:bg-gray-50 transition-colors -mt-32',
    containerClass: 'absolute top-0 right-0 z-50',
    iconClass: 'text-secondary-500',
  },

  minimal: {
    leftIcon: <FaChevronLeft/>,
    rightIcon: <FaChevronRight/>,
    buttonClass: 'flex justify-center items-center h-8 w-8 transition-colors',
    containerClass: 'bottom-4 z-40 h-8 w-8',
    iconClass: 'text-white text-[24px] hover:text-white/30',
  },
  bold: {
    leftIcon: <FaArrowLeft/>,
    rightIcon: <FaArrowRight/>,
    buttonClass:
      'bg-blue-500 hover:bg-blue-600 flex justify-center items-center h-10 w-10 rounded-lg transition-colors',
    containerClass: 'top-1/2 -translate-y-1/2 z-40 h-10 w-10',
    iconClass: 'text-white text-sm',
  },
  caret: {
    leftIcon: <FaCaretLeft/>,
    rightIcon: <FaCaretRight/>,
    buttonClass:
      'bg-black bg-opacity-20 hover:bg-opacity-30 flex justify-center items-center h-12 w-12 rounded-full transition-all',
    containerClass: 'top-1/2 -translate-y-1/2 z-40 h-12 w-12',
    iconClass: 'text-white text-xl',
  },
  custom: {
    leftIcon: <FaChevronLeft/>,
    rightIcon: <FaChevronRight/>,
    buttonClass: '',
    containerClass: '',
    iconClass: '',
  },
}

export const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  slidesOnPhone = 1,
  slidesOnTablet = 2,
  slidesOnDesktop = 3,
  slidesOnLargeScreens = 4,
  showPagination = false,
  showButtons = false,
  arrowStyle = 'default',
  customArrowConfig = null,
  leftArrowPosition = 'sm:left-15 left-2',
  rightArrowPosition = 'sm:left-33 left-20',
  loop = false,
  autoplay = false,
  spaceBetween = 25,
  speed = 500,
  centeredSlides = false,
  slidesPerView,
  onSwiper,
  onSlideChange,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null)

  const goToNextSlide = (): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goToPrevSlide = (): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }
  
  // Helper to check if icon is a component
  const isComponent = (icon: any): icon is React.ComponentType<{ className?: string }> => {
    return typeof icon === 'function'
  }

  // Get arrow configuration
  const getArrowConfig = (): ArrowConfig => {
    if (arrowStyle === 'custom' && customArrowConfig) {
      return {
        ...ARROW_STYLES.custom,
        ...customArrowConfig,
      } as ArrowConfig
    }
    return ARROW_STYLES[arrowStyle] || ARROW_STYLES.default
  }

  const arrowConfig = getArrowConfig()
  const LeftIcon = arrowConfig.leftIcon
  const RightIcon = arrowConfig.rightIcon

  // For default style, use special positioning
  const isDefaultStyle = arrowStyle === 'default'

  // Autoplay configuration
  const autoplayConfig =
    autoplay === true
      ? { delay: 3000, disableOnInteraction: false }
      : autoplay === false
        ? false
        : autoplay

  return (
    <div className="min-h-44">
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={spaceBetween}
          speed={speed}
          slidesPerView={slidesPerView || slidesOnPhone}
          loop={loop}
          centeredSlides={centeredSlides}
          autoplay={autoplayConfig}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          breakpoints={
            !slidesPerView
              ? {
                  0: { slidesPerView: slidesOnPhone },
                  395: { slidesPerView: slidesOnPhone },
                  750: { slidesPerView: slidesOnTablet },
                  1024: { slidesPerView: slidesOnDesktop },
                  1330: { slidesPerView: slidesOnLargeScreens },
                }
              : undefined
          }
          pagination={showPagination ? { clickable: true } : false}
          className="overflow-visible"
        >
          {children}
        </Swiper>
        {showButtons && (
          <>
            {isDefaultStyle ? (
              // Special handling for default style - both arrows in top-right corner
              <div className="absolute top-[-13%] sm:top-[-14%] 2xl:top-[-10%] right-0 flex gap-2 z-50">
                <button
                  className={arrowConfig.buttonClass}
                  onClick={goToPrevSlide}
                  type="button"
                  aria-label="Previous slide"
                >
                  {isComponent(LeftIcon) ? <LeftIcon className={arrowConfig.iconClass} /> : LeftIcon}
                </button>
                <button
                  className={arrowConfig.buttonClass}
                  onClick={goToNextSlide}
                  type="button"
                  aria-label="Next slide"
                >
                  {isComponent(RightIcon) ? <RightIcon className={arrowConfig.iconClass} /> : RightIcon}
                </button>
              </div>
            ) : (
              <>
                {/* Left Arrow */}
                <div className={`${arrowConfig.containerClass} ${leftArrowPosition} absolute`}>
                  <button
                    className={arrowConfig.buttonClass}
                    onClick={goToPrevSlide}
                    type="button"
                    aria-label="Previous slide"
                  >
                    {isComponent(LeftIcon) ? <LeftIcon className={arrowConfig.iconClass} /> : LeftIcon}
                  </button>
                </div>

                {/* Pause Icon - only for minimal style */}
                {arrowStyle === 'minimal' && (
                  <div className="absolute bottom-4 left-11 sm:left-24 z-40 h-8 w-8 flex justify-center items-center">
                    <FaRegCirclePause className="text-white text-[24px] hover:text-white/30 transition-colors cursor-pointer" />
                  </div>
                )}

                {/* Right Arrow */}
                <div className={`${arrowConfig.containerClass} ${rightArrowPosition} absolute`}>
                  <button
                    className={arrowConfig.buttonClass}
                    onClick={goToNextSlide}
                    type="button"
                    aria-label="Next slide"
                  >
                    {isComponent(RightIcon) ? <RightIcon className={arrowConfig.iconClass} /> : RightIcon}
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}