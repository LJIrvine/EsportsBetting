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
                <Card
                  key={bookmaker.id}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group h-36"
                >
                  <div 
                    className="absolute inset-0 opacity-12 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `url(${bookmaker.logo}) left center/auto 100% no-repeat`,
                      maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 100%)',
                    }}
                  />
                  <CardContent className="relative z-10 p-6 flex items-center h-full bg-gradient-to-r from-white/96 via-white/92 to-white/96">
                    <div className="relative w-32 h-32 mr-8 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={bookmaker.logo}
                        alt={`${bookmaker.name} Logo`}
                        className="w-28 h-28 object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-neutral-800">
                          {bookmaker.name}
                        </h3>
                        <StarRating rating={bookmaker.rating} size="sm" />
                      </div>
                      <p className="text-neutral-600 mb-4 text-sm line-clamp-2 leading-relaxed">
                        {bookmaker.description.substring(0, 160)}...
                      </p>
                      <div className="flex items-center gap-4">
                        <Link href={`/casino/${bookmaker.slug}`}>
                          <Button variant="outline" className="px-4 py-2 text-sm">
                            Read Full Review
                          </Button>
                        </Link>
                        <div className="text-right">
                          <div className="text-base font-bold text-secondary">
                            {bookmaker.bonus}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {bookmaker.bonusType}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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