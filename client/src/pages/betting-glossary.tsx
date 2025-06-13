import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function BettingGlossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryTerms = [
    { term: "Accumulator", definition: "A bet combining multiple selections. All must win for the bet to succeed, but potential returns are much higher." },
    { term: "Against the Spread (ATS)", definition: "Betting on whether a team will win or lose by more than the point spread." },
    { term: "Ante-Post", definition: "Betting on an event well before it takes place, often with better odds but higher risk." },
    { term: "Arbitrage", definition: "Betting on all possible outcomes of an event across different bookmakers to guarantee profit." },
    { term: "Asian Handicap", definition: "Handicap betting system that eliminates the draw option by giving teams fractional advantages." },
    { term: "Bankroll", definition: "The total amount of money set aside specifically for betting activities." },
    { term: "Banker", definition: "A selection considered very likely to win, often used as the foundation of multiple bets." },
    { term: "Both Teams to Score (BTTS)", definition: "A bet on whether both teams will score at least one goal during the match." },
    { term: "Cash Out", definition: "Option to settle a bet before the event concludes, securing profit or minimizing losses." },
    { term: "Chalk", definition: "The heavily favored team or player in a betting market." },
    { term: "Dead Heat", definition: "When two or more participants tie for a position, affecting payout calculations." },
    { term: "Double", definition: "A bet on two selections, both must win for the bet to be successful." },
    { term: "Each Way (E/W)", definition: "Two bets in one: a win bet and a place bet on the same selection." },
    { term: "Edge", definition: "The advantage a bettor has over the bookmaker in a particular market." },
    { term: "Even Money", definition: "Odds of 1/1 or 2.00, where you win the same amount as your stake. Sometimes written as Evs or Evens" },
    { term: "Favourite", definition: "The selection with the lowest odds, considered most likely to win." },
    { term: "Fixed Odds", definition: "Odds that remain the same from the time the bet is placed until settlement." },
    { term: "Fold", definition: "Each selection in an accumulator bet (e.g., 4-fold = 4 selections)." },
    { term: "Full Cover", definition: "A system bet that includes every possible combination of the selected outcomes." },
    { term: "Going", definition: "Track conditions in horse racing (firm, good, soft, heavy)." },
    { term: "Handicap", definition: "Betting where one selection is given a virtual advantage to level the playing field." },
    { term: "Hedge", definition: "Placing additional bets to reduce risk or guarantee profit regardless of outcome." },
    { term: "In-Play", definition: "Betting on events while they are happening, with odds changing in real-time." },
    { term: "Juice", definition: "The commission or profit margin built into odds by bookmakers." },
    { term: "Kelly Criterion", definition: "Mathematical formula for calculating optimal bet size based on edge and bankroll." },
    { term: "Lay Bet", definition: "Betting against an outcome (acting as the bookmaker), typically on betting exchanges." },
    { term: "Line", definition: "The odds or point spread offered by bookmakers on a particular market." },
    { term: "Lucky 15", definition: "15 bets on 4 selections: 4 singles, 6 doubles, 4 trebles, and 1 four-fold." },
    { term: "Matched Betting", definition: "Using free bets and laying them off to guarantee profit regardless of outcome." },
    { term: "Multiples", definition: "Bets involving more than one selection, such as doubles, trebles, or accumulators." },
    { term: "No Action", definition: "A bet that is cancelled and stakes returned, usually due to event cancellation." },
    { term: "Odds Against", definition: "When potential profit is greater than the stake (e.g., 3/1, 5/2)." },
    { term: "Odds On", definition: "When potential profit is less than the stake (e.g., 1/2, 2/5)." },
    { term: "Over/Under", definition: "Betting on whether a statistic will be above or below a specified number." },
    { term: "Parlay", definition: "American term for accumulator - multiple selections combined into one bet." },
    { term: "Pick'em", definition: "A game where both teams are considered equal, with no point spread." },
    { term: "Place", definition: "Finishing in a specified position (usually top 2-4) rather than winning outright." },
    { term: "Point Spread", definition: "The number of points given to level a contest between two unequal teams." },
    { term: "Price", definition: "Another term for odds offered by bookmakers." },
    { term: "Push", definition: "A tie result where stakes are returned, common in point spread betting." },
    { term: "Return", definition: "Total amount received if bet wins, including original stake and profit." },
    { term: "Roll Over", definition: "Requirement to bet a bonus amount multiple times before withdrawing winnings." },
    { term: "Sharp", definition: "A professional or skilled bettor who consistently finds value in betting markets." },
    { term: "Single", definition: "A bet on one selection only." },
    { term: "Stake", definition: "The amount of money wagered on a bet." },
    { term: "Steam", definition: "Heavy betting action causing rapid odds movement." },
    { term: "System Bet", definition: "Multiple bets that allow some selections to lose while still winning overall." },
    { term: "Tipster", definition: "Someone who provides betting advice and predictions for sporting events." },
    { term: "Treble", definition: "A bet on three selections, all must win for the bet to be successful." },
    { term: "True Odds", definition: "The actual probability of an outcome expressed as odds." },
    { term: "Under", definition: "Betting that a total will be below the bookmaker's specified number." },
    { term: "Underdog", definition: "The selection with higher odds, considered less likely to win." },
    { term: "Unit", definition: "A standard betting amount, typically 1-5% of total bankroll." },
    { term: "Value", definition: "When the odds offered are higher than the true probability of the outcome." },
    { term: "Vigorish (Vig)", definition: "The bookmaker's commission or profit margin built into the odds." },
    { term: "Void", definition: "A cancelled bet where stakes are returned to the bettor." },
    { term: "Wager", definition: "Another term for a bet or the act of betting." },
    { term: "Yankee", definition: "11 bets on 4 selections: 6 doubles, 4 trebles, and 1 four-fold accumulator." }
  ];

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedTerms = filteredTerms.reduce((groups, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(term);
    return groups;
  }, {} as Record<string, typeof glossaryTerms>);

  return (
    <>
      <SEOHead 
        title="Betting Glossary - A-Z of Betting Terms | TopBetSite"
        description="Comprehensive betting glossary with definitions of over 50 betting terms from accumulator to yankee. Essential reference for beginners and experienced bettors."
        ogTitle="Betting Glossary - A-Z of Betting Terms"
        ogDescription="Complete A-Z glossary of betting terms and definitions for sports betting beginners and experts."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Betting Glossary
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto">
              A comprehensive A-Z reference of betting terms and definitions to help you understand the language of sports betting.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-primary focus:ring-primary dark:bg-gray-600 dark:text-neutral-200"
              />
            </div>
          </div>

          {/* Terms Count */}
          <div className="text-center mb-8">
            <p className="text-neutral-600 dark:text-neutral-300">
              Showing {filteredTerms.length} of {glossaryTerms.length} terms
            </p>
          </div>

          {/* Glossary Terms */}
          <div className="space-y-8">
            {Object.keys(groupedTerms).sort().map(letter => (
              <div key={letter}>
                <h2 className="text-2xl font-bold text-primary mb-4 border-b border-primary pb-2">
                  {letter}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {groupedTerms[letter].map((item, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow dark:bg-gray-700">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center space-x-2 dark:text-neutral-200">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <span>{item.term}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-600 dark:text-neutral-300">{item.definition}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-600 mb-2">No terms found</h3>
              <p className="text-neutral-500">Try searching for a different term or browse all available definitions.</p>
            </div>
          )}

          {/* Quick Reference */}
          <div className="mt-12 bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">
              Most Common Betting Terms
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-primary">Bet Types</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                  <li>• Single - One selection</li>
                  <li>• Double - Two selections</li>
                  <li>• Treble - Three selections</li>
                  <li>• Accumulator - 4+ selections</li>
                  <li>• Each Way - Win + Place bet</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-primary">Key Concepts</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                  <li>• Odds - Price of a bet</li>
                  <li>• Stake - Amount wagered</li>
                  <li>• Value - Good betting opportunity</li>
                  <li>• Bankroll - Total betting funds</li>
                  <li>• Edge - Advantage over bookmaker</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-primary">Markets</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                  <li>• Match Result - Win/Draw/Win</li>
                  <li>• Over/Under - Total goals/points</li>
                  <li>• Handicap - Virtual advantage</li>
                  <li>• Both Teams to Score</li>
                  <li>• Correct Score</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}