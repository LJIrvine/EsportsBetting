import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, AlertTriangle, Shield, Users } from "lucide-react";

export default function TermsConditions() {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions - Website Usage Rules | TopBetSite"
        description="TopBetSite's terms and conditions governing the use of our betting comparison website, affiliate relationships, and user responsibilities."
        ogTitle="Terms & Conditions - Website Usage Rules"
        ogDescription="Read TopBetSite's terms and conditions for using our betting comparison and review services."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm space-y-8">
            
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-800">Agreement to Terms</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                By accessing and using TopBetSite ("the Website"), you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Definitions</h2>
              <ul className="space-y-3 text-neutral-600">
                <li><strong>"We," "Us," "Our":</strong> TopBetSite and its operators</li>
                <li><strong>"You," "User":</strong> Any individual accessing or using the Website</li>
                <li><strong>"Content":</strong> All information, text, graphics, and materials on the Website</li>
                <li><strong>"Services":</strong> All features and functionality provided by TopBetSite</li>
                <li><strong>"Bookmakers":</strong> Third-party gambling operators featured on our Website</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-800">User Eligibility and Responsibilities</h2>
              </div>
              
              <h3 className="text-lg font-semibold mb-3">Age Requirement</h3>
              <p className="text-neutral-600 mb-4">
                You must be at least 18 years old to use this Website. By using our services, you represent and warrant 
                that you meet this age requirement.
              </p>

              <h3 className="text-lg font-semibold mb-3">User Conduct</h3>
              <p className="text-neutral-600 mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li>Use the Website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the Website</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Interfere with the proper functioning of the Website</li>
                <li>Impersonate any person or entity</li>
                <li>Collect personal information about other users</li>
                <li>Use automated systems to access the Website without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Website Content and Information</h2>
              
              <h3 className="text-lg font-semibold mb-3">Information Accuracy</h3>
              <p className="text-neutral-600 mb-4">
                We strive to provide accurate and up-to-date information about bookmakers, odds, and betting offers. 
                However, we cannot guarantee the accuracy, completeness, or timeliness of all information. You should 
                always verify details directly with bookmakers before placing bets.
              </p>

              <h3 className="text-lg font-semibold mb-3">Educational Purpose</h3>
              <p className="text-neutral-600 mb-4">
                Our content is provided for informational and educational purposes only. We do not provide betting advice 
                or guarantee any outcomes. All betting decisions are your sole responsibility.
              </p>

              <h3 className="text-lg font-semibold mb-3">Third-Party Content</h3>
              <p className="text-neutral-600">
                We may include links to third-party websites and services. We are not responsible for the content, 
                accuracy, or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Affiliate Relationships</h2>
              
              <h3 className="text-lg font-semibold mb-3">Commercial Relationships</h3>
              <p className="text-neutral-600 mb-4">
                TopBetSite operates as an affiliate marketing website. We may receive commission from bookmakers when 
                users sign up through our links. This commercial relationship does not influence our editorial content 
                or review integrity.
              </p>

              <h3 className="text-lg font-semibold mb-3">Transparency</h3>
              <p className="text-neutral-600">
                We clearly disclose our affiliate relationships and maintain editorial independence. Our reviews and 
                recommendations are based on genuine assessment criteria, not commission rates.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-800">Gambling Disclaimers</h2>
              </div>
              
              <h3 className="text-lg font-semibold mb-3">Responsible Gambling</h3>
              <p className="text-neutral-600 mb-4">
                Gambling can be addictive. We strongly encourage responsible gambling practices. Never bet more than 
                you can afford to lose. If gambling becomes a problem, seek help immediately.
              </p>

              <h3 className="text-lg font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-neutral-600 mb-4">
                All bookmakers featured on our Website hold valid UK Gambling Commission licenses. However, you are 
                responsible for ensuring that online gambling is legal in your jurisdiction.
              </p>

              <h3 className="text-lg font-semibold mb-3">No Guarantees</h3>
              <p className="text-neutral-600">
                We do not guarantee any betting outcomes or profits. Gambling involves risk, and losses are possible. 
                All betting decisions are made at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Intellectual Property</h2>
              
              <h3 className="text-lg font-semibold mb-3">Our Content</h3>
              <p className="text-neutral-600 mb-4">
                All content on TopBetSite, including text, graphics, logos, and design, is owned by us or our licensors 
                and protected by copyright and other intellectual property laws.
              </p>

              <h3 className="text-lg font-semibold mb-3">Limited License</h3>
              <p className="text-neutral-600 mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use the Website for personal, 
                non-commercial purposes only.
              </p>

              <h3 className="text-lg font-semibold mb-3">Restrictions</h3>
              <p className="text-neutral-600">
                You may not reproduce, distribute, modify, create derivative works, or publicly display our content 
                without written permission.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-800">Limitation of Liability</h2>
              </div>
              
              <p className="text-neutral-600 mb-4">
                To the fullest extent permitted by law, TopBetSite shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600 mb-4">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Gambling losses</li>
                <li>Errors in bookmaker information</li>
                <li>Service interruptions</li>
              </ul>
              
              <p className="text-neutral-600">
                Our total liability shall not exceed £100 or the amount you paid to access our services, whichever is less.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Privacy and Data Protection</h2>
              <p className="text-neutral-600">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                Privacy Policy, which forms part of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Termination</h2>
              <p className="text-neutral-600 mb-4">
                We reserve the right to terminate or suspend your access to the Website at any time, without notice, 
                for conduct that we believe violates these Terms or is harmful to other users or our business.
              </p>
              <p className="text-neutral-600">
                Upon termination, your right to use the Website will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Changes to Terms</h2>
              <p className="text-neutral-600">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
                posting on the Website. Your continued use of the Website after changes are posted constitutes 
                acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Governing Law</h2>
              <p className="text-neutral-600">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the English courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Contact Information</h2>
              <p className="text-neutral-600 mb-4">
                If you have any questions about these Terms and Conditions, please contact us through our contact form.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                  Contact Us
                </Button>
              </Link>
              <p className="text-sm text-neutral-500 mt-4">
                Response time: 3-5 working days due to high traffic volume
              </p>
            </section>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}