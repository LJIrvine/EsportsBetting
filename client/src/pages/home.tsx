import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/star-rating";
import {
  ChevronRight,
  Gift,
  Shield,
  Clock,
  CheckCircle,
  HelpCircle,
  Play,
} from "lucide-react";
import { Link } from "wouter";
import { useAffiliateTracking } from "@/hooks/use-affiliate-tracking";
import type { Casino, BlogPost } from "@shared/schema";

export default function Home() {
  const { trackClick } = useAffiliateTracking();

  const { data: bookmakers = [], isLoading: bookmakersLoading } = useQuery<
    Casino[]
  >({
    queryKey: ["/api/casinos?featured=true"],
  });

  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog?published=true"],
  });

  const handleAffiliateClick = (bookmaker: Casino) => {
    trackClick(bookmaker.id, bookmaker.name);
    window.open(`/goto/${bookmaker.slug}`, "_blank");
  };

  const topBookmakers = bookmakers.slice(0, 8);
  const sampleReviews = bookmakers.slice(0, 4);

  const faqs = [
    {
      question: "Are these welcome offers available to new customers only?",
      answer:
        "Yes, welcome offers are exclusively for new customers who have never had an account with that bookmaker. Each offer can only be claimed once per person, household, or IP address.",
    },
    {
      question: "Do I need to deposit money to claim a welcome offer?",
      answer:
        "Most welcome offers require a qualifying deposit and bet. However, some bookmakers offer no-deposit free bets. Always check the specific terms and conditions for each offer.",
    },
    {
      question: "How long do I have to use my welcome bonus?",
      answer:
        "Welcome bonuses typically expire between 7-30 days after being credited to your account. Free bets usually have shorter expiry periods, so use them promptly.",
    },
    {
      question: "Can I withdraw my welcome bonus immediately?",
      answer:
        "No, welcome bonuses usually have wagering requirements. You must bet the bonus amount a certain number of times before you can withdraw any winnings.",
    },
  ];

  return (
    <>
      <SEOHead
        title="TopBetSite - Best UK Betting Offers & Sportsbook Reviews 2024"
        description="Find the best UK betting offers and welcome bonuses from top bookmakers. Expert reviews of William Hill, Bet365, Ladbrokes and more. Free betting guides and tips."
        ogTitle="TopBetSite - Best UK Betting Offers & Sportsbook Reviews"
        ogDescription="Find the best UK betting offers and welcome bonuses from top bookmakers including William Hill, Bet365, and Ladbrokes."
      />

      <div className="min-h-screen bg-neutral-50">
        <Header />

        {/* Top Banner */}
        <section className="bg-primary text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">TopBetSite</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Your trusted source for the best UK betting offers, expert
              reviews, and winning strategies
            </p>
          </div>
        </section>

        {/* Welcome Offers Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Best Welcome Offers
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Claim exclusive welcome bonuses from the UK's top bookmakers.
                All offers verified and updated regularly.
              </p>
            </div>

            <div className="space-y-4">
              {bookmakersLoading
                ? Array.from({ length: 8 }).map((_, i) => (
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
                : topBookmakers.map((bookmaker) => (
                    <Card
                      key={bookmaker.id}
                      className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group h-28"
                    >
                      <div 
                        className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                        style={{
                          background: `url(${bookmaker.logo}) left center/auto 100% no-repeat`,
                          maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
                          WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
                        }}
                      />
                      <CardContent className="relative z-10 p-4 flex items-center h-full bg-gradient-to-r from-white/95 via-white/90 to-white/95">
                        <div className="relative w-24 h-24 mr-6 flex-shrink-0 flex items-center justify-center">
                          <img
                            src={bookmaker.logo}
                            alt={`${bookmaker.name} Logo`}
                            className="w-20 h-20 object-contain rounded-xl border-2 border-neutral-300 shadow-xl bg-white p-2 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
                            style={{
                              filter: 'drop-shadow(0 6px 12px rgba(108, 59, 170, 0.2))',
                            }}
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-50 pointer-events-none"></div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-xl text-neutral-800">
                              {bookmaker.name}
                            </h3>
                            <StarRating rating={bookmaker.rating} size="sm" />
                          </div>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="text-2xl font-bold text-secondary">
                              {bookmaker.bonus}
                            </div>
                            <div className="text-sm text-neutral-600">
                              {bookmaker.bonusType}
                            </div>
                            {bookmaker.badge && (
                              <Badge className="bg-primary text-white text-xs px-2 py-1">
                                {bookmaker.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 ml-4">
                          <Button
                            onClick={() => handleAffiliateClick(bookmaker)}
                            className="bg-secondary hover:bg-green-600 text-white font-semibold px-6 py-3"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Claim Offer
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </div>
        </section>

        {/* What Are Welcome Offers */}
        <section className="py-12 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                What Are Welcome Offers?
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Welcome offers are promotional bonuses designed to attract new
                customers to betting sites.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Gift className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Bets</h3>
                  <p className="text-neutral-600">
                    Risk-free bets that let you place wagers without using your
                    own money. Perfect for trying new markets or strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Deposit Bonuses
                  </h3>
                  <p className="text-neutral-600">
                    Extra betting funds added to your account when you make your
                    first deposit. Typically matches a percentage of your
                    deposit.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Enhanced Odds</h3>
                  <p className="text-neutral-600">
                    Boosted odds on selected markets giving you better potential
                    returns than the standard market price.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trusted Sportsbook Reviews */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                Trusted Sportsbook Reviews
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                In-depth reviews of the UK's leading bookmakers by our expert
                team.
              </p>
            </div>

            <div className="space-y-6">
              {sampleReviews.map((bookmaker) => (
                <Card
                  key={bookmaker.id}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group h-40"
                >
                  <div 
                    className="absolute inset-0 opacity-12 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `url(${bookmaker.logo}) left center/auto 100% no-repeat`,
                      maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 100%)',
                    }}
                  />
                  <CardContent className="relative z-10 p-4 flex items-center h-full bg-gradient-to-r from-white/96 via-white/92 to-white/96">
                    <div className="relative w-32 h-32 mr-6 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={bookmaker.logo}
                        alt={`${bookmaker.name} Logo`}
                        className="w-24 h-24 object-contain rounded-xl border-2 border-neutral-300 shadow-xl bg-white p-3 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
                        style={{
                          filter: 'drop-shadow(0 8px 16px rgba(108, 59, 170, 0.25))',
                        }}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-50 pointer-events-none"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-neutral-800">
                          {bookmaker.name}
                        </h3>
                        <StarRating rating={bookmaker.rating} size="sm" />
                      </div>
                      <p className="text-neutral-600 mb-3 text-sm line-clamp-2 leading-relaxed">
                        {bookmaker.description.substring(0, 140)}...
                      </p>
                      <div className="flex items-center gap-4">
                        <Link href={`/casino/${bookmaker.slug}`}>
                          <Button variant="outline" className="px-4 py-2 text-xs">
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
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/reviews">
                <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3">
                  See All Reviews
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How Do Welcome Offers Work */}
        <section className="py-12 bg-gradient-to-r from-neutral-100 to-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                How Do Welcome Offers Work?
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Follow these simple steps to claim your welcome bonus and start
                betting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
                <p className="text-neutral-600">
                  Create a new account with your chosen bookmaker. You'll need
                  to provide basic personal details and verify your identity.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Make a Deposit</h3>
                <p className="text-neutral-600">
                  Fund your account with the minimum qualifying deposit. Most
                  offers require £10-£20 to activate the welcome bonus.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Place Your Bet</h3>
                <p className="text-neutral-600">
                  Place a qualifying bet according to the terms. Your free bet
                  or bonus will be credited after settlement.
                </p>
              </div>
            </div>

            <Card className="mt-10 bg-white border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      Important Terms & Conditions
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Always read the full terms and conditions before claiming
                      any offer. Pay attention to wagering requirements, minimum
                      odds, time limits, and excluded markets. Some offers may
                      have maximum bet limits or restrictions on withdrawal
                      methods.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600">
                Get answers to the most common questions about betting offers
                and bonuses.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View All FAQs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
