import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Clock, Users, TrendingUp, Zap } from "lucide-react";
import { Link } from "wouter";

export default function LoLBettingGuide() {
  const roles = [
    { name: "Top Lane", style: "Tank/Fighter", description: "Frontline initiators and split pushers" },
    { name: "Jungle", style: "Ganker", description: "Map control and objective securing" },
    { name: "Mid Lane", style: "Carry", description: "High damage dealers and roamers" },
    { name: "ADC", style: "Marksman", description: "Sustained damage in team fights" },
    { name: "Support", style: "Utility", description: "Vision control and team enablers" }
  ];

  const betTypes = [
    { type: "Match Winner", description: "Pick the team to win the series (Bo1/Bo3/Bo5)" },
    { type: "Map Winner", description: "Winner of individual games within a series" },
    { type: "Handicap", description: "Give/receive game advantage (+1.5/-1.5 games)" },
    { type: "Total Games", description: "Over/under total games played in series" },
    { type: "First Blood", description: "Which team gets the first kill" },
    { type: "First Tower", description: "Team to destroy the first tower" },
    { type: "First Baron/Dragon", description: "Team to secure first major objective" },
    { type: "Total Kills", description: "Over/under total kills in a game" }
  ];

  const keyFactors = [
    {
      title: "Patch Meta",
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      description: "Understanding current champion strength and item changes is crucial for betting success."
    },
    {
      title: "Draft Phase",
      icon: <Target className="h-6 w-6 text-purple-500" />,
      description: "Team composition and champion synergies often determine game outcomes."
    },
    {
      title: "Regional Strength",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      description: "Some regions excel in different metas and playstyles - factor this into international events."
    },
    {
      title: "Player Form",
      icon: <Users className="h-6 w-6 text-green-500" />,
      description: "Individual player performance, especially carries, can swing entire series."
    },
    {
      title: "Side Selection",
      icon: <Zap className="h-6 w-6 text-cyan-500" />,
      description: "Blue side advantage in draft phase and red side late game scaling considerations."
    },
    {
      title: "Tournament Context",
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      description: "Group stage vs knockout rounds, and team preparation time between matches."
    }
  ];

  return (
    <>
      <SEOHead 
        title="League of Legends Betting Guide - LoL Betting Tips & Strategies | Top Bet Site"
        description="Master LoL betting with our comprehensive guide. Learn draft analysis, meta understanding, and winning strategies for League of Legends tournaments and matches."
        ogTitle="League of Legends Betting Guide - LoL Betting Strategies"
        ogDescription="Learn LoL betting fundamentals, draft analysis, and expert strategies for League of Legends wagering."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              League of Legends Betting Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Master LoL betting with strategic insights into draft phases, meta analysis, and champion compositions for tournament success.
            </p>
            <Link href="/casinos">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Find Best LoL Betting Sites
              </Button>
            </Link>
          </div>

          {/* What Makes LoL Unique */}
          <section className="mb-16">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  What Makes LoL Betting Unique?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-lg">
                  League of Legends is a complex MOBA where strategic depth meets mechanical skill. Unlike other esports, 
                  LoL matches are heavily influenced by draft phases, meta shifts, and team coordination around objectives.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Target className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Draft Strategy</h4>
                    <p className="text-sm">Champion selection often determines match outcome</p>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Meta Evolution</h4>
                    <p className="text-sm">Patches regularly shift champion and strategy viability</p>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Users className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Team Coordination</h4>
                    <p className="text-sm">Objective control and team fighting are paramount</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Role Breakdown */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Understanding Roles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((role, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-400 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-blue-400 mb-2">{role.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{role.style}</p>
                    <p className="text-sm text-gray-300">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* LoL Bet Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">LoL Bet Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {betTypes.map((bet, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">{bet.type}</h3>
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
                <CardTitle className="text-3xl font-bold text-white mb-4">Pro LoL Betting Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Draft Phase Analysis</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Monitor champion pick/ban rates in current meta</li>
                      <li>• Consider team composition synergies and win conditions</li>
                      <li>• Factor in player champion pools and comfort picks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Meta Understanding</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Stay updated on patch changes and item reworks</li>
                      <li>• Track regional meta differences and adaptations</li>
                      <li>• Consider scaling vs early game team compositions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Live Betting Strategy</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Watch for early game leads and objective control</li>
                      <li>• Monitor team fight performance and positioning</li>
                      <li>• Consider late game scaling potential of team comps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Regional Analysis</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• LCK known for macro play and late game scaling</li>
                      <li>• LPL aggressive early game and team fighting</li>
                      <li>• LEC creative strategies and flexibility</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Bet on LoL?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Apply these strategies to your League of Legends betting and start making informed decisions on tournament matches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/casinos">
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                      Compare Betting Sites
                    </Button>
                  </Link>
                  <Link href="/esports-betting-guide">
                    <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
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