import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/star-rating";
import { Link } from "wouter";
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
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-900">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Full Bookmaker Reviews
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
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
          <div className="space-y-6">
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
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group dark:bg-gray-700"
                >
                  {/* Desktop Background Effect */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 hidden sm:block"
                    style={{
                      background: `url(${bookmaker.logo}) right center/auto 100% no-repeat`,
                      opacity: 0.85,
                    }}
                  />
                  <CardContent className="relative z-10 p-3 sm:p-6 sm:bg-gradient-to-r sm:from-white/0 sm:via-white/0 sm:to-white/0 dark:sm:from-gray-700/0 dark:sm:via-gray-700/0 dark:sm:to-gray-700/0">
                    {/* Mobile Layout */}
                    <div className="flex flex-col space-y-3 sm:hidden">
                      <div className="flex items-start space-x-4">
                        <div className="relative w-24 h-20 flex-shrink-0">
                          <img
                            src={bookmaker.logo}
                            alt={`${bookmaker.name} Logo`}
                            className="w-full h-full object-contain rounded-lg border border-neutral-300 dark:border-gray-600 shadow-md bg-white p-2"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200 mb-2 leading-tight">
                            {bookmaker.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <StarRating rating={bookmaker.rating} size="sm" />
                            {bookmaker.badge && (
                              <Badge className="bg-primary text-white text-xs px-1.5 py-0.5 text-center whitespace-nowrap max-w-fit text-[10px]">
                                {bookmaker.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2">
                        {bookmaker.description}
                      </p>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="text-center">
                          <div className="text-lg font-bold text-secondary mb-1">
                            {bookmaker.bonus}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-300 leading-tight">
                            {bookmaker.bonusType}
                          </div>
                        </div>
                      </div>
                      
                      <Link href={`/casino/${bookmaker.slug}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-900"
                        >
                          Read Full Review
                        </Button>
                      </Link>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden sm:flex items-center min-h-[160px]">
                      <div className="flex-1 min-w-0 max-w-xl pr-6">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-200 truncate">
                            {bookmaker.name}
                          </h3>
                          <StarRating rating={bookmaker.rating} size="sm" />
                        </div>
                        <p 
                          className="text-neutral-700 dark:text-neutral-300 mb-4 text-sm leading-relaxed"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: '1.5',
                            maxHeight: '3em'
                          }}
                        >
                          {bookmaker.description}
                        </p>
                        <div className="flex items-center justify-between gap-6">
                          <Link href={`/casino/${bookmaker.slug}`}>
                            <Button 
                              variant="outline" 
                              className="px-4 py-2 text-sm font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-colors duration-200 shadow-sm"
                            >
                              Read Review
                            </Button>
                          </Link>
                          <div className="text-right bg-white/80 dark:bg-gray-600/80 rounded-lg px-3 py-2 shadow-sm">
                            <div className="text-base font-bold text-secondary">
                              {bookmaker.bonus}
                            </div>
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
            <div className="text-center mt-8 text-neutral-500 dark:text-neutral-400">
              Showing {filteredBookmakers.length} of {bookmakers.length} bookmaker reviews
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}