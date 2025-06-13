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
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              All Betting Offers
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              Complete collection of welcome bonuses and promotional offers from the UK's leading bookmakers.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 9 }).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))
            ) : (
              bookmakers.map((bookmaker) => (
                <Card key={bookmaker.id} className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="relative mx-auto mb-3 w-32 h-24 group">
                        <img 
                          src={bookmaker.logo} 
                          alt={`${bookmaker.name} Logo`} 
                          className="w-full h-full object-contain rounded-xl border border-neutral-200 shadow-md bg-white p-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(108, 59, 170, 0.1))',
                          }}
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-30 pointer-events-none"></div>
                      </div>
                      <h3 className="font-bold text-xl mb-2">{bookmaker.name}</h3>
                      
                      <div className="flex items-center justify-center mb-3">
                        <StarRating rating={bookmaker.rating} />
                        <span className="ml-2 text-neutral-600 font-medium">
                          {bookmaker.rating}/5
                        </span>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-secondary mb-1">
                        {bookmaker.bonus}
                      </div>
                      <div className="text-sm text-neutral-600 mb-3">
                        {bookmaker.bonusType}
                      </div>
                      {bookmaker.badge && (
                        <Badge className="bg-primary text-white mb-3">
                          {bookmaker.badge}
                        </Badge>
                      )}
                    </div>

                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                      {bookmaker.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {bookmaker.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Button 
                        onClick={() => handleAffiliateClick(bookmaker)}
                        className="w-full bg-secondary hover:bg-green-600 text-white font-semibold"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Claim Offer
                      </Button>
                      <Link href={`/casino/${bookmaker.slug}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
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
            <div className="text-center mt-8 text-neutral-500">
              Showing {bookmakers.length} betting offers
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}