import { useParams, useNavigate } from "react-router-dom";
import { destinationsData } from "@/data/destinations";
import { Typography, MImage } from "@/components/common";
import { useEffect } from "react";

export function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top on page load / parameter change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const destination = id ? destinationsData[id.toLowerCase()] : null;

  if (!destination) {
    return (
      <div className="container mx-auto py-32 text-center px-4">
        <Typography variant="h2Heading" className="mb-6">
          Destination Not Found
        </Typography>
        <Typography color="secondary" className="mb-8">
          The destination you are looking for does not exist or has been moved.
        </Typography>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const { hero, sections } = destination;

  return (
    <div className="overflow-x-hidden ">
      {/* Hero Section */}
      <div
        className="bg-secondary min-h-[450px] sm:min-h-[550px] 2xl:h-[800px] w-[98%] mx-auto flex flex-col justify-end bg-cover bg-no-repeat px-4 sm:px-12 pb-12 sm:pb-24 rounded-[20px] relative overflow-hidden"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/45 z-0" />

        <div className="relative z-10">
          <Typography variant="largePara" color="white" weight="regular">
            {hero.subtitle}
          </Typography>
          <Typography variant="h1Heading" color="white" className="mt-6 sm:mt-8">
            {hero.title}
          </Typography>
          <Typography color="white" className="sm:w-[900px] mt-6 sm:mt-8 text-white/90">
            {hero.description}
          </Typography>
        </div>
      </div>

      {/* Dynamic Sections (DestinationData sec) */}
      <div className="mt-8 sm:mt-16">
        {sections.map((item) => (
          <div key={item.id} className="container mx-auto mt-16 px-4">
            <div className="flex flex-col sm:flex-row items-center sm:gap-20 gap-8">
              <div className={`w-full sm:w-1/2 ${item.imagePosition === "left" ? "sm:order-2" : "sm:order-1"}`}>
                <Typography variant="h2Heading" weight="regular">
                  <span dangerouslySetInnerHTML={{ __html: item.title }} />
                </Typography>
                <Typography color="secondary" variant="mainBodyPara" className="mt-8 pb-5">
                  {item.description}
                </Typography>
              </div>
              <div className={`w-full sm:w-1/2 ${item.imagePosition === "left" ? "sm:order-1" : "sm:order-2"}`}>
                <MImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full rounded-2xl object-cover h-[300px] sm:h-[450px] shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
