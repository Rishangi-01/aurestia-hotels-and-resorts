import BlogBanner from "@/components/blog/BlogBanner";
import BlogSection from "@/components/blog/BlogSection";


export default function Blog() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <BlogBanner />
      <BlogSection />
    </div>
  );
}
