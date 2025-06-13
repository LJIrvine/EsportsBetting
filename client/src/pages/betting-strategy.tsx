import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Shield, Calculator, BookOpen, AlertTriangle } from "lucide-react";

export default function BettingStrategy() {
  const strategies = [
    {
      title: "Value Betting",
      icon: <Target className="h-6 w-6 text-primary" />,
      description: "Identifying bets where the bookmaker's odds are higher than the true probability of an outcome.",
      details: [
        "Research teams, players, and conditions thoroughly",
        "Compare odds across multiple bookmakers",
        "Calculate implied probability vs actual probability",
        "Only bet when you find genuine value"
      ]
    },
    {
      title: "Bankroll Management",
      icon: <Shield className="h-6 w-6 text-secondary" />,
      description: "Managing your betting funds responsibly to survive losing streaks and maximize long-term profits.",
      details: [
        "Never bet more than 1-5% of your bankroll on a single bet",
        "Set strict daily, weekly, and monthly limits",
        "Keep detailed records of all bets",
        "Adjust bet sizes based on bankroll changes"
      ]
    },
    {
      title: "Research & Analysis",
      icon: <BookOpen className="h-6 w-6 text-accent" />,
      description: "Building a systematic approach to analyzing teams, players, and betting markets.",
      details: [
        "Study team form, head-to-head records, and recent performances",
        "Consider injuries, suspensions, and team news",
        "Analyze home/away performance differences",
        "Track weather conditions for outdoor sports"
      ]
    },
    {
      title: "Market Understanding",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      description: "Understanding how betting markets work and where opportunities exist.",
      details: [
        "Learn about market movements and line shopping",
        "Understand the bookmaker's margin (overround)",
        "Identify less efficient markets with more value",
        "Monitor opening lines vs closing lines"
      ]
    }
  ];

  const keyPrinciples = [
    "Bet with your head, not your heart - avoid emotional decisions",
    "Specialize in specific leagues or sports you know well",
    "Never chase losses with bigger bets",
    "Take breaks during losing streaks",
    "Set realistic expectations - most profitable bettors win 54-56% of bets",
    "Keep detailed records to analyze your performance",
    "Shop around for the best odds on every bet",
    "Understand that variance is part of betting"
  ];

  return (
    <>
      <SEOHead 
        title="Betting Strategy Guide - Long-term Success Tips | TopBetSite"
        description="Comprehensive guide to successful betting strategies including value betting, bankroll management, research methods, and market analysis for long-term profitability."
        ogTitle="Betting Strategy Guide - Long-term Success Tips"
        ogDescription="Learn proven betting strategies for long-term success including bankroll management and value betting techniques."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Betting Strategy Guide
            </h1>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Master the fundamentals of successful sports betting with proven strategies for long-term profitability and responsible gambling.
            </p>
          </div>

          {/* Warning Card */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h3>
                <p className="text-amber-700">
                  Betting should always be done responsibly. Never bet money you cannot afford to lose, and remember that no strategy guarantees profits. 
                  These strategies are for educational purposes and can help improve your approach to betting.
                </p>
              </div>
            </div>
          </div>

          {/* Main Strategies */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {strategies.map((strategy, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {strategy.icon}
                    <CardTitle className="text-xl">{strategy.title}</CardTitle>
                  </div>
                  <p className="text-neutral-600">{strategy.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strategy.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Principles */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
              Key Betting Principles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {keyPrinciples.map((principle, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Tips */}
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Advanced Strategy Tips
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Calculator className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Use Kelly Criterion</h3>
                <p className="text-sm opacity-90">
                  Calculate optimal bet sizes based on your edge and bankroll for maximum long-term growth.
                </p>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Track Your Results</h3>
                <p className="text-sm opacity-90">
                  Maintain detailed records to identify your strengths, weaknesses, and most profitable markets.
                </p>
              </div>
              <div>
                <Target className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Specialize & Focus</h3>
                <p className="text-sm opacity-90">
                  Become an expert in specific leagues or bet types rather than trying to bet on everything.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}