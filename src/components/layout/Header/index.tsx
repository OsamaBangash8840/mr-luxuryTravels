import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MImage, Typography } from "@/components/common";
import { Images } from "@/assets/home";
import { LanguageDropdown } from "../LanguageDropdown";
import { ServicesDropdown } from "../ServicesDropdown";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? "text-primary font-semibold" : "text-textPrimary";
    }

    return (
        <>
            <header className="container flex justify-between items-center py-8">
                {/* Logo */}
                <Link to="/">
                <MImage
                    src={Images.LogoImg} 
                    alt="Logo" 
                    w={212} 
                    h={50} 
                    id="priority" 
                    className="cursor-pointer"
                />            
                </Link>

                {/* Desktop Navigation - Hidden on mobile */}
                <nav className="hidden md:flex gap-10 items-center">
                    <Link to="/">
                        <Typography variant="navLink" className={isActive('/destinations')}>Destinations</Typography>
                    </Link>
                    <ServicesDropdown />
                    <Link to="/">
                        <Typography variant="navLink" className={isActive('/experiences')}>Experiences</Typography>
                    </Link><Link to="/about">
                        <Typography variant="navLink" className={isActive('/about')}>About</Typography>
                    </Link>
                    
                    <Link to="/contact">
                        <Typography variant="navLink" className={isActive('/contact')}>Contact</Typography>
                    </Link>
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
                      <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Typography variant="navLink" className={isActive('/destinations')}>Destinations</Typography>
                    </Link>
                    <ServicesDropdown onItemClick={() => setIsMobileMenuOpen(false)} />
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Typography variant="navLink" className={isActive('/experiences')}>Experiences</Typography>
                    </Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                        <Typography variant="navLink" className={`cursor-pointer ${isActive('/about')}`}>About</Typography>
                    </Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <Typography variant="navLink" className={`cursor-pointer ${isActive('/contact')}`}>Contact</Typography>
                    </Link>
                    <div className="mt-4">
                        <LanguageDropdown />
                    </div>
                </nav>
            </div>
        </>
    );
};