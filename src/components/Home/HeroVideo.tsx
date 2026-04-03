import { useRef, useState } from 'react';
import { Images } from '@/assets/home';
import { Typography } from '../common';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { IoPauseSharp, IoPlaySharp } from 'react-icons/io5';

export const HeroVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-[98%] mx-auto h-[100%] 2xl:h-[1080px] rounded-[20px] overflow-hidden">
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={Images.HeroVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-12 sm:pt-56 pt-12 pb-6">
                <div>
                    <Typography variant="largePara" color="white" weight="regular">
                        Find And Book Your Perfect Destination.
                    </Typography>
                    <Typography variant="h1Heading" color="white" className="mt-8">
                        Plan Your <br /> Next Trip
                    </Typography>
                    <Typography color="white" className="sm:w-[900px] mt-8 pb-5">
                        Yes, you can try us for free for 30 days. If you want, we'll provide you
                        with a free, personalized 30-minute onboarding call to get you up and
                        running as soon as possible.
                    </Typography>
                </div>

                {/* Bottom Controls */}
                <div className="flex justify-between items-end">
                    {/* Pause / Play Button - Bottom Left */}
                    <button
                        onClick={togglePlay}
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-3 cursor-pointer"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                        {isPlaying ? (
                            <IoPauseSharp className="text-white text-xl" />
                        ) : (
                            <IoPlaySharp className="text-white text-xl" />
                        )}
                    </button>

                    {/* Sound Button - Bottom Right */}
                    <button
                        onClick={toggleMute}
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-3 cursor-pointer"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                        {isMuted ? (
                            <HiVolumeOff className="text-white text-xl" />
                        ) : (
                            <HiVolumeUp className="text-white text-xl" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};