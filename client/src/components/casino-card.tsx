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
    <Card className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-none">
      <CardContent className="p-4 sm:p-6">
        {/* Mobile: Stacked Layout */}
        <div className="flex flex-col space-y-4 lg:hidden">
          {/* Header Row: Logo, Name, Rating */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="relative w-16 h-12 sm:w-20 sm:h-16">
                <img 
                  src={casino.logo} 
                  alt={`${casino.name} Logo`} 
                  className="w-full h-full object-contain rounded-lg border border-neutral-200 dark:border-gray-600 bg-white p-2"
                />
              </div>
            </div>
            <div className="flex-grow min-w-0">
              <Link href={`/casino/${casino.slug}`}>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-1 hover:text-primary transition-colors cursor-pointer truncate">
                  {casino.name}
                </h3>
              </Link>
              <div className="flex items-center space-x-2">
                <StarRating rating={casino.rating} size="sm" />
                <span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">
                  {casino.rating}/5
                </span>
                {casino.badge && (
                  <Badge className="bg-primary text-white text-xs">
                    {casino.badge}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-700">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">
                {casino.bonus}
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-300">
                {casino.bonusType}
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {casino.description}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1">
            {casino.features.slice(0, 4).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {casino.features.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{casino.features.length - 4} more
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2">
            <Button 
              onClick={handleAffiliateClick}
              className="bg-secondary hover:bg-green-600 text-white font-semibold w-full"
            >
              <Play className="mr-2 h-4 w-4" />
              Play Now
            </Button>
            <Link href={`/casino/${casino.slug}`}>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Read Review
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-24 group">
              <img 
                src={casino.logo} 
                alt={`${casino.name} Logo`} 
                className="w-full h-full object-contain rounded-xl border border-neutral-200 dark:border-gray-600 shadow-md bg-white p-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(108, 59, 170, 0.1))',
                }}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-30 pointer-events-none"></div>
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Link href={`/casino/${casino.slug}`}>
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2 hover:text-primary transition-colors cursor-pointer">
                    {casino.name}
                  </h3>
                </Link>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center">
                    <StarRating rating={casino.rating} />
                    <span className="ml-2 text-neutral-600 dark:text-neutral-300 font-medium">
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
                <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight max-w-xs">
                  {casino.bonusType}
                </div>
              </div>
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
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
