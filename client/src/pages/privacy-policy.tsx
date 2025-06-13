import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - How We Protect Your Data | TopBetSite"
        description="TopBetSite's privacy policy explaining how we collect, use, and protect your personal information when you visit our betting comparison website."
        ogTitle="Privacy Policy - How We Protect Your Data"
        ogDescription="Learn how TopBetSite protects your privacy and handles your personal information responsibly."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm space-y-8">
            
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Introduction</h2>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                TopBetSite ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website topbetsite.com and use our services.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Information We Collect</h2>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 dark:text-neutral-200">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300 mb-4">
                <li>IP address and general location information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
                <li>Device information (mobile, desktop, tablet)</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 dark:text-neutral-200">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>Contact information when you reach out to us</li>
                <li>Feedback and comments you submit</li>
                <li>Newsletter subscription email addresses</li>
                <li>Survey responses (if applicable)</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">How We Use Your Information</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>To provide and improve our website and services</li>
                <li>To analyze website usage and optimize user experience</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send newsletters and updates (with your consent)</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
                <li>To track affiliate referrals and commissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Cookies and Tracking Technologies</h2>
              
              <h3 className="text-lg font-semibold mb-3 dark:text-neutral-200">Essential Cookies</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                These cookies are necessary for the website to function properly. They enable basic features like page navigation 
                and access to secure areas of the website.
              </p>

              <h3 className="text-lg font-semibold mb-3 dark:text-neutral-200">Analytics Cookies</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                We use Google Analytics to understand how visitors use our site. This helps us improve our content and user experience. 
                These cookies collect anonymous information about your visit.
              </p>

              <h3 className="text-lg font-semibold mb-3 dark:text-neutral-200">Affiliate Tracking</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                When you click on bookmaker links, we use cookies to track referrals for commission purposes. This does not 
                collect personal information but helps us understand which offers are most popular.
              </p>

              <h3 className="text-lg font-semibold mb-3 dark:text-neutral-200">Managing Cookies</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Information Sharing</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who help operate our website (under strict confidentiality agreements)</li>
                <li>In connection with a business merger or acquisition (with prior notice)</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Data Security</h2>
              </div>
              <p className="text-neutral-600 mb-4">
                We implement appropriate security measures to protect your information against unauthorized access, alteration, 
                disclosure, or destruction. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li>SSL encryption for data transmission</li>
                <li>Secure hosting with reputable providers</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Your Rights (GDPR)</h2>
              <p className="text-neutral-600 mb-4">
                Under the General Data Protection Regulation (GDPR), you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
              </ul>
              <p className="text-neutral-600 mt-4">
                To exercise these rights, contact us at privacy@topbetsite.com. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Third-Party Links</h2>
              <p className="text-neutral-600">
                Our website contains links to bookmaker websites and other third-party sites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to review their privacy policies before providing 
                any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Children's Privacy</h2>
              <p className="text-neutral-600">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal 
                information from children under 18. If we become aware of such data collection, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Data Retention</h2>
              <p className="text-neutral-600">
                We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or 
                as required by law. Analytics data is typically retained for 26 months, while contact information is kept 
                until you request deletion or unsubscribe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Changes to This Policy</h2>
              <p className="text-neutral-600">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated 
                "Last updated" date. For significant changes, we may provide additional notice through email or website announcements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Contact Information</h2>
              <p className="text-neutral-600 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us through our contact form.
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