import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, Instagram, TrendingUp, Users, Shield, AlertTriangle } from "lucide-react";

export default function BettingTips() {
  const tipsterPlatforms = [
    {
      name: "Tipstrr",
      type: "Platform",
      description: "Professional tipster marketplace with verified track records and transparent statistics for football, horse racing, and other sports.",
      features: ["Verified Results", "Detailed Statistics", "Multiple Sports", "ROI Tracking"],
      url: "https://tipstrr.com",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    },
    {
      name: "Twitter Football Tips",
      type: "Social Media",
      description: "Follow verified tipsters on Twitter who share free football tips with transparent records. Look for accounts with long-term proof.",
      features: ["Free Tips", "Real-time Updates", "Community Interaction", "Easy to Follow"],
      url: "https://twitter.com/search?q=football%20tips",
      icon: <Twitter className="h-6 w-6 text-blue-500" />
    },
    {
      name: "Instagram Racing Tips",
      type: "Social Media",
      description: "Horse racing tipsters share daily selections and analysis on Instagram with visual form guides and betting insights.",
      features: ["Visual Content", "Daily Updates", "Form Analysis", "Racing Focus"],
      url: "https://instagram.com/explore/tags/horseracingtips",
      icon: <Instagram className="h-6 w-6 text-pink-500" />
    },
    {
      name: "Betting Forums",
      type: "Community",
      description: "Community-driven platforms where experienced bettors share tips, analysis, and discuss strategies across various sports.",
      features: ["Community Driven", "Discussion Forums", "Strategy Sharing", "Multiple Sports"],
      url: "#",
      icon: <Users className="h-6 w-6 text-secondary" />
    }
  ];

  const evaluationCriteria = [
    "Long-term profit record (minimum 6 months)",
    "Transparent posting of all tips, wins and losses",
    "Realistic stake recommendations",
    "Detailed reasoning behind selections",
    "Specialization in specific sports or markets",
    "Conservative bankroll management advice"
  ];

  const redFlags = [
    "Guaranteed wins or 'sure things'",
    "Extremely high win rates (over 80%)",
    "Requests for upfront payments without proof",
    "Deleted losing bets or selective posting",
    "Pressure to bet large amounts",
    "No transparent track record"
  ];

  return (
    <>
      <SEOHead 
        title="Betting Tips - Finding Trusted Tipsters & Analysis | TopBetSite"
        description="Learn about betting tips, how to evaluate tipsters, and discover trusted sources for football and horse racing tips including Tipstrr, Twitter, and Instagram."
        ogTitle="Betting Tips - Finding Trusted Tipsters & Analysis"
        ogDescription="Discover trusted betting tipsters and learn how to evaluate tips for football, horse racing and other sports."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Betting Tips & Trusted Tipsters
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto">
              Learn what betting tips are, how to evaluate tipsters, and discover trusted sources for sports betting analysis and selections.
            </p>
          </div>

          {/* Important Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important: We Don't Provide Tips</h3>
                <p className="text-amber-700">
                  TopBetSite does not provide betting tips or predictions. Instead, we help you find trusted external sources 
                  and teach you how to evaluate tipsters. Always do your own research and never bet more than you can afford to lose.
                </p>
              </div>
            </div>
          </div>

          {/* What Are Betting Tips */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">What Are Betting Tips?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Definition</h3>
                <p className="text-neutral-600 mb-4">
                  Betting tips are predictions or recommendations made by experienced bettors (tipsters) who analyze sports events 
                  and suggest which bets offer good value. They typically include the selection, odds, stake recommendation, and reasoning.
                </p>
                <h3 className="font-semibold text-lg mb-3">Types of Tips</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• <strong>Match Result:</strong> Predicting the winner of a game</li>
                  <li>• <strong>Over/Under:</strong> Total goals, points, or other statistics</li>
                  <li>• <strong>Handicap:</strong> Betting with adjusted starting positions</li>
                  <li>• <strong>Both Teams to Score:</strong> Football-specific market</li>
                  <li>• <strong>Accumulators:</strong> Multiple selections combined</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">What Good Tips Include</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Clear selection and recommended odds</li>
                  <li>• Stake suggestion (usually 1-5% of bankroll)</li>
                  <li>• Detailed analysis and reasoning</li>
                  <li>• Risk assessment</li>
                  <li>• Historical performance data</li>
                  <li>• When to place the bet</li>
                </ul>
                <h3 className="font-semibold text-lg mb-3 mt-4">Remember</h3>
                <p className="text-neutral-600">
                  Even the best tipsters lose regularly. No one can predict sports outcomes with certainty. 
                  Tips should be part of your research, not the only factor in your betting decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Trusted Tipster Sources */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Trusted Tipster Sources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tipsterPlatforms.map((platform, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {platform.icon}
                      <div>
                        <CardTitle className="text-xl">{platform.name}</CardTitle>
                        <p className="text-sm text-neutral-500">{platform.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4">{platform.description}</p>
                    <div className="space-y-2 mb-4">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-neutral-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {platform.url !== "#" && (
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => window.open(platform.url, '_blank')}
                      >
                        Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Evaluation Criteria */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-green-800">What to Look For</h3>
              </div>
              <ul className="space-y-2">
                {evaluationCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-green-700 text-sm">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="font-semibold text-red-800">Red Flags to Avoid</h3>
              </div>
              <ul className="space-y-2">
                {redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-700 text-sm">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Best Practices for Following Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Track Performance</h3>
                <p className="text-sm opacity-90">
                  Keep records of all tips you follow to evaluate which tipsters are actually profitable long-term.
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Use Tips as Research</h3>
                <p className="text-sm opacity-90">
                  Don't blindly follow tips. Use them as starting points for your own analysis and decision-making.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Diversify Sources</h3>
                <p className="text-sm opacity-90">
                  Follow multiple trusted tipsters and compare their analysis rather than relying on just one source.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}