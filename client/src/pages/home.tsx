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
    queryKey: ["/api/casinos"],
  });

  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog?published=true"],
  });

  const handleAffiliateClick = (bookmaker: Casino) => {
    trackClick(bookmaker.id, bookmaker.name);
    window.open(`/goto/${bookmaker.slug}`, "_blank");
  };

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

      <div className="min-h-screen bg-neutral-50 dark:bg-gray-900">
        <Header />

        {/* Top Banner */}
        <section className="bg-primary text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              TopBetSite<span className="text-2xl md:text-3xl">.co.uk</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Your trusted source for the best UK betting offers, expert
              reviews, and winning strategies
            </p>
          </div>
        </section>

        {/* Welcome Offers Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Best Welcome Offers
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                Claim exclusive welcome bonuses from the UK's top bookmakers.
                All offers verified and updated regularly.
              </p>
            </div>

            <div className="space-y-4">
              {bookmakersLoading
                ? Array.from({ length: 16 }).map((_, i) => (
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
                : bookmakers.map((bookmaker) => (
                    <Card
                      key={bookmaker.id}
                      className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group dark:bg-gray-700"
                    >
                      {/* Desktop Background Effect */}
                      <div
                        className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300 hidden sm:block"
                        style={{
                          background: `url(${bookmaker.logo}) left center/auto 100% no-repeat`,
                          maskImage:
                            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
                          WebkitMaskImage:
                            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
                        }}
                      />
                      <CardContent className="relative z-10 p-3 sm:p-4 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/90 sm:to-white/95 dark:sm:from-gray-700/95 dark:sm:via-gray-700/90 dark:sm:to-gray-700/95">
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
                              <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-2 leading-tight">
                                {bookmaker.name}
                              </h3>
                              <div className="flex items-center gap-3 mb-2">
                                <StarRating rating={bookmaker.rating} size="sm" />
                                <span className="text-sm text-neutral-600 dark:text-neutral-300">
                                  {bookmaker.rating}/5
                                </span>
                                {bookmaker.badge && (
                                  <Badge className="bg-primary text-white text-xs">
                                    {bookmaker.badge}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          
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
                          
                          <Button 
                            onClick={() => handleAffiliateClick(bookmaker)}
                            className="bg-secondary hover:bg-green-600 text-white font-semibold w-full"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Claim Offer
                          </Button>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden sm:flex items-stretch min-h-[180px]">
                          <div className="relative w-32 h-32 mr-6 flex-shrink-0 flex items-center justify-center self-center">
                            <img
                              src={bookmaker.logo}
                              alt={`${bookmaker.name} Logo`}
                              className="w-28 h-28 object-contain rounded-xl border-2 border-neutral-300 dark:border-gray-600 shadow-xl bg-white p-3 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
                              style={{
                                filter:
                                  "drop-shadow(0 6px 12px rgba(108, 59, 170, 0.2))",
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
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    lineHeight: "1.3",
                                    maxHeight: "3.9em",
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
                        </div>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </div>
        </section>

        {/* What Are Welcome Offers */}
        <section className="py-12 bg-neutral-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                What Are Welcome Offers?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                Welcome offers are promotional bonuses designed to attract new
                customers to betting sites.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Gift className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                    Free Bets
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Risk-free bets that let you place wagers without using your
                    own money. Perfect for trying new markets or strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                    Deposit Bonuses
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Extra betting funds added to your account when you make your
                    first deposit. Typically matches a percentage of your
                    deposit.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                    Enhanced Odds
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Boosted odds on selected markets giving you better potential
                    returns than the standard market price.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trusted Sportsbook Reviews */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Trusted Sportsbook Reviews
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                In-depth reviews of the UK's leading bookmakers by our expert
                team.
              </p>
            </div>

            <div className="space-y-6">
              {sampleReviews.map((bookmaker) => (
                <Card
                  key={bookmaker.id}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group min-h-[160px] dark:bg-gray-700"
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: `url(${bookmaker.logo}) right center/auto 100% no-repeat`,
                      opacity: 0.85,
                    }}
                  />
                  <CardContent className="relative z-10 p-6 flex items-center min-h-[160px] bg-gradient-to-r from-white/100 via-white/0 to-white/0 dark:from-gray-700/100 dark:via-gray-700/0 dark:to-gray-700/0">
                    <div className="flex-1 min-w-0 max-w-xl pr-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white truncate">
                          {bookmaker.name}
                        </h3>
                        <StarRating rating={bookmaker.rating} size="sm" />
                      </div>
                      <p
                        className="text-neutral-700 dark:text-gray-300 mb-4 text-sm leading-relaxed"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: "1.5",
                          maxHeight: "3em",
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
        <section className="py-12 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                How Do Welcome Offers Work?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                Follow these simple steps to claim your welcome bonus and start
                betting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                  Sign Up
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Create a new account with your chosen bookmaker. You'll need
                  to provide basic personal details and verify your identity.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                  Make a Deposit
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Fund your account with the minimum qualifying deposit. Most
                  offers require £10-£20 to activate the welcome bonus.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                  Place Your Bet
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Place a qualifying bet according to the terms. Your free bet
                  or bonus will be credited after settlement.
                </p>
              </div>
            </div>

            <Card className="mt-10 bg-white dark:bg-gray-700 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-neutral-200">
                      Important Terms & Conditions
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">
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
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                Get answers to the most common questions about betting offers
                and bonuses.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="dark:bg-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2 dark:text-neutral-200">
                          {faq.question}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-300">
                          {faq.answer}
                        </p>
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
                  className="border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-900"
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
