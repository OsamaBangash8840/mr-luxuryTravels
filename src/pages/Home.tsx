import { AboutUs, Blogs, ClientsLogo, Destinations, Hero, Services } from "@/components/Home";


export function Home() {


  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ClientsLogo />
      <AboutUs />
      <Destinations />
      <Services />
      <Blogs />
    </div>
  );
}
