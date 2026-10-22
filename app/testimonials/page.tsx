import TestimonialBanner from "@/components/testimonials/TestimonialBanner";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";


export default function Testimonials() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <TestimonialBanner />
      <TestimonialsGrid />
    </div>
  );
}
