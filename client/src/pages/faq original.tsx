import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      category: "Welcome Offers",
      questions: [
        {
          question: "Are these welcome offers available to new customers only?",
          answer: "Yes, welcome offers are exclusively for new customers who have never had an account with that bookmaker. Each offer can only be claimed once per person, household, or IP address."
        },
        {
          question: "Do I need to deposit money to claim a welcome offer?",
          answer: "Most welcome offers require a qualifying deposit and bet. However, some bookmakers offer no-deposit free bets. Always check the specific terms and conditions for each offer."
        },
        {
          question: "How long do I have to use my welcome bonus?",
          answer: "Welcome bonuses typically expire between 7-30 days after being credited to your account. Free bets usually have shorter expiry periods, so use them promptly."
        },
        {
          question: "Can I withdraw my welcome bonus immediately?",
          answer: "No, welcome bonuses usually have wagering requirements. You must bet the bonus amount a certain number of times before you can withdraw any winnings."
        }
      ]
    },
    {
      category: "Betting Basics",
      questions: [
        {
          question: "What is the minimum age to bet in the UK?",
          answer: "You must be 18 years or older to place bets with UK bookmakers. All operators are required to verify your age and identity before allowing you to bet."
        },
        {
          question: "How do betting odds work?",
          answer: "Odds represent the probability of an outcome and determine your potential winnings. Fractional odds (5/1) show profit relative to stake, while decimal odds (6.0) show total return including your stake."
        },
        {
          question: "What is an accumulator bet?",
          answer: "An accumulator combines multiple selections into one bet. All selections must win for the bet to be successful, but the potential returns are much higher than single bets."
        },
        {
          question: "Can I cash out my bet early?",
          answer: "Many bookmakers offer cash out options that allow you to settle your bet before the event finishes. The cash out value is calculated based on current odds and likelihood of your bet winning."
        }
      ]
    },
    {
      category: "Account & Payments",
      questions: [
        {
          question: "How do I verify my account?",
          answer: "Most bookmakers require ID verification (passport/driving licence) and proof of address (utility bill/bank statement). This process usually takes 24-72 hours."
        },
        {
          question: "What payment methods are accepted?",
          answer: "UK bookmakers typically accept debit cards, bank transfers, PayPal, Skrill, Neteller, and other e-wallets. Credit card deposits are no longer permitted under UK gambling laws."
        },
        {
          question: "How long do withdrawals take?",
          answer: "E-wallet withdrawals are usually instant to 24 hours. Bank transfers take 1-5 working days. Debit card withdrawals can take 1-3 working days depending on your bank."
        },
        {
          question: "Are there withdrawal limits?",
          answer: "Most bookmakers have daily/weekly withdrawal limits, especially for new accounts. These limits are typically increased based on account history and verification level."
        }
      ]
    },
    {
      category: "Responsible Gambling",
      questions: [
        {
          question: "How can I set betting limits?",
          answer: "All UK bookmakers provide tools to set deposit, loss, and time limits. These can usually be found in your account settings under 'Responsible Gambling' or 'Player Protection'."
        },
        {
          question: "What is GamStop?",
          answer: "GamStop is a free service that allows you to self-exclude from all UK licensed gambling operators. You can exclude yourself for 6 months, 1 year, or 5 years."
        },
        {
          question: "Where can I get help with gambling problems?",
          answer: "Organizations like GamCare, Gambling Therapy, and BeGambleAware offer free confidential support. Most bookmakers also provide direct links to these services."
        },
        {
          question: "Can I take a break from betting?",
          answer: "Yes, all operators offer 'time out' or 'cooling off' periods ranging from 24 hours to 6 weeks. During this time, you won't be able to access your account."
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions - Betting Help & Support | TopBetSite"
        description="Get answers to common betting questions including welcome offers, account setup, payment methods, and responsible gambling information."
        ogTitle="Frequently Asked Questions - Betting Help & Support"
        ogDescription="Get answers to common betting questions about welcome offers, payments, and responsible gambling."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Find answers to the most common questions about betting, welcome offers, and account management.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2 text-neutral-800">
                              {faq.question}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              If you can't find the answer you're looking for, please don't hesitate to get in touch with our support team.
            </p>
            <div className="space-y-3 text-neutral-600">
              <p>📧 Email: support@topbetsite.com</p>
              <p>💬 Live chat available 24/7</p>
              <p>📞 Phone: 0800 123 4567 (UK only)</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}