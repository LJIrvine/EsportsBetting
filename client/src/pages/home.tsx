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
        title="Top Bet Site – Your Guide to Esports Betting"
        description="Discover the best esports betting sites for CS2, League of Legends, Dota 2, and Valorant. Expert reviews, betting guides, and top odds comparison."
        ogTitle="Top Bet Site – Your Guide to Esports Betting"
        ogDescription="Your ultimate destination for esports betting guides, site comparisons, and expert tips for competitive gaming."
      />

      <div className="min-h-screen bg-neutral-50 dark:bg-gray-900">
        <Header />

        {/* Top Banner */}
        <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-teal-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Top Bet Site – Your Guide to Esports Betting
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Discover the explosive world of esports betting! From CS2 tournaments to League of Legends championships, 
              we help you find the best sites, understand the odds, and master competitive gaming wagering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/casinos">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3">
                  Compare Esports Betting Sites
                </Button>
              </Link>
              <Link href="/esports-betting-guide">
                <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold px-8 py-3">
                  Learn How to Bet on Esports
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Esports Betting Sites Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Top Esports Betting Sites
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                Compare the best esports betting platforms. From crypto-friendly sites to those with the highest odds, 
                find your perfect match for CS2, LoL, Dota 2, and Valorant betting.
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
                      <CardContent className="relative z-10 p-3 sm:p-6">
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

        {/* Top Esports Betting Games */}
        <section className="py-12 bg-neutral-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Top Esports Betting Games
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                Master the art of esports betting with our comprehensive guides for the most popular competitive games.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/cs2-betting-guide">
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 hover:border-orange-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      CS2
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                      CS2 Betting Guide
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Master Counter-Strike 2 betting with map analysis, team form, and tactical insights for major tournaments.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/lol-betting-guide">
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 hover:border-blue-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      LoL
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                      League of Legends Guide
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Navigate LoL betting with patch analysis, meta understanding, and championship predictions.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dota2-betting-guide">
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-2 hover:border-red-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      D2
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                      Dota 2 Betting Guide
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Understand Dota 2's complex meta, draft phases, and tournament formats for successful betting.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/valorant-betting-guide">
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 border-2 hover:border-teal-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      VAL
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-neutral-200">
                      Valorant Betting Guide
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Master Valorant betting with agent compositions, map control, and round-by-round analysis.
                    </p>
                  </CardContent>
                </Card>
              </Link>
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
                    className="absolute inset-0 transition-opacity duration-300 hidden sm:block"
                    style={{
                      background: `url(${bookmaker.logo}) right center/auto 100% no-repeat`,
                      opacity: 0.85,
                    }}
                  />
                  <CardContent className="relative z-10 p-3 sm:p-6">
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
                          <div className="flex items-center gap-3 mb-2">
                            <StarRating rating={bookmaker.rating} size="sm" />
                            <span className="text-sm text-neutral-600 dark:text-neutral-300">
                              {bookmaker.rating}/5
                            </span>
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
