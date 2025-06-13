import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Calculator, Target, BarChart3, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  const resources = [
    {
      title: "Betting Strategy Guide",
      description: "Learn fundamental betting strategies, bankroll management, and value betting techniques.",
      icon: <Target className="h-8 w-8 text-primary" />,
      link: "/resources/strategy-guide"
    },
    {
      title: "Understanding Odds",
      description: "Complete guide to reading odds, calculating probability, and finding value bets.",
      icon: <Calculator className="h-8 w-8 text-secondary" />,
      link: "/resources/odds-guide"
    },
    {
      title: "Football Betting Tips",
      description: "Expert analysis and tips for Premier League, Championship, and international football.",
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      link: "/resources/football-tips"
    },
    {
      title: "Horse Racing Guide",
      description: "Learn to read form, understand race types, and identify value in horse racing markets.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      link: "/resources/horse-racing"
    },
    {
      title: "Responsible Gambling",
      description: "Information on safe betting practices, setting limits, and getting help if needed.",
      icon: <Shield className="h-8 w-8 text-secondary" />,
      link: "/resources/responsible-gambling"
    },
    {
      title: "Betting Glossary",
      description: "A-Z of betting terms and definitions to help you understand the jargon.",
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      link: "/resources/glossary"
    }
  ];

  const popularGuides = [
    "How to Place Your First Bet",
    "Understanding Accumulator Bets", 
    "Live Betting Strategies",
    "Best Betting Apps Review",
    "Tax on Betting Winnings",
    "Matched Betting Explained"
  ];

  return (
    <>
      <SEOHead 
        title="Betting Resources - Guides, Tips & Strategies | TopBetSite"
        description="Comprehensive betting resources including strategy guides, odds explanations, football tips, and responsible gambling information. Free educational content for bettors."
        ogTitle="Betting Resources - Guides, Tips & Strategies"
        ogDescription="Comprehensive betting resources including strategy guides, odds explanations, and expert tips for successful sports betting."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Betting Resources
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Educational guides, expert tips, and essential information to improve your betting knowledge and skills.
            </p>
          </div>

          {/* Main Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {resource.icon}
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    {resource.description}
                  </p>
                  <Link href={resource.link}>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Read Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Guides Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
              Popular Betting Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularGuides.map((guide, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700 hover:text-primary cursor-pointer transition-colors">
                    {guide}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Betting?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Now that you've learned the basics, check out our exclusive welcome offers from top UK bookmakers.
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