import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Shield, Award, Heart, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function AboutUs() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Transparency",
      description: "We provide honest, unbiased reviews and clear information about all betting offers and bookmakers."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "User-First",
      description: "Every recommendation is made with our users' best interests in mind, not just commission potential."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Responsible Gambling",
      description: "We actively promote safe betting practices and provide resources for those who need help."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Expertise",
      description: "Our team has decades of combined experience in sports betting and the UK gambling industry."
    }
  ];

  const features = [
    "Independent bookmaker reviews with real user experiences",
    "Verified welcome offers updated regularly",
    "Comprehensive betting guides for beginners and experts", 
    "Educational resources on responsible gambling",
    "Expert analysis of UK betting markets",
    "Free access to all content and resources"
  ];

  return (
    <>
      <SEOHead 
        title="About TopBetSite - Your Trusted UK Betting Guide | TopBetSite"
        description="Learn about TopBetSite's mission to provide honest, transparent betting information and help UK bettors make informed decisions about sports betting."
        ogTitle="About TopBetSite - Your Trusted UK Betting Guide"
        ogDescription="Discover TopBetSite's commitment to transparency, responsible gambling, and helping UK bettors find the best betting opportunities."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              About TopBetSite
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto">
              Your trusted source for honest betting information, comprehensive bookmaker reviews, and educational resources for UK sports betting.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg p-8 mb-12">
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg opacity-90 max-w-4xl mx-auto">
                To empower UK bettors with transparent, accurate information about sports betting opportunities while promoting 
                responsible gambling practices. We believe everyone deserves access to honest reviews and educational resources 
                to make informed betting decisions.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">What We Do</h2>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 dark:text-neutral-200">Bookmaker Reviews</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    We provide detailed, unbiased reviews of UK-licensed bookmakers, examining everything from welcome offers 
                    and odds quality to customer service and withdrawal times. Our reviews are based on thorough research 
                    and real user experiences.
                  </p>
                  <h3 className="font-semibold text-lg mb-4 dark:text-neutral-200">Educational Content</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    From understanding odds to advanced betting strategies, we create comprehensive guides to help both 
                    beginners and experienced bettors improve their knowledge and approach to sports betting.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4 dark:text-neutral-200">Welcome Offer Verification</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    We continuously monitor and verify welcome offers from major UK bookmakers, ensuring our users 
                    have access to current, accurate information about available promotions and their terms.
                  </p>
                  <h3 className="font-semibold text-lg mb-4 dark:text-neutral-200">Responsible Gambling Advocacy</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    We're committed to promoting safe betting practices through educational content, links to support 
                    organizations, and clear information about self-exclusion options like Gamstop.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto mb-2">
                      {value.icon}
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-3">Regulatory Compliance</h3>
            <p className="text-blue-700 mb-3">
              TopBetSite operates as an affiliate marketing website. We only promote bookmakers that are licensed by the 
              UK Gambling Commission. All bookmakers featured on our site hold valid UK gambling licenses and are regulated 
              under UK gambling laws.
            </p>
            <p className="text-blue-700">
              We may receive commission from bookmakers when users sign up through our links. This does not affect our 
              editorial independence or the honesty of our reviews. We are committed to transparency in all our partnerships.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Get In Touch</h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Have questions about our reviews, suggestions for improvement, or need help with betting-related queries? 
              We're here to help.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
            <p className="text-sm text-neutral-500 mt-4">
              Response time: 3-5 working days due to high traffic volume
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}