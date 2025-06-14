import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, Target, Eye, TrendingUp, Users, Gamepad2, Shield, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function EsportsBettingGuide() {
  const esportsGames = [
    {
      game: "Counter-Strike 2 (CS2)",
      description: "Tactical first-person shooter with round-based gameplay, map control, and economic strategy.",
      betTypes: ["Match Winner", "Map Winner", "Total Rounds", "First Blood", "Pistol Round Winner"],
      keyFactors: ["Team form on specific maps", "Head-to-head records", "Recent roster changes"]
    },
    {
      game: "League of Legends",
      description: "5v5 MOBA with complex meta, champion drafts, and objective-based gameplay.",
      betTypes: ["Match Winner", "Map Winner", "First Blood", "First Tower", "Total Kills"],
      keyFactors: ["Patch changes", "Draft composition", "Regional strength", "Player form"]
    },
    {
      game: "Dota 2",
      description: "Complex MOBA with hero drafting, item builds, and strategic depth.",
      betTypes: ["Match Winner", "Map Winner", "First Blood", "Roshan Kills", "Total Duration"],
      keyFactors: ["Draft phases", "Meta heroes", "Tournament format", "Team chemistry"]
    },
    {
      game: "Valorant",
      description: "Tactical FPS with agent abilities, round-based economy, and map control.",
      betTypes: ["Match Winner", "Map Winner", "Total Rounds", "Pistol Rounds", "Agent Picks"],
      keyFactors: ["Agent composition", "Map pool", "Team coordination", "Individual skill"]
    }
  ];

  const betTypes = [
    {
      type: "Match Winner",
      description: "Simplest bet - pick which team will win the entire match or series.",
      difficulty: "Beginner",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />
    },
    {
      type: "Map/Game Winner", 
      description: "Bet on the winner of individual maps within a best-of series.",
      difficulty: "Beginner",
      icon: <Target className="h-6 w-6 text-blue-500" />
    },
    {
      type: "Handicap Betting",
      description: "Give one team a virtual advantage/disadvantage in maps or rounds.",
      difficulty: "Intermediate",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />
    },
    {
      type: "Total Rounds/Kills",
      description: "Bet on whether total rounds, kills, or duration will be over/under a set number.",
      difficulty: "Intermediate", 
      icon: <Clock className="h-6 w-6 text-purple-500" />
    },
    {
      type: "Live Betting",
      description: "Place bets during matches as odds change based on real-time action.",
      difficulty: "Advanced",
      icon: <Eye className="h-6 w-6 text-red-500" />
    },
    {
      type: "Special Markets",
      description: "First blood, pistol rounds, specific player performances, tournament winners.",
      difficulty: "Advanced",
      icon: <Gamepad2 className="h-6 w-6 text-cyan-500" />
    }
  ];

  const keyFactors = [
    {
      title: "Team Form & Meta",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      description: "Recent performance, adaptation to game updates, and understanding of current strategies."
    },
    {
      title: "Head-to-Head Records",
      icon: <Users className="h-6 w-6 text-secondary" />,
      description: "Historical matchups between teams, especially on specific maps or game modes."
    },
    {
      title: "Tournament Format",
      icon: <Trophy className="h-6 w-6 text-yellow-600" />,
      description: "Single elimination vs double elimination, best-of formats, and bracket positioning."
    },
    {
      title: "Player Conditions",
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      description: "Individual player form, health issues, roster changes, and role adjustments."
    },
    {
      title: "Map Pool & Bans",
      icon: <Target className="h-6 w-6 text-green-600" />,
      description: "Team strengths on specific maps and strategic draft/ban phases."
    },
    {
      title: "Live Conditions",
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      description: "LAN vs online play, time zones, crowd support, and technical setups."
    }
  ];

  const tips = [
    "Start with match winner bets before exploring complex markets",
    "Follow patch notes and meta changes that affect game balance",
    "Research team compositions and player roles thoroughly", 
    "Watch previous matches between the same teams",
    "Consider tournament stakes - teams may save strategies",
    "Set strict bankroll limits and never chase losses",
    "Use multiple betting sites to compare odds",
    "Stay updated with roster changes and transfers"
  ];

  return (
    <>
      <SEOHead 
        title="Complete Esports Betting Guide - CS2, LoL, Dota 2, Valorant | Top Bet Site"
        description="Master esports betting with our comprehensive guide. Learn about odds, bet types, and winning strategies for CS2, League of Legends, Dota 2, and Valorant tournaments."
        ogTitle="Complete Esports Betting Guide - Master Competitive Gaming Bets"
        ogDescription="Learn esports betting fundamentals, understand odds, and discover winning strategies for major tournaments."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Complete Esports Betting Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Master the art of esports betting with our comprehensive guide. From understanding odds to analyzing team performance, 
              learn everything you need to succeed in competitive gaming wagering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/casinos">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                  Find Best Esports Sites
                </Button>
              </Link>
              <Link href="/responsible-gambling">
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                  Responsible Betting
                </Button>
              </Link>
            </div>
          </div>

          {/* What is Esports Betting */}
          <section className="mb-16">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Gamepad2 className="mr-3 h-8 w-8 text-cyan-400" />
                  What is Esports Betting?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-lg leading-relaxed">
                  Esports betting involves wagering on the outcomes of competitive video game tournaments and matches. 
                  Just like traditional sports betting, you can predict winners, scores, and various in-game events across 
                  popular titles like Counter-Strike 2, League of Legends, Dota 2, and Valorant.
                </p>
                <p>
                  The esports industry has exploded in recent years, with global revenues exceeding $1.4 billion and 
                  viewership rivaling traditional sports. Major tournaments offer prize pools in the millions, 
                  attracting the world's best players and creating exciting betting opportunities.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">$1.4B+ Industry</h4>
                    <p className="text-sm">Global esports revenue continues growing rapidly</p>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Users className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">500M+ Viewers</h4>
                    <p className="text-sm">Massive global audience across all platforms</p>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Major Tournaments</h4>
                    <p className="text-sm">Year-round competitions with massive prize pools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Popular Esports Games */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Esports Betting Games</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {esportsGames.map((game, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-cyan-400">{game.game}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-4">
                    <p>{game.description}</p>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Common Bet Types:</h4>
                      <div className="flex flex-wrap gap-2">
                        {game.betTypes.map((bet, i) => (
                          <span key={i} className="bg-purple-600/30 text-purple-300 px-2 py-1 rounded text-sm">
                            {bet}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Key Factors:</h4>
                      <ul className="text-sm space-y-1">
                        {game.keyFactors.map((factor, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Types of Bets */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Types of Esports Bets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {betTypes.map((bet, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">{bet.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{bet.type}</h3>
                    <span className={`inline-block px-2 py-1 rounded text-xs mb-3 ${
                      bet.difficulty === 'Beginner' ? 'bg-green-600/30 text-green-300' :
                      bet.difficulty === 'Intermediate' ? 'bg-yellow-600/30 text-yellow-300' :
                      'bg-red-600/30 text-red-300'
                    }`}>
                      {bet.difficulty}
                    </span>
                    <p className="text-gray-400 text-sm">{bet.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Factors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Factors for Success</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFactors.map((factor, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {factor.icon}
                      <h3 className="text-lg font-semibold text-white ml-3">{factor.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How Odds Work */}
          <section className="mb-16">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">How Esports Odds Work</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  Esports odds work similarly to traditional sports betting. They represent the probability of an outcome 
                  and determine your potential payout. Understanding different odds formats is crucial:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">Decimal Odds (2.50)</h4>
                    <p className="text-sm">Multiply your stake by the odds to calculate total return including your stake.</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">Fractional Odds (3/2)</h4>
                    <p className="text-sm">Shows profit relative to stake. 3/2 means you win £3 for every £2 staked.</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">American Odds (+150)</h4>
                    <p className="text-sm">Positive numbers show profit on $100 stake. Negative shows stake needed for $100 profit.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tips for Beginners */}
          <section className="mb-16">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Shield className="mr-3 h-8 w-8 text-green-400" />
                  Tips for Beginners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-300 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Responsible Betting */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border-red-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Shield className="mr-3 h-8 w-8 text-red-400" />
                  Responsible Betting Advice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-lg">
                  Esports betting should always be entertaining and within your means. Remember these important guidelines:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Only bet money you can afford to lose
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Set time and money limits before you start
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Never chase losses with bigger bets
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Take regular breaks from betting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Seek help if betting becomes a problem
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/responsible-gambling">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Learn More About Responsible Gambling
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-purple-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Esports Betting?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Now that you understand the fundamentals, explore our recommended esports betting sites and 
                  start your journey with responsible, informed wagering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/casinos">
                    <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                      Compare Betting Sites
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                      Read Latest Guides
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}