import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";

export default function LiveBettingStrategies() {
  return (
    <>
      <SEOHead
        title="Live Betting Strategies - In-Play Betting Guide | TopBetSite"
        description="Master live betting with proven strategies for in-play wagering. Learn timing, market analysis, and risk management for successful live betting."
        ogTitle="Live Betting Strategies - In-Play Betting Guide"
        ogDescription="Comprehensive guide to live betting strategies including timing, market analysis, and proven techniques for in-play success."
      />

      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Live Betting Strategies
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
              Master the art of in-play betting with proven strategies, timing techniques, and risk management approaches.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  What is Live Betting?
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  Live betting (also called in-play betting) allows you to place bets on sporting events while they're happening. Odds change continuously based on the action, creating opportunities for savvy bettors.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Advantages:</h3>
                  <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• React to game developments in real-time</li>
                    <li>• Take advantage of momentum shifts</li>
                    <li>• Hedge existing pre-match bets</li>
                    <li>• Find value when odds overreact</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Core Live Betting Strategies
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">1. Momentum Trading</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-2">
                      Back teams that are playing well but haven't scored yet, or oppose teams that have just conceded.
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Best for: Football, basketball, tennis
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">2. Overreaction Strategy</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-2">
                      Bet against dramatic odds movements when markets overreact to single events.
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Best for: All sports, particularly football red cards/goals
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">3. Statistical Reversion</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-2">
                      Back outcomes that are statistically likely based on historical patterns.
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Best for: Over/under markets, tennis games
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Sport-Specific Strategies
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Football Live Betting</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• <strong>Goals markets:</strong> Back under 2.5 goals after early goal</li>
                      <li>• <strong>Red card strategy:</strong> Back draw or underdog after red card</li>
                      <li>• <strong>Half-time strategy:</strong> Bet on team trailing at half-time</li>
                      <li>• <strong>Corner betting:</strong> Track corner patterns for value</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Tennis Live Betting</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• <strong>Break point opportunities:</strong> Back server after saving break points</li>
                      <li>• <strong>Momentum shifts:</strong> Bet on player winning multiple games in a row</li>
                      <li>• <strong>Set betting:</strong> Back favorite after losing first set</li>
                      <li>• <strong>Game totals:</strong> Adjust based on playing style and conditions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Basketball Live Betting</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• <strong>Quarter patterns:</strong> Track team performance by quarter</li>
                      <li>• <strong>Foul trouble:</strong> Bet against teams with key players in foul trouble</li>
                      <li>• <strong>Shooting streaks:</strong> Fade teams on unsustainable hot streaks</li>
                      <li>• <strong>Pace changes:</strong> Adjust totals based on game pace</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Timing Your Live Bets
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Early Game (0-20 minutes)</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Look for overreactions to early events. Markets often swing too far based on limited information.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Mid-Game (20-60 minutes)</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Best time for momentum-based bets. Patterns become clearer but odds still offer value.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Late Game (60+ minutes)</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Focus on specific outcomes. Markets become more efficient, so look for precise value spots.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Risk Management in Live Betting
                </h2>
                <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                  <li>• <strong>Set strict loss limits</strong> - Easy to chase losses in fast-moving markets</li>
                  <li>• <strong>Use smaller stakes</strong> - Higher risk requires lower bet sizes</li>
                  <li>• <strong>Don't bet every game</strong> - Wait for clear value opportunities</li>
                  <li>• <strong>Watch the games</strong> - Visual information gives you an edge</li>
                  <li>• <strong>Keep records</strong> - Track which strategies work for you</li>
                  <li>• <strong>Use cash out wisely</strong> - Secure profits when appropriate</li>
                </ul>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Warning: Live betting can be addictive due to constant action. Set time limits and stick to them.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Tools and Resources
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Essential Tools</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-1">
                      <li>• Live streaming platforms</li>
                      <li>• Real-time statistics feeds</li>
                      <li>• Multiple bookmaker accounts</li>
                      <li>• Odds comparison tools</li>
                      <li>• Mobile betting apps</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Information Sources</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-1">
                      <li>• Live match commentary</li>
                      <li>• Social media updates</li>
                      <li>• Team news feeds</li>
                      <li>• Weather conditions</li>
                      <li>• Injury reports</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Common Live Betting Mistakes
                </h2>
                <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                  <li>• Betting without watching the game</li>
                  <li>• Chasing losses with bigger stakes</li>
                  <li>• Not having a clear strategy</li>
                  <li>• Ignoring bankroll management</li>
                  <li>• Following crowd sentiment</li>
                  <li>• Betting on every game available</li>
                  <li>• Not using multiple bookmakers</li>
                  <li>• Emotional decision making</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}