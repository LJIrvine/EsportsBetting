import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Clock, Users, TrendingUp, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function CS2BettingGuide() {
  const maps = [
    { name: "Dust2", style: "Classic", description: "Long angles, aim duels, CT-sided" },
    { name: "Mirage", style: "Balanced", description: "Mid control crucial, skill-based" },
    { name: "Inferno", style: "Close quarters", description: "Utility-heavy, team coordination" },
    { name: "Ancient", style: "Tactical", description: "Complex rotations, strategic depth" },
    { name: "Anubis", style: "Modern", description: "Newer map, evolving meta" },
    { name: "Vertigo", style: "Unique", description: "Vertical gameplay, positioning key" },
    { name: "Nuke", style: "CT-sided", description: "Strong defensive advantage" }
  ];

  const betTypes = [
    { type: "Match Winner", description: "Pick the team to win the series (Bo1/Bo3/Bo5)" },
    { type: "Map Winner", description: "Winner of individual maps within a series" },
    { type: "Handicap", description: "Give/receive map advantage (+1.5/-1.5 maps)" },
    { type: "Total Maps", description: "Over/under total maps played in series" },
    { type: "Total Rounds", description: "Over/under rounds in a single map" },
    { type: "First Blood", description: "Which team gets the first kill" },
    { type: "Pistol Round", description: "Winner of pistol rounds (1st and 16th)" },
    { type: "Map Veto", description: "Which maps will be played/banned" }
  ];

  const keyFactors = [
    {
      title: "Map Pool",
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      description: "Team performance varies dramatically by map. Check recent results on specific maps."
    },
    {
      title: "Recent Form",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      description: "Look at last 10 matches, considering opposition strength and map performance."
    },
    {
      title: "Head-to-Head",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      description: "Historical matchups between teams, especially on specific maps."
    },
    {
      title: "Tournament Context",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      description: "Elimination matches vs group stage, prize pool importance, team motivation."
    },
    {
      title: "Player Form",
      icon: <Target className="h-6 w-6 text-purple-500" />,
      description: "Star player performance, recent roster changes, individual matchups."
    },
    {
      title: "Event Format",
      icon: <Clock className="h-6 w-6 text-cyan-500" />,
      description: "LAN vs online, best-of format, time between matches for preparation."
    }
  ];

  return (
    <>
      <SEOHead 
        title="CS2 Betting Guide - Counter-Strike 2 Betting Tips & Strategies | Top Bet Site"
        description="Master CS2 betting with our comprehensive guide. Learn map analysis, team form evaluation, and winning strategies for Counter-Strike 2 tournaments and matches."
        ogTitle="CS2 Betting Guide - Counter-Strike 2 Betting Strategies"
        ogDescription="Learn CS2 betting fundamentals, map analysis, and expert strategies for Counter-Strike 2 wagering."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-orange-900">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              CS2 Betting Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Master Counter-Strike 2 betting with tactical insights, map analysis, and proven strategies for tournament wagering.
            </p>
            <Link href="/casinos">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                Find Best CS2 Betting Sites
              </Button>
            </Link>
          </div>

          {/* What Makes CS2 Unique */}
          <section className="mb-16">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  What Makes CS2 Betting Unique?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-lg">
                  Counter-Strike 2 is the world's premier tactical FPS, where strategy, teamwork, and individual skill combine. 
                  Unlike other esports, CS2 matches are heavily influenced by map selection, economic management, and tactical preparation.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <MapPin className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Map-Dependent</h4>
                    <p className="text-sm">Team performance varies dramatically by map choice</p>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Clock className="h-12 w-12 text-red-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Round-Based</h4>
                    <p className="text-sm">Economy and momentum shifts affect entire matches</p>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Target className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Tactical Depth</h4>
                    <p className="text-sm">Strategy and preparation often trump raw skill</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Map Pool Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Active Duty Map Pool</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {maps.map((map, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-orange-400 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-orange-400 mb-2">{map.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{map.style}</p>
                    <p className="text-sm text-gray-300">{map.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CS2 Bet Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">CS2 Bet Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {betTypes.map((bet, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">{bet.type}</h3>
                    <p className="text-gray-300">{bet.description}</p>
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

          {/* Pro Tips */}
          <section className="mb-16">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">Pro CS2 Betting Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Map Veto Analysis</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Study each team's preferred maps and ban patterns</li>
                      <li>• Consider recent form on specific maps</li>
                      <li>• Look for map pool advantages before matches</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Live Betting Strategy</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Watch for momentum shifts after pistol rounds</li>
                      <li>• Monitor economic states and force-buy situations</li>
                      <li>• Consider side switches at halftime</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Tournament Context</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Major championships carry extra pressure</li>
                      <li>• Lower-tier tournaments may see experimental lineups</li>
                      <li>• Group stage vs playoff mentality differs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Team Dynamics</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• New roster changes need time to gel</li>
                      <li>• In-game leader impact on tactical execution</li>
                      <li>• Star player form can swing entire matches</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-orange-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Bet on CS2?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Apply these strategies to your CS2 betting and start making informed decisions on Counter-Strike 2 matches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/casinos">
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      Compare Betting Sites
                    </Button>
                  </Link>
                  <Link href="/esports-betting-guide">
                    <Button size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                      Back to Main Guide
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