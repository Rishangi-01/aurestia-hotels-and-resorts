import AboutBanner from "@/components/about/AboutBanner";
import AboutUs from "@/components/home/AboutUs";
import Facilities from "@/components/home/Facilities";
import Testimonials from "@/components/home/Testimonials";


export default function About() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <AboutBanner />
      <AboutUs />
      <Facilities />
      <Testimonials />
    </div>
  );
}
