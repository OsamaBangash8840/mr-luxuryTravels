import { useState } from "react";
import { MImage, Typography } from "@/components/common";
import { Images } from "@/assets/home";
import { LanguageDropdown } from "../LanguageDropdown";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="container flex justify-between items-center py-8">
                {/* Logo */}
                <MImage
                    src={Images.LogoImg} 
                    alt="Logo" 
                    w={212} 
                    h={50} 
                    id="priority" 
                />            

                {/* Desktop Navigation - Hidden on mobile */}
                <nav className="hidden md:flex gap-10 items-center">
                    <Typography variant="navLink">About</Typography>
                    <Typography variant="navLink">Services</Typography>
                    <Typography variant="navLink">Contact</Typography>
                    <LanguageDropdown />
                </nav>

                {/* Hamburger Menu Button - Only visible on mobile, positioned on right */}
                <button
                    className="md:hidden flex flex-col gap-1.5 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-primary transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-primary transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-primary transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer - Slides from right */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <span className="w-6 h-0.5 bg-primary rotate-45 absolute"></span>
                    <span className="w-6 h-0.5 bg-primary -rotate-45 absolute"></span>
                </button>

                <nav className="flex flex-col gap-6 p-8 mt-20">
                    <Typography variant="navLink" className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>About</Typography>
                    <Typography variant="navLink" className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Services</Typography>
                    <Typography variant="navLink" className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact</Typography>
                    <div className="mt-4">
                        <LanguageDropdown />
                    </div>
                </nav>
            </div>
        </>
    );
};