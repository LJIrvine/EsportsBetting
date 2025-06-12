import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CasinoCard from "@/components/casino-card";
import SEOHead from "@/components/seo-head";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import type { Casino } from "@shared/schema";

export default function Casinos() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: casinos = [], isLoading } = useQuery<Casino[]>({
    queryKey: ["/api/casinos"],
  });

  const filteredCasinos = casinos.filter(casino =>
    casino.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    casino.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="All Online Casinos - Compare & Review | CasinoHub"
        description="Browse and compare all online casinos with expert reviews, ratings, and exclusive bonuses. Find the perfect gambling site for your needs."
        ogTitle="All Online Casinos - Compare & Review"
        ogDescription="Browse and compare all online casinos with expert reviews, ratings, and exclusive bonuses."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              All Online Casinos
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              Discover and compare all online casinos with our comprehensive reviews and ratings.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search casinos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2"
              />
            </div>
          </div>

          {/* Casino Listings */}
          <div className="space-y-8">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-neutral-600">Loading casinos...</p>
              </div>
            ) : filteredCasinos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-600 text-lg">
                  {searchQuery ? 'No casinos found matching your search.' : 'No casinos available.'}
                </p>
              </div>
            ) : (
              filteredCasinos.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} />
              ))
            )}
          </div>

          {/* Results count */}
          {!isLoading && (
            <div className="text-center mt-8 text-neutral-500">
              Showing {filteredCasinos.length} of {casinos.length} casinos
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
