import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/star-rating";
import { Play, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useAffiliateTracking } from "@/hooks/use-affiliate-tracking";
import type { Casino } from "@shared/schema";

interface CasinoCardProps {
  casino: Casino;
}

export default function CasinoCard({ casino }: CasinoCardProps) {
  const { trackClick } = useAffiliateTracking();

  const handleAffiliateClick = () => {
    trackClick(casino.id, casino.name);
    window.open(`/goto/${casino.slug}`, '_blank');
  };

  return (
    <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-24 group">
              <img 
                src={casino.logo} 
                alt={`${casino.name} Logo`} 
                className="w-full h-full object-contain rounded-xl border border-neutral-200 shadow-md bg-white p-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(108, 59, 170, 0.1))',
                }}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-30 pointer-events-none"></div>
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <Link href={`/casino/${casino.slug}`}>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2 hover:text-primary transition-colors cursor-pointer">
                    {casino.name}
                  </h3>
                </Link>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center">
                    <StarRating rating={casino.rating} />
                    <span className="ml-2 text-neutral-600 font-medium">
                      {casino.rating}/5
                    </span>
                  </div>
                  {casino.badge && (
                    <Badge className="bg-primary text-white">
                      {casino.badge}
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-secondary mb-1">
                  {casino.bonus}
                </div>
                <div className="text-xs text-neutral-500 leading-tight max-w-xs">
                  {casino.bonusType}
                </div>
              </div>
            </div>
            
            <p className="text-neutral-600 mb-4 leading-relaxed">
              {casino.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {casino.features.map((feature, index) => (
                <Badge key={index} variant="outline">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex-shrink-0 flex flex-col space-y-3">
            <Button 
              onClick={handleAffiliateClick}
              className="bg-secondary hover:bg-green-600 text-white px-8 py-3 font-semibold"
            >
              <Play className="mr-2 h-4 w-4" />
              Play Now
            </Button>
            <Link href={`/casino/${casino.slug}`}>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 w-full"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Read Review
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
