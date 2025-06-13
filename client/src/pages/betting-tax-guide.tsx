import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";

export default function BettingTaxGuide() {
  return (
    <>
      <SEOHead
        title="Tax on Betting Winnings UK - Complete Guide 2025 | TopBetSite"
        description="Comprehensive guide to UK betting tax laws. Learn about income tax on winnings, record keeping, and when you need to declare betting profits to HMRC."
        ogTitle="Tax on Betting Winnings UK - Complete Guide 2025"
        ogDescription="Complete guide to UK betting tax including when to pay, how to calculate, and record keeping requirements."
      />

      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Tax on Betting Winnings UK
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
              Complete guide to UK tax laws on betting winnings, including when you need to pay tax and how to stay compliant with HMRC.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                  Good News: Most Betting Winnings Are Tax-Free
                </h2>
                <p className="text-green-700 dark:text-green-300 text-lg">
                  In the UK, casual betting winnings are generally NOT subject to income tax. This includes winnings from sports betting, casino games, lottery, and bingo for recreational punters.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  When Betting Winnings Become Taxable
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Professional Gambling</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      If betting is your main source of income or you operate as a professional gambler, winnings are subject to income tax.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Trading Activities</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Systematic betting with business-like approach, regular profits, and sophisticated strategies may be considered trading.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Betting-Related Business</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Income from tipster services, betting systems sales, or gambling-related businesses is always taxable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  HMRC's Tests for Professional Gambling
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  HMRC considers these factors when determining if gambling constitutes a trade:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Indicators of Trading</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• Systematic and organized approach</li>
                      <li>• Regular and substantial profits</li>
                      <li>• Betting is your main income source</li>
                      <li>• Use of sophisticated strategies</li>
                      <li>• Detailed records and analysis</li>
                      <li>• Significant time investment</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Casual Gambling Signs</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• Occasional betting activity</li>
                      <li>• Have other main income sources</li>
                      <li>• Entertainment-focused approach</li>
                      <li>• Irregular winning patterns</li>
                      <li>• Limited time spent betting</li>
                      <li>• Emotional decision making</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Record Keeping Requirements
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">For Casual Bettors</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-2">
                      While not legally required, keeping basic records is recommended:
                    </p>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-1 ml-4">
                      <li>• Date and amount of bets</li>
                      <li>• Winnings and losses</li>
                      <li>• Bookmaker used</li>
                      <li>• Annual profit/loss summary</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">For Professional Gamblers</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-2">
                      Detailed records are essential for tax compliance:
                    </p>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-1 ml-4">
                      <li>• Complete betting transaction history</li>
                      <li>• Business expenses (software, data, etc.)</li>
                      <li>• Bank statements and receipts</li>
                      <li>• Time spent on betting activities</li>
                      <li>• Strategy documentation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Tax Rates and Calculations
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Income Tax Rates (2024/25)</h3>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Personal allowance: £12,570 (tax-free)</li>
                      <li>• Basic rate: 20% (£12,571 - £50,270)</li>
                      <li>• Higher rate: 40% (£50,271 - £125,140)</li>
                      <li>• Additional rate: 45% (over £125,140)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Calculating Taxable Profits</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Taxable betting profits = Total winnings - Total stakes - Allowable expenses
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Allowable Business Expenses
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  If you're considered a professional gambler, you can deduct legitimate business expenses:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Commonly Allowed</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• Statistical databases and software</li>
                      <li>• Professional tipster services</li>
                      <li>• Computers and equipment</li>
                      <li>• Internet and phone costs</li>
                      <li>• Newspapers and racing forms</li>
                      <li>• Travel to betting events</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Not Usually Allowed</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• Personal living expenses</li>
                      <li>• Entertainment costs</li>
                      <li>• Clothing (unless branded/uniform)</li>
                      <li>• General home utilities</li>
                      <li>• Personal vehicle costs</li>
                      <li>• Alcohol and meals (unless business)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Self-Assessment and Reporting
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">When to Register for Self-Assessment</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• If betting profits exceed £1,000 per year</li>
                      <li>• If you're trading professionally</li>
                      <li>• If HMRC requests registration</li>
                      <li>• If you have other self-employment income</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Key Deadlines</h3>
                    <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
                      <li>• Registration: By 5 October following the tax year</li>
                      <li>• Paper returns: By 31 October</li>
                      <li>• Online returns: By 31 January</li>
                      <li>• Tax payment: By 31 January</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                  Special Considerations
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Matched Betting</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Systematic matched betting for profit is likely to be considered trading and subject to income tax.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Poker and Skill Games</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Professional poker players and skilled game players are more likely to be taxed as traders.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Offshore Betting</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      UK tax rules apply to worldwide income, regardless of where you place bets.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Cryptocurrency Betting</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Additional capital gains tax implications may apply to crypto betting winnings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
                  Important Disclaimer
                </h2>
                <p className="text-yellow-700 dark:text-yellow-300">
                  This guide provides general information only and should not be considered professional tax advice. Tax laws are complex and individual circumstances vary. Always consult with a qualified accountant or tax advisor for advice specific to your situation.
                </p>
                <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                    When in doubt, contact HMRC directly or seek professional advice. It's better to be safe than sorry when it comes to tax compliance.
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