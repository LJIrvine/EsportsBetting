import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogCard from "@/components/blog-card";
import SEOHead from "@/components/seo-head";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog?published=true"],
  });

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead 
        title="Casino News & Guides - Expert Insights | CasinoHub"
        description="Stay informed with the latest casino news, strategy guides, and expert insights. Learn about new games, bonuses, and industry trends."
        ogTitle="Casino News & Guides - Expert Insights"
        ogDescription="Stay informed with the latest casino news, strategy guides, and expert insights."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Casino News & Guides
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              Expert insights, strategy guides, and the latest developments in online gambling.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-neutral-600">Loading articles...</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-600 text-lg">
                  {searchQuery || selectedCategory ? 'No articles found matching your criteria.' : 'No articles available.'}
                </p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))
            )}
          </div>

          {/* Results count */}
          {!isLoading && filteredPosts.length > 0 && (
            <div className="text-center mt-8 text-neutral-500">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
