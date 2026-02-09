import { MImage, Typography } from "@/components/common";
import { Images } from "@/assets/home";
import { LanguageDropdown } from "../LanguageDropdown";

export const Header = () => {
    return (
        <header className=" container flex justify-between items-center py-8">
             <MImage
                src={Images.LogoImg} 
                alt="Logo" 
                w={212} 
                h={50} 
                id="priority" 
            />            
            <nav className="flex gap-10 items-center">
                <Typography variant="navLink">About</Typography>
                <Typography variant="navLink">Services</Typography>
                <Typography variant="navLink">Contact</Typography>
                <LanguageDropdown />
            </nav>
        </header>
    );
};