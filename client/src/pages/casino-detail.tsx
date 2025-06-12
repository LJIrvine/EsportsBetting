import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import StarRating from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ExternalLink, Play } from "lucide-react";
import { useAffiliateTracking } from "@/hooks/use-affiliate-tracking";
import type { Casino } from "@shared/schema";

export default function CasinoDetail() {
  const { slug } = useParams();
  const { trackClick } = useAffiliateTracking();

  const { data: casino, isLoading, error } = useQuery<Casino>({
    queryKey: [`/api/casinos/${slug}`],
    enabled: !!slug,
  });

  const handleAffiliateClick = () => {
    if (casino) {
      trackClick(casino.id, casino.name);
      window.open(`/goto/${casino.slug}`, '_blank');
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-neutral-600">Loading casino details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !casino) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="pt-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Casino Not Found</h1>
              <p className="text-sm text-gray-600">
                The casino you're looking for doesn't exist or has been removed.
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${casino.name} Review - Expert Analysis & Ratings | CasinoHub`}
        description={`${casino.description.slice(0, 150)}...`}
        ogTitle={`${casino.name} Review - Expert Analysis & Ratings`}
        ogDescription={casino.description}
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/casinos">Casinos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{casino.name}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Casino Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <img 
                    src={casino.logo} 
                    alt={`${casino.name} Logo`} 
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">
                        {casino.name}
                      </h1>
                      <div className="flex items-center space-x-4 mb-4">
                        <StarRating rating={casino.rating} />
                        <span className="text-neutral-600 font-medium">
                          {casino.rating}/5
                        </span>
                        {casino.badge && (
                          <Badge className="bg-secondary text-white">
                            {casino.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-secondary mb-1">
                        {casino.bonus}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {casino.bonusType}
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                    {casino.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
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
                    className="bg-secondary hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Play Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
                    onClick={handleAffiliateClick}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Site
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Review Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                    Detailed Review
                  </h2>
                  
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                        Overview
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {casino.description}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {casino.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-neutral-600">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                        Welcome Bonus
                      </h3>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-secondary mb-1">
                          {casino.bonus}
                        </div>
                        <div className="text-neutral-600">
                          {casino.bonusType}
                        </div>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                    Quick Stats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Rating</span>
                      <span className="font-medium">{casino.rating}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Bonus</span>
                      <span className="font-medium">{casino.bonus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Features</span>
                      <span className="font-medium">{casino.features.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    Ready to Play?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Join thousands of players and claim your bonus today!
                  </p>
                  <Button 
                    onClick={handleAffiliateClick}
                    className="bg-secondary hover:bg-green-600 text-white w-full py-3 font-semibold"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
