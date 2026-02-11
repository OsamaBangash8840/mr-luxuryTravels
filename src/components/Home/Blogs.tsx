import { BlogCard, Typography } from "../common"
import { Images } from "@/assets/home"

export const Blogs = () => {
    return (
        <>
        <section className="container mt-20">
            <div className="sm:w-[60%]">
                <Typography variant="h2Heading">Latest news</Typography>
                <Typography variant="mainBodyPara" className="mt-5">
                     For stories, seasonal moments, and a glimpse into the world of MRLUXURYTRAVELS follow @MRLUXURYTRAVELS on Instagram.        
                </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 py-10">
                <BlogCard img={Images.Blog1} title="The galette des rois of MrluxuryTravel Paris"  date="January 10, 2026" place="Paris" />
                <BlogCard img={Images.Blog2} title="The Magic of the Holidays at MrluxuryTravel St-Barth" date="January 10, 2026" place="St-Barth" />
                <BlogCard img={Images.Blog3} title="The Sparkle of a New Enchanted Season" date="January 10, 2026" place="Courchevel" />
                <BlogCard img={Images.Blog4} title="The galette des rois of MrluxuryTravel Randheli" date="January 10, 2026" place="Randheli" />
            </div>
        </section>
        </>
    )
}