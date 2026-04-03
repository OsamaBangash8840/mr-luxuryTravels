import { AboutUs, Blogs, ClientsLogo, Destinations, HeroVideo, Services } from "@/components/Home";


export function Home() {


  return (
    <div className="overflow-x-hidden">
      <HeroVideo/>
      {/* <Hero /> */}
      <ClientsLogo />
      <AboutUs />
      <Destinations />
      <Services />
      <Blogs />
    </div>
  );
}
