import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CasinoCard from "@/components/casino-card";
import BlogCard from "@/components/blog-card";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Shield, Star, Gift } from "lucide-react";
import { Link } from "wouter";
import type { Casino, BlogPost } from "@shared/schema";

export default function Home() {
  const { data: featuredCasinos = [], isLoading: casinosLoading } = useQuery<Casino[]>({
    queryKey: ["/api/casinos?featured=true"],
  });

  const { data: blogPosts = [], isLoading: blogLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog?published=true"],
  });

  const latestPosts = blogPosts.slice(0, 3);

  const scrollToCasinos = () => {
    document.getElementById('casinos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead 
        title="CasinoHub - Top Rated Online Casinos & Reviews"
        description="Discover the best online casinos with our expert reviews, ratings, and exclusive bonuses. Compare top-rated gambling sites and find your perfect match."
        ogTitle="CasinoHub - Top Rated Online Casinos & Reviews"
        ogDescription="Discover the best online casinos with our expert reviews, ratings, and exclusive bonuses."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Online Casino
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Expert reviews, exclusive bonuses, and trusted recommendations to help you choose the best online gambling experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="text-secondary text-xl" />
                <span className="text-lg">Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-accent text-xl" />
                <span className="text-lg">Expert Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="text-secondary text-xl" />
                <span className="text-lg">Exclusive Bonuses</span>
              </div>
            </div>
            <Button 
              onClick={scrollToCasinos}
              className="bg-secondary hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg"
            >
              View Top Casinos
              <span className="ml-2">↓</span>
            </Button>
          </div>
        </section>

        {/* Top Casinos Section */}
        <section id="casinos" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Top Rated Online Casinos
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Our experts have reviewed hundreds of online casinos to bring you only the best, most trusted gambling sites.
              </p>
            </div>

            <div className="grid gap-8 mb-8">
              {casinosLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-4 text-neutral-600">Loading top casinos...</p>
                </div>
              ) : (
                featuredCasinos.map((casino) => (
                  <CasinoCard key={casino.id} casino={casino} />
                ))
              )}
            </div>

            <div className="text-center">
              <Link href="/casinos">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Casinos
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Latest Casino News & Guides
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Stay informed with our expert insights, strategy guides, and the latest developments in online gambling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogLoading ? (
                <div className="col-span-full text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-4 text-neutral-600">Loading latest articles...</p>
                </div>
              ) : (
                latestPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))
              )}
            </div>

            <div className="text-center">
              <Link href="/blog">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Articles
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
