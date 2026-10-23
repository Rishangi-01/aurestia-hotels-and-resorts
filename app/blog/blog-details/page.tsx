import BeachVacationArticle from "@/components/blog-details/BeachVacationArticle";
import BlogArticleHero from "@/components/blog-details/BlogArticleHero";
import BlogDetailsBanner from "@/components/blog-details/BlogDetailsBanner";


export default function BlogDetails() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <BlogDetailsBanner />
      <BlogArticleHero />
      <BeachVacationArticle />
    </div>
  );
}
