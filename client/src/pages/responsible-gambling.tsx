import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Phone, ExternalLink, AlertTriangle, Heart, Users } from "lucide-react";

export default function ResponsibleGambling() {
  const helpOrganizations = [
    {
      name: "BeGambleAware",
      description: "Independent charity providing information, advice and support for problem gambling.",
      services: ["Free helpline", "Online chat", "Treatment finder", "Self-assessment tools"],
      contact: "0808 8020 133",
      website: "https://www.begambleaware.org",
      hours: "24/7 support available"
    },
    {
      name: "GamCare",
      description: "Leading provider of gambling harm prevention and treatment services in the UK.",
      services: ["Counselling services", "Support groups", "Online forums", "Family support"],
      contact: "0808 8020 133",
      website: "https://www.gamcare.org.uk",
      hours: "24/7 helpline and live chat"
    },
    {
      name: "Gambling Therapy",
      description: "Global online support service offering free practical advice and emotional support.",
      services: ["Online counselling", "Support groups", "Self-help tools", "Multilingual support"],
      contact: "Online support",
      website: "https://www.gamblingtherapy.org",
      hours: "24/7 online support"
    }
  ];

  const warningSignsPersonal = [
    "Spending more money than you can afford to lose",
    "Chasing losses with bigger bets",
    "Lying about gambling activities or losses",
    "Neglecting work, family, or social responsibilities",
    "Borrowing money to gamble",
    "Feeling anxious or depressed about gambling",
    "Unable to stop or reduce gambling despite wanting to"
  ];

  const warningSignsFamily = [
    "Unexplained financial problems or debt",
    "Secretive behavior about money or online activities",
    "Mood swings related to wins and losses",
    "Neglecting family time or responsibilities",
    "Lying about whereabouts or activities",
    "Selling possessions without explanation",
    "Defensive when questioned about gambling"
  ];

  const toolsAndLimits = [
    {
      tool: "Deposit Limits",
      description: "Set daily, weekly, or monthly limits on how much you can deposit",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      tool: "Loss Limits", 
      description: "Set maximum amounts you're willing to lose in specific time periods",
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />
    },
    {
      tool: "Time Limits",
      description: "Control how much time you spend gambling with session limits",
      icon: <Clock className="h-6 w-6 text-secondary" />
    },
    {
      tool: "Reality Checks",
      description: "Receive reminders about how long you've been gambling",
      icon: <Users className="h-6 w-6 text-accent" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Responsible Gambling - Support, Tools & Self-Exclusion | TopBetSite"
        description="Comprehensive responsible gambling information including Gamstop self-exclusion, deposit limits, help organizations like BeGambleAware and GamCare, and warning signs."
        ogTitle="Responsible Gambling - Support, Tools & Self-Exclusion"
        ogDescription="Get help with gambling problems. Information on Gamstop, support organizations, and responsible gambling tools."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Responsible Gambling
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto">
              Gambling should be enjoyable entertainment. If it's causing problems, help is available. Learn about support services, self-exclusion options, and protective tools.
            </p>
          </div>

          {/* Emergency Help */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">Need Help Now?</h3>
                <p className="text-red-700 dark:text-red-200 mb-3">
                  If gambling is causing you immediate distress or financial problems, contact the National Gambling Helpline:
                </p>
                <div className="bg-white dark:bg-gray-600 p-3 rounded border dark:border-gray-500">
                  <p className="font-semibold text-red-800 dark:text-red-300">📞 0808 8020 133</p>
                  <p className="text-sm text-red-700 dark:text-red-200">Free, confidential support available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gamstop Section */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">
              Gamstop - Self-Exclusion Service
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 dark:text-neutral-200">What is Gamstop?</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  Gamstop is a free service that allows you to put barriers in place to restrict your online gambling across all UK licensed operators. 
                  Once registered, you'll be blocked from accessing gambling websites and apps.
                </p>
                <h4 className="font-semibold mb-2 dark:text-neutral-200">Exclusion Periods:</h4>
                <ul className="space-y-1 text-neutral-600 dark:text-neutral-300">
                  <li>• 6 months (minimum period)</li>
                  <li>• 1 year</li>
                  <li>• 5 years</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 dark:text-neutral-200">How It Works</h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-300 mb-4">
                  <li>• Register online with basic personal details</li>
                  <li>• Choose your exclusion period</li>
                  <li>• Automatic blocking across all UK gambling sites</li>
                  <li>• Cannot be reversed once activated</li>
                  <li>• Marketing materials also blocked</li>
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-purple-700"
                  onClick={() => window.open('https://www.gamstop.co.uk', '_blank')}
                >
                  Visit Gamstop <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Tools and Limits */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Responsible Gambling Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolsAndLimits.map((tool, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-lg">{tool.tool}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 text-sm">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-neutral-600">
                All UK licensed bookmakers are required to offer these tools. Find them in your account settings under "Responsible Gambling" or "Player Protection".
              </p>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <h3 className="font-semibold text-amber-800">Warning Signs - Personal</h3>
              </div>
              <ul className="space-y-2">
                {warningSignsPersonal.map((sign, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-amber-700 text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Warning Signs - Family/Friends</h3>
              </div>
              <ul className="space-y-2">
                {warningSignsFamily.map((sign, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-700 text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Help Organizations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Support Organizations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {helpOrganizations.map((org, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{org.name}</CardTitle>
                    <p className="text-sm text-neutral-500">{org.hours}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4">{org.description}</p>
                    <div className="space-y-2 mb-4">
                      {org.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-sm text-neutral-600">{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Contact: {org.contact}</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => window.open(org.website, '_blank')}
                      >
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Safer Gambling Tips */}
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Safer Gambling Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Before You Bet
                </h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Set a budget and stick to it</li>
                  <li>• Never bet money you can't afford to lose</li>
                  <li>• Set time limits for gambling sessions</li>
                  <li>• Don't gamble when upset, depressed, or under influence</li>
                  <li>• View gambling as entertainment, not investment</li>
                  <li>• Take regular breaks from gambling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  While Gambling
                </h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Don't chase losses with bigger bets</li>
                  <li>• Accept that losing is part of gambling</li>
                  <li>• Use deposit and loss limits</li>
                  <li>• Don't borrow money to gamble</li>
                  <li>• Take regular breaks and reality checks</li>
                  <li>• Stop when you reach your limits</li>
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