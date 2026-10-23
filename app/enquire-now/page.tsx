import EnquireNowBanner from "@/components/enquire-now/EnquireNow";
import EnquirySection from "@/components/enquire-now/EnquirySection";


export default function EnquireNow() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <EnquireNowBanner />
      <EnquirySection />
    </div>
  );
}
