import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";

export default function AccumulatorBets() {
  return (
    <>
      <SEOHead
        title="Understanding Accumulator Bets - Complete Guide | TopBetSite"
        description="Learn how accumulator bets work, their advantages and risks, plus strategies for successful acca betting. Complete guide for UK punters."
        ogTitle="Understanding Accumulator Bets - Complete Guide"
        ogDescription="Complete guide to accumulator betting including strategies, tips, and how to maximize your chances of winning."
      />

      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Understanding Accumulator Bets
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
              Learn how accumulator bets work, their potential for big wins, and strategies to improve your chances of success.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  What is an Accumulator Bet?
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  An accumulator (or "acca") combines multiple selections into one bet. All selections must win for the bet to be successful, but the potential returns are much higher than single bets.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Example:</h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    £10 on a 4-fold accumulator with odds of 2/1, 3/1, 4/1, and 5/1 would return £1,440 if all four selections win.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Types of Accumulator Bets
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Double (2 selections)</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Minimum accumulator bet with two selections</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Treble (3 selections)</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Three selections must all win</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">4-fold, 5-fold, 6-fold+</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Higher potential returns but lower probability of winning</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Advantages of Accumulator Bets
                </h2>
                <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                  <li>• <strong>High potential returns</strong> - Small stakes can win large amounts</li>
                  <li>• <strong>Excitement factor</strong> - Following multiple events adds thrill</li>
                  <li>• <strong>Acca bonuses</strong> - Many bookmakers offer bonus payouts on winning accas</li>
                  <li>• <strong>Acca insurance</strong> - Some bookies refund stakes if one selection loses</li>
                  <li>• <strong>Cash out options</strong> - Secure profits before all events finish</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Risks and Disadvantages
                </h2>
                <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                  <li>• <strong>Low win probability</strong> - All selections must win</li>
                  <li>• <strong>One loss ruins everything</strong> - No partial payouts</li>
                  <li>• <strong>Bookmaker edge multiplies</strong> - House advantage compounds</li>
                  <li>• <strong>Emotional betting</strong> - Easy to get carried away with big potential wins</li>
                  <li>• <strong>Research time</strong> - Need to analyze multiple events</li>
                </ul>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Warning: The probability of winning decreases significantly with each additional selection.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Accumulator Betting Strategies
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">1. Keep It Simple</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Stick to 3-5 selections maximum. More selections = lower chances of winning.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">2. Focus on Value</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Each selection should offer value individually, not just look like a "banker."</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">3. Diversify Sports/Markets</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Spread selections across different sports or market types to reduce correlation risk.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">4. Use Acca Insurance</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Take advantage of bookmaker promotions that refund stakes if one selection loses.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">5. Consider Cash Out</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">Don't be afraid to cash out early if you're ahead and unsure about remaining selections.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Common Accumulator Mistakes
                </h2>
                <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                  <li>• Adding low-odds "bankers" that reduce overall value</li>
                  <li>• Including too many correlated events (e.g., all from same league)</li>
                  <li>• Chasing losses with bigger accumulator bets</li>
                  <li>• Not researching each selection thoroughly</li>
                  <li>• Betting with your heart instead of your head</li>
                  <li>• Ignoring cash out opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Popular Accumulator Markets
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Football</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-1 text-sm">
                      <li>• Match winners</li>
                      <li>• Both teams to score</li>
                      <li>• Over/under goals</li>
                      <li>• Correct scores</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Horse Racing</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-1 text-sm">
                      <li>• Win bets</li>
                      <li>• Each-way accumulators</li>
                      <li>• Place accumulators</li>
                      <li>• Daily specials</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}