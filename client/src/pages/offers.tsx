import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/star-rating";
import { Play, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useAffiliateTracking } from "@/hooks/use-affiliate-tracking";
import type { Casino } from "@shared/schema";

export default function Offers() {
  const { trackClick } = useAffiliateTracking();

  const { data: bookmakers = [], isLoading } = useQuery<Casino[]>({
    queryKey: ["/api/casinos"],
  });

  const handleAffiliateClick = (bookmaker: Casino) => {
    trackClick(bookmaker.id, bookmaker.name);
    window.open(`/goto/${bookmaker.slug}`, '_blank');
  };

  return (
    <>
      <SEOHead 
        title="All Betting Offers - Welcome Bonuses & Free Bets | TopBetSite"
        description="Complete list of UK betting offers including welcome bonuses, free bets, and promotional deals from top bookmakers. Updated daily with the latest offers."
        ogTitle="All Betting Offers - Welcome Bonuses & Free Bets"
        ogDescription="Complete list of UK betting offers including welcome bonuses, free bets, and promotional deals from top bookmakers."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-900">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              All Betting Offers
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
              Complete collection of welcome bonuses and promotional offers from the UK's leading bookmakers.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="space-y-4">
            {isLoading ? (
              Array.from({ length: 16 }).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-xl mr-6"></div>
                    <div className="flex-1">
                      <div className="h-6 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-4"></div>
                      <div className="h-10 bg-gray-200 rounded w-32"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              bookmakers.map((bookmaker) => (
                <Card
                  key={bookmaker.id}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group min-h-[180px] dark:bg-gray-700"
                >
                  <div 
                    className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                    style={{
                      background: `url(${bookmaker.logo}) left center/auto 100% no-repeat`,
                      maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
                    }}
                  />
                  <CardContent className="relative z-10 p-4 flex items-stretch min-h-[180px] bg-gradient-to-r from-white/95 via-white/90 to-white/95 dark:from-gray-700/95 dark:via-gray-700/90 dark:to-gray-700/95">
                    <div className="relative w-32 h-32 mr-6 flex-shrink-0 flex items-center justify-center self-center">
                      <img
                        src={bookmaker.logo}
                        alt={`${bookmaker.name} Logo`}
                        className="w-28 h-28 object-contain rounded-xl border-2 border-neutral-300 shadow-xl bg-white p-3 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
                        style={{
                          filter: 'drop-shadow(0 6px 12px rgba(108, 59, 170, 0.2))',
                        }}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-50 pointer-events-none"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-center py-2">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 truncate">
                          {bookmaker.name}
                        </h3>
                        <StarRating rating={bookmaker.rating} size="sm" />
                      </div>
                      <div className="mb-3">
                        <div className="text-xl font-bold text-secondary mb-1">
                          {bookmaker.bonus}
                        </div>
                        <div className="flex items-start gap-3">
                          <div 
                            className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight flex-1"
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              lineHeight: '1.3',
                              maxHeight: '3.9em'
                            }}
                          >
                            {bookmaker.bonusType}
                          </div>
                          {bookmaker.badge && (
                            <Badge className="bg-primary text-white text-xs px-2 py-1 flex-shrink-0 self-start">
                              {bookmaker.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 ml-6 justify-center">
                      <Button
                        onClick={() => handleAffiliateClick(bookmaker)}
                        className="bg-secondary hover:bg-green-600 text-white font-semibold px-5 py-2.5 text-sm whitespace-nowrap"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Claim Offer
                      </Button>
                      <Link href={`/casino/${bookmaker.slug}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-900 px-4 py-2 text-xs whitespace-nowrap"
                        >
                          Read Review
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Results count */}
          {!isLoading && (
            <div className="text-center mt-8 text-neutral-500 dark:text-neutral-400">
              Showing {bookmakers.length} betting offers
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}