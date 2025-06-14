import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Target, Info } from "lucide-react";

// Odds conversion functions
function fractionalToDecimal(numerator: number, denominator: number): number {
  return (numerator / denominator) + 1;
}

function decimalToFractional(decimal: number): { numerator: number; denominator: number } {
  const fraction = decimal - 1;
  
  // Handle edge cases
  if (fraction <= 0) return { numerator: 0, denominator: 1 };
  if (fraction >= 100) return { numerator: Math.round(fraction), denominator: 1 };
  
  // Use a more precise approach with limited precision
  const precision = 1000000; // Limit precision to avoid huge numbers
  let numerator = Math.round(fraction * precision);
  let denominator = precision;
  
  // Simplify fraction using GCD
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(numerator, denominator);
  
  numerator = numerator / divisor;
  denominator = denominator / divisor;
  
  // If numbers are still too large, approximate with simpler fraction
  if (numerator > 10000 || denominator > 10000) {
    const ratio = fraction;
    if (ratio < 1) {
      return { numerator: 1, denominator: Math.round(1 / ratio) };
    } else {
      return { numerator: Math.round(ratio), denominator: 1 };
    }
  }
  
  return { numerator, denominator };
}

function decimalToMoneyline(decimal: number): number {
  if (decimal >= 2.0) {
    return Math.round((decimal - 1) * 100);
  } else {
    return Math.round(-100 / (decimal - 1));
  }
}

function moneylineToDecimal(moneyline: number): number {
  if (moneyline > 0) {
    return (moneyline / 100) + 1;
  } else {
    return (100 / Math.abs(moneyline)) + 1;
  }
}

function parseFractional(fractional: string): { numerator: number; denominator: number } | null {
  const parts = fractional.split('/');
  if (parts.length !== 2) return null;
  
  const numerator = parseInt(parts[0]);
  const denominator = parseInt(parts[1]);
  
  if (isNaN(numerator) || isNaN(denominator) || denominator === 0) return null;
  
  return { numerator, denominator };
}

export default function UnderstandingOdds() {
  const [inputType, setInputType] = useState<'fractional' | 'decimal' | 'moneyline'>('decimal');
  const [inputValue, setInputValue] = useState('');
  const [convertedOdds, setConvertedOdds] = useState<{
    fractional: string;
    decimal: string;
    moneyline: string;
    probability: string;
  } | null>(null);

  const handleConvert = () => {
    try {
      let decimalOdds: number;

      if (inputType === 'decimal') {
        decimalOdds = parseFloat(inputValue);
        if (isNaN(decimalOdds) || decimalOdds <= 1) throw new Error('Invalid decimal odds');
      } else if (inputType === 'fractional') {
        const fraction = parseFractional(inputValue);
        if (!fraction) throw new Error('Invalid fractional odds');
        decimalOdds = fractionalToDecimal(fraction.numerator, fraction.denominator);
      } else if (inputType === 'moneyline') {
        const moneyline = parseInt(inputValue);
        if (isNaN(moneyline) || moneyline === 0 || (moneyline > -100 && moneyline < 100)) {
          throw new Error('Invalid moneyline odds');
        }
        decimalOdds = moneylineToDecimal(moneyline);
      } else {
        throw new Error('Invalid input type');
      }

      // Convert to all formats
      const fraction = decimalToFractional(decimalOdds);
      const moneyline = decimalToMoneyline(decimalOdds);
      const probability = ((1 / decimalOdds) * 100).toFixed(2);

      setConvertedOdds({
        fractional: `${fraction.numerator}/${fraction.denominator}`,
        decimal: decimalOdds.toFixed(2),
        moneyline: moneyline > 0 ? `+${moneyline}` : moneyline.toString(),
        probability: `${probability}%`
      });
    } catch (error) {
      setConvertedOdds(null);
      alert('Please enter valid odds in the selected format');
    }
  };

  const getInputPlaceholder = () => {
    switch (inputType) {
      case 'fractional': return 'e.g., 5/1 or 2/5';
      case 'decimal': return 'e.g., 6.00 or 1.40';
      case 'moneyline': return 'e.g., +500 or -250';
      default: return '';
    }
  };

  const oddsExamples = [
    {
      type: "Fractional",
      format: "5/1",
      description: "For every £1 you bet, you win £5 profit plus your £1 stake back",
      totalReturn: "£6 total return on £1 bet",
      probability: "16.67%"
    },
    {
      type: "Decimal",
      format: "6.00",
      description: "Your total return including stake. Multiply your stake by 6.00",
      totalReturn: "£6 total return on £1 bet",
      probability: "16.67%"
    },
    {
      type: "Moneyline",
      format: "+500",
      description: "American format. Positive numbers show profit on £100 bet",
      totalReturn: "£500 profit on £100 bet",
      probability: "16.67%"
    }
  ];

  const calculations = [
    {
      title: "Implied Probability",
      formula: "1 ÷ Decimal Odds × 100",
      example: "1 ÷ 2.50 × 100 = 40%",
      description: "Shows the bookmaker's assessment of likelihood"
    },
    {
      title: "Potential Profit",
      formula: "(Stake × Decimal Odds) - Stake",
      example: "(£10 × 2.50) - £10 = £15 profit",
      description: "Calculate your profit before placing the bet"
    },
    {
      title: "True Odds",
      formula: "100 ÷ Your Probability %",
      example: "100 ÷ 50% = 2.00 decimal odds",
      description: "Convert your assessment into decimal odds"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Understanding Betting Odds - Complete Guide | TopBetSite"
        description="Comprehensive guide to understanding fractional, decimal, and moneyline betting odds. Learn to calculate probability, potential profits, and find value bets."
        ogTitle="Understanding Betting Odds - Complete Guide"
        ogDescription="Master betting odds with our complete guide covering fractional, decimal, and moneyline formats plus probability calculations."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Understanding Betting Odds
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto">
              Master the three main odds formats used by bookmakers and learn to calculate probability and potential returns.
            </p>
          </div>

          {/* Odds Format Comparison */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {oddsExamples.map((odds, index) => (
              <Card key={index} className="text-center dark:bg-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{odds.type} Odds</CardTitle>
                  <div className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">{odds.format}</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-neutral-600 dark:text-neutral-300">{odds.description}</p>
                  <div className="bg-neutral-50 dark:bg-gray-600 p-3 rounded">
                    <p className="font-semibold text-secondary">{odds.totalReturn}</p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Implied Probability: {odds.probability}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Converting Between Formats */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">
              Converting Between Odds Formats
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-neutral-50 dark:bg-gray-600 rounded-lg">
                <h3 className="font-semibold mb-2 dark:text-neutral-200">Fractional to Decimal</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">5/1 → (5÷1) + 1 = 6.00</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Divide fraction, add 1</p>
              </div>
              <div className="text-center p-4 bg-neutral-50 dark:bg-gray-600 rounded-lg">
                <h3 className="font-semibold mb-2 dark:text-neutral-200">Decimal to Fractional</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">6.00 → 6.00-1 = 5/1</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Subtract 1, convert to fraction</p>
              </div>
              <div className="text-center p-4 bg-neutral-50 dark:bg-gray-600 rounded-lg">
                <h3 className="font-semibold mb-2 dark:text-neutral-200">Decimal to Moneyline</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">6.00 → (6.00-1) × 100 = +500</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Subtract 1, multiply by 100</p>
              </div>
              <div className="text-center p-4 bg-neutral-50 dark:bg-gray-600 rounded-lg">
                <h3 className="font-semibold mb-2 dark:text-neutral-200">Moneyline to Decimal</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">+500 → (500÷100) + 1 = 6.00</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Divide by 100, add 1</p>
              </div>
            </div>
          </div>

          {/* Interactive Odds Converter */}
          <Card className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-blue-800 dark:text-blue-300 flex items-center justify-center space-x-2">
                <Calculator className="h-6 w-6" />
                <span>Interactive Odds Converter</span>
              </CardTitle>
              <p className="text-center text-blue-600 dark:text-blue-400">
                Convert between fractional, decimal, and moneyline odds formats instantly
              </p>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto space-y-6">
                {/* Input Type Selection */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                    Select Input Format:
                  </Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={inputType === 'fractional' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setInputType('fractional')}
                      className={inputType === 'fractional' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                    >
                      Fractional
                    </Button>
                    <Button
                      variant={inputType === 'decimal' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setInputType('decimal')}
                      className={inputType === 'decimal' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                    >
                      Decimal
                    </Button>
                    <Button
                      variant={inputType === 'moneyline' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setInputType('moneyline')}
                      className={inputType === 'moneyline' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                    >
                      Moneyline
                    </Button>
                  </div>
                </div>

                {/* Odds Input */}
                <div>
                  <Label htmlFor="odds-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Enter {inputType.charAt(0).toUpperCase() + inputType.slice(1)} Odds:
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      id="odds-input"
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={getInputPlaceholder()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleConvert}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                    >
                      Convert
                    </Button>
                  </div>
                </div>

                {/* Conversion Results */}
                {convertedOdds && (
                  <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-700">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                      Conversion Results:
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <p className="font-medium text-gray-600 dark:text-gray-300">Fractional</p>
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{convertedOdds.fractional}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <p className="font-medium text-gray-600 dark:text-gray-300">Decimal</p>
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{convertedOdds.decimal}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <p className="font-medium text-gray-600 dark:text-gray-300">Moneyline</p>
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{convertedOdds.moneyline}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded">
                        <p className="font-medium text-gray-600 dark:text-gray-300">Probability</p>
                        <p className="text-lg font-bold text-green-600 dark:text-green-400">{convertedOdds.probability}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Usage Instructions */}
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center space-y-1">
                  <p>• Fractional: Enter as "5/1" or "2/5"</p>
                  <p>• Decimal: Enter as "6.00" or "1.40"</p>
                  <p>• Moneyline: Enter as "+500" or "-250"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Calculations */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {calculations.map((calc, index) => (
              <Card key={index} className="dark:bg-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg dark:text-neutral-200">{calc.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-neutral-50 dark:bg-gray-600 p-3 rounded mb-3">
                    <p className="font-mono text-sm font-semibold dark:text-neutral-200">{calc.formula}</p>
                  </div>
                  <p className="text-secondary font-semibold mb-2">{calc.example}</p>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">{calc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bookmaker Margin */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Info className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Understanding Bookmaker Margin</h3>
                <p className="text-amber-700 dark:text-amber-200 mb-3">
                  Bookmakers build in a profit margin (overround) by offering odds slightly lower than the true probability. 
                  This is how they guarantee long-term profit regardless of outcomes.
                </p>
                <div className="bg-white dark:bg-gray-600 p-3 rounded border dark:border-gray-500">
                  <p className="text-sm font-semibold mb-1 dark:text-neutral-200">Example: Football Match</p>
                  <p className="text-sm dark:text-neutral-300">Team A: 2.10 (47.6%) | Draw: 3.40 (29.4%) | Team B: 3.60 (27.8%)</p>
                  <p className="text-sm mt-1 dark:text-neutral-300">Total probability: 104.8% (4.8% is the bookmaker's margin)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Finding Value */}
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Finding Value in Betting Odds
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  What is Value?
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Value exists when the bookmaker's odds are higher than the true probability of an outcome. 
                  For example, if you believe a team has a 60% chance of winning, but the odds imply only 50%, that's value.
                </p>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="text-sm font-semibold">Value Formula:</p>
                  <p className="text-sm">Value = (Your Probability × Decimal Odds) - 1</p>
                  <p className="text-xs mt-1">Positive result = Value bet</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Finding Value Bets
                </h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>• Research teams thoroughly before forming opinions</li>
                  <li>• Compare odds across multiple bookmakers</li>
                  <li>• Look for markets bookmakers may have mispriced</li>
                  <li>• Consider factors bookmakers might overlook</li>
                  <li>• Track line movements and bet when odds are favorable</li>
                  <li>• Focus on sports and leagues you know well</li>
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