import AboutUs from "@/components/home/AboutUs";
import Facilities from "@/components/home/Facilities";
import RoomsHero from "@/components/home/RoomsHero";
import StayBeyond from "@/components/home/StayBeyond";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <StayBeyond />
      <AboutUs />
      <RoomsHero />
      <Facilities />
      <Testimonials />
    </div>
  );
}
