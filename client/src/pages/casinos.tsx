import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import CasinoCard from "@/components/casino-card";
import { Card, CardContent } from "@/components/ui/card";
import type { Casino } from "@shared/schema";

export default function Casinos() {
  const { data: casinos = [], isLoading } = useQuery<Casino[]>({
    queryKey: ["/api/casinos"],
  });

  return (
    <>
      <SEOHead 
        title="Best Esports Betting Sites Comparison | Top Bet Site"
        description="Compare the top esports betting platforms including Betway, GG.Bet, Pinnacle, and Stake. Find the best odds, crypto options, and live betting for CS2, LoL, Dota 2, and Valorant."
        ogTitle="Best Esports Betting Sites Comparison"
        ogDescription="Compare top esports betting platforms with expert reviews, features analysis, and betting guides."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Best Esports Betting Sites
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Compare the top esports betting platforms for CS2, League of Legends, Dota 2, and Valorant. 
              Find sites with the best odds, crypto support, live betting, and tournament coverage.
            </p>
          </div>

          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-8">
                      <div className="w-24 h-16 bg-gray-200 rounded"></div>
                      <div className="flex-1">
                        <div className="h-8 bg-gray-200 rounded mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded mb-4"></div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              casinos.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} />
              ))
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}