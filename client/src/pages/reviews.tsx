import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CasinoCard from "@/components/casino-card";
import SEOHead from "@/components/seo-head";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import type { Casino } from "@shared/schema";

export default function Reviews() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: bookmakers = [], isLoading } = useQuery<Casino[]>({
    queryKey: ["/api/casinos"],
  });

  const filteredBookmakers = bookmakers.filter(bookmaker =>
    bookmaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bookmaker.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="Full Bookmaker Reviews - Expert Analysis & Ratings | TopBetSite"
        description="Comprehensive reviews of UK bookmakers including William Hill, Bet365, Ladbrokes and more. Expert analysis, ratings, and detailed breakdowns of features."
        ogTitle="Full Bookmaker Reviews - Expert Analysis & Ratings"
        ogDescription="Comprehensive reviews of UK bookmakers with expert analysis, ratings, and detailed feature breakdowns."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Full Bookmaker Reviews
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              In-depth reviews and analysis of the UK's leading bookmakers and sportsbooks.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search bookmakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2"
              />
            </div>
          </div>

          {/* Bookmaker Reviews */}
          <div className="space-y-8">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-neutral-600">Loading reviews...</p>
              </div>
            ) : filteredBookmakers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-600 text-lg">
                  {searchQuery ? 'No bookmakers found matching your search.' : 'No reviews available.'}
                </p>
              </div>
            ) : (
              filteredBookmakers.map((bookmaker) => (
                <CasinoCard key={bookmaker.id} casino={bookmaker} />
              ))
            )}
          </div>

          {/* Results count */}
          {!isLoading && (
            <div className="text-center mt-8 text-neutral-500">
              Showing {filteredBookmakers.length} of {bookmakers.length} bookmaker reviews
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}