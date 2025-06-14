import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  TrendingUp,
  Calculator,
  Target,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  const resources = [
    {
      title: "Betting Strategy Guide",
      description:
        "Learn fundamental betting strategies, bankroll management, and value betting techniques.",
      icon: <Target className="h-8 w-8 text-primary" />,
      link: "/betting-strategy",
    },
    {
      title: "Understanding Odds",
      description:
        "Complete guide to reading odds, calculating probability, and finding value bets.",
      icon: <Calculator className="h-8 w-8 text-secondary" />,
      link: "/understanding-odds",
    },
    {
      title: "Betting Tips",
      description:
        "Learn about betting tips and discover trusted external tipsters for football and racing.",
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      link: "/betting-tips",
    },
    {
      title: "Horse Racing Guide",
      description:
        "Learn to read form, understand race types, and identify value in horse racing markets.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      link: "/horse-racing-guide",
    },
    {
      title: "Responsible Gambling",
      description:
        "Information on safe betting practices, setting limits, and getting help if needed.",
      icon: <Shield className="h-8 w-8 text-secondary" />,
      link: "/responsible-gambling",
    },
    {
      title: "Betting Glossary",
      description:
        "A-Z of betting terms and definitions to help you understand the jargon.",
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      link: "/betting-glossary",
    },
  ];

  const popularGuides = [
    { title: "How to Place Your First Bet", link: "/first-bet-guide" },
    { title: "Understanding Accumulator Bets", link: "/accumulator-bets" },
    { title: "Live Betting Strategies", link: "/live-betting-strategies" },
    { title: "Best Betting Apps Review", link: "/betting-apps-review" },
    { title: "Tax on Betting Winnings", link: "/betting-tax-guide" },
    { title: "Matched Betting Explained", link: "/matched-betting-guide" },
  ];

  return (
    <>
      <SEOHead
        title="Betting Resources - Guides, Tips & Strategies | TopBetSite"
        description="Comprehensive betting resources including strategy guides, odds explanations, football tips, and responsible gambling information. Free educational content for bettors."
        ogTitle="Betting Resources - Guides, Tips & Strategies"
        ogDescription="Comprehensive betting resources including strategy guides, odds explanations, and expert tips for successful sports betting."
      />

      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Betting Resources
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
              Educational guides, expert tips, and essential information to
              improve your betting knowledge and skills.
            </p>
          </div>

          {/* Main Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer dark:bg-gray-700"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {resource.icon}
                    <CardTitle className="text-xl dark:text-neutral-200">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {resource.description}
                  </p>
                  <Link href={resource.link}>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-900"
                    >
                      Read Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Guides Section */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">
              Popular Betting Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularGuides.map((guide, index) => (
                <Link key={index} href={guide.link}>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors">
                      {guide.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 bg-primary text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Betting?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Now that you've learned the basics, check out our exclusive
              welcome offers from top UK bookmakers.
            </p>
            <Link href="/offers">
              <Button className="bg-secondary hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold">
                View All Offers
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
