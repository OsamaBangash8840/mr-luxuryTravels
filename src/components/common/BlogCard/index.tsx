import { MImage } from "../MImage"
import { Typography } from "../Typography"

export const BlogCard = ({img, title, date, place}: {img: string, title: string, date: string, place: string}) => {
    return (
        <div className="w-full md:w-[calc(25%-12px)] lg:w-[calc(25%-12px)]">
            <div className="rounded-[20px] h-[250px] overflow-hidden mt-4 sm:mt-0">
                <MImage src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4">
                <Typography variant="mainBodyPara" className="mb-1" color="secondary">
                    {place}
                </Typography>
                <Typography variant="largePara" className="mb-2">
                    {title}
                </Typography>
                <Typography variant="mainBodyPara" color="secondary">
                    {date}
                </Typography>
            </div>
        </div>
    )
}