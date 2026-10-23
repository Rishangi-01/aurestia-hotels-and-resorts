import ContactBanner from "@/components/contact/ContactBanner";
import ContactSection from "@/components/contact/ContactSection";
import LocationMap from "@/components/contact/LocationMap";


export default function Contact() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <ContactBanner />
      <ContactSection />
      <LocationMap />
    </div>
  );
}
