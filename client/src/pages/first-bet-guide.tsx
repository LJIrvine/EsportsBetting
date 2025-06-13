import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";

export default function FirstBetGuide() {
  return (
    <>
      <SEOHead
        title="How to Place Your First Bet - Complete Beginner's Guide | TopBetSite"
        description="Step-by-step guide for placing your first bet online. Learn about account setup, deposits, bet types, and essential tips for new bettors in the UK."
        ogTitle="How to Place Your First Bet - Complete Beginner's Guide"
        ogDescription="Complete step-by-step guide for placing your first bet online with UK bookmakers. Perfect for beginners."
      />

      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              How to Place Your First Bet
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
              A complete step-by-step guide for beginners to place their first bet safely and confidently with UK bookmakers.
            </p>
          </div>

          {/* Step-by-Step Guide */}
          <div className="space-y-8">
            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Step 1: Choose a Licensed Bookmaker
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    Select a UK-licensed bookmaker from our recommended list. Look for:
                  </p>
                  <ul className="text-neutral-600 dark:text-neutral-300 space-y-2 ml-6">
                    <li>• UK Gambling Commission license</li>
                    <li>• Good welcome bonus offers</li>
                    <li>• Competitive odds</li>
                    <li>• User-friendly mobile app</li>
                    <li>• Positive customer reviews</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Step 2: Create Your Account
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    Registration is straightforward but requires:
                  </p>
                  <ul className="text-neutral-600 dark:text-neutral-300 space-y-2 ml-6">
                    <li>• Valid email address</li>
                    <li>• UK address and postcode</li>
                    <li>• Date of birth (must be 18+)</li>
                    <li>• Phone number</li>
                    <li>• Photo ID for verification</li>
                  </ul>
                  <p className="text-neutral-600 dark:text-neutral-300 mt-4">
                    Most bookmakers require identity verification before you can withdraw winnings.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Step 3: Make Your First Deposit
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    Popular deposit methods include:
                  </p>
                  <ul className="text-neutral-600 dark:text-neutral-300 space-y-2 ml-6">
                    <li>• Debit cards (Visa, Mastercard)</li>
                    <li>• PayPal and other e-wallets</li>
                    <li>• Bank transfers</li>
                    <li>• Apple Pay / Google Pay</li>
                  </ul>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      💡 Tip: Start with a small amount (£10-20) to get familiar with the platform before depositing larger sums.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Step 4: Understand Basic Bet Types
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    Start with these simple bet types:
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Single Bet</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">One selection on one event (e.g., Manchester United to win)</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Over/Under Goals</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">Predict if total goals will be over or under a certain number</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Both Teams to Score</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">Simple yes/no bet on whether both teams will score</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Step 5: Place Your Bet
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <ol className="text-neutral-600 dark:text-neutral-300 space-y-3">
                    <li>1. Browse sports and select an event</li>
                    <li>2. Click on the odds for your chosen outcome</li>
                    <li>3. Enter your stake amount in the bet slip</li>
                    <li>4. Check your potential winnings</li>
                    <li>5. Confirm your bet</li>
                  </ol>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-6">
                    <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                      ⚠️ Remember: Never bet more than you can afford to lose. Set a budget and stick to it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Essential Tips for Beginners
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                    <li>• Start with sports you know well</li>
                    <li>• Keep detailed records of your bets</li>
                    <li>• Shop around for the best odds</li>
                    <li>• Don't chase losses with bigger bets</li>
                    <li>• Take advantage of welcome bonuses</li>
                    <li>• Set deposit and loss limits</li>
                    <li>• Learn about responsible gambling tools</li>
                  </ul>
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