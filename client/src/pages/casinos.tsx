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
        title="All UK Bookmakers - Complete Sportsbook Directory | TopBetSite"
        description="Browse our complete directory of UK licensed bookmakers. Compare welcome bonuses, odds, and features from all major sports betting sites."
        ogTitle="All UK Bookmakers - Complete Directory"
        ogDescription="Complete directory of UK licensed bookmakers with welcome bonuses and detailed reviews."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              All UK Bookmakers
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Complete directory of UK licensed bookmakers. Compare welcome bonuses, 
              features, and find the perfect sportsbook for your betting needs.
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