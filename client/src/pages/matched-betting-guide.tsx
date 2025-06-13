import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";

export default function MatchedBettingGuide() {
  return (
    <>
      <SEOHead
        title="Matched Betting Explained - Risk-Free Profit Guide | TopBetSite"
        description="Complete guide to matched betting in the UK. Learn how to make guaranteed profits from bookmaker free bets with step-by-step instructions and examples."
        ogTitle="Matched Betting Explained - Risk-Free Profit Guide"
        ogDescription="Learn matched betting techniques to extract guaranteed profits from free bet offers with minimal risk."
      />

      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Matched Betting Explained
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
              Learn how to make guaranteed profits from bookmaker promotions using matched betting techniques with minimal risk.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  What is Matched Betting?
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  Matched betting is a technique that uses free bet promotions from bookmakers to guarantee a profit regardless of the outcome of sporting events. It works by placing opposing bets (back and lay) to cover all possible results.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Principle:</h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    By backing a result with a bookmaker and laying the same result on a betting exchange, you can eliminate risk and extract profit from free bet offers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  How Matched Betting Works
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Step 1: Qualifying Bet</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Place a qualifying bet with a bookmaker to unlock their free bet offer. Simultaneously lay the same bet on an exchange to minimize loss.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Step 2: Free Bet Extraction</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Use the free bet on high odds selections and lay the same bet on an exchange to guarantee profit regardless of outcome.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Step 3: Profit Realization</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Withdraw profits from both the bookmaker and exchange. Typical profit is 70-80% of the free bet value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Essential Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Accounts Needed</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• Multiple bookmaker accounts</li>
                      <li>• Betting exchange account (Betfair/Smarkets)</li>
                      <li>• Matched betting service (optional)</li>
                      <li>• Separate email addresses</li>
                      <li>• Bank account for deposits</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Tools and Skills</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• Calculator for matched betting</li>
                      <li>• Spreadsheet for tracking</li>
                      <li>• Basic understanding of odds</li>
                      <li>• Attention to detail</li>
                      <li>• Time to dedicate to offers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Step-by-Step Example
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Scenario: £20 Free Bet Offer</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                      Bookmaker offers £20 free bet when you place £20 qualifying bet
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Qualifying Bet Phase:</h4>
                      <ul className="text-neutral-600 dark:text-neutral-300 text-sm space-y-1 ml-4">
                        <li>• Back Manchester United at 2.0 odds with £20 (Bookmaker)</li>
                        <li>• Lay Manchester United at 2.1 odds with £19.05 (Exchange)</li>
                        <li>• Small qualifying loss: ~£1</li>
                        <li>• Receive £20 free bet</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Free Bet Extraction:</h4>
                      <ul className="text-neutral-600 dark:text-neutral-300 text-sm space-y-1 ml-4">
                        <li>• Use £20 free bet on Liverpool at 5.0 odds (Bookmaker)</li>
                        <li>• Lay Liverpool at 5.2 odds with £19.23 (Exchange)</li>
                        <li>• Guaranteed profit: ~£15-16</li>
                        <li>• Net profit after qualifying loss: ~£14-15</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Types of Matched Betting Offers
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Welcome Offers</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      New customer free bet offers - typically the most profitable with £10-50 free bets.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Reload Offers</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Ongoing promotions for existing customers - smaller but regular profit opportunities.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Refund Offers</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Money-back specials where bookmakers refund losing bets under certain conditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Casino Offers</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Free spins and casino bonuses that can be converted to cash using low-risk strategies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Profit Potential and Timeline
                </h2>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Realistic Expectations:</h3>
                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                      <li>• First month: £300-500 from welcome offers</li>
                      <li>• Ongoing monthly: £100-300 from reload offers</li>
                      <li>• Time commitment: 1-2 hours per day initially</li>
                      <li>• ROI: Very high on free bet value (70-80%)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Profit Decline Over Time</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Most profit comes from new customer offers. Once you've completed all major welcome offers, ongoing profits decrease significantly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Risks and Challenges
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Account Restrictions</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Bookmakers may limit or close profitable accounts. This is the biggest long-term challenge.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Human Error</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Calculation mistakes or placing wrong bets can lead to significant losses.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Market Changes</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Odds can change between placing back and lay bets, affecting profitability.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Tax Implications</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Systematic matched betting may be considered trading income subject to tax.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Best Practices and Tips
                </h2>
                <div className="space-y-3">
                  <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                    <li>• <strong>Start small:</strong> Begin with low-stakes offers to learn the process</li>
                    <li>• <strong>Double-check calculations:</strong> Use matched betting calculators for accuracy</li>
                    <li>• <strong>Keep detailed records:</strong> Track all bets, profits, and losses</li>
                    <li>• <strong>Act quickly:</strong> Complete offers promptly before terms change</li>
                    <li>• <strong>Read terms carefully:</strong> Understand wagering requirements and restrictions</li>
                    <li>• <strong>Vary your betting patterns:</strong> Avoid looking too obvious to bookmakers</li>
                    <li>• <strong>Use multiple devices/locations:</strong> Don't always bet from the same IP address</li>
                    <li>• <strong>Cash out regularly:</strong> Don't leave large balances in bookmaker accounts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Common Mistakes to Avoid
                </h2>
                <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                  <li>• Placing bets before calculating lay stakes</li>
                  <li>• Using the wrong odds in calculations</li>
                  <li>• Forgetting about exchange commission</li>
                  <li>• Not reading bonus terms and conditions</li>
                  <li>• Betting on markets with poor liquidity</li>
                  <li>• Using the same betting patterns repeatedly</li>
                  <li>• Chasing losses with riskier bets</li>
                  <li>• Not keeping proper records for tax purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
                  Important Disclaimers
                </h2>
                <div className="space-y-3">
                  <p className="text-yellow-700 dark:text-yellow-300">
                    • Matched betting profits may be subject to income tax if conducted systematically
                  </p>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    • Bookmakers actively restrict profitable customers
                  </p>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    • Past performance doesn't guarantee future results
                  </p>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    • Always gamble responsibly and within your means
                  </p>
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