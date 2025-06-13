import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Clock, MapPin, Eye, TrendingUp, Users } from "lucide-react";

export default function HorseRacingGuide() {
  const raceTypes = [
    {
      type: "Flat Racing",
      description: "Races on level tracks without obstacles, focusing on pure speed over distances from 5 furlongs to 2+ miles.",
      seasons: "March to November",
      majorRaces: ["Derby", "2000 Guineas", "St Leger", "King George VI"]
    },
    {
      type: "National Hunt",
      description: "Jump racing over hurdles or fences, testing stamina and jumping ability over longer distances.",
      seasons: "October to April",
      majorRaces: ["Grand National", "Cheltenham Gold Cup", "Champion Hurdle"]
    },
    {
      type: "All-Weather",
      description: "Year-round racing on synthetic surfaces, providing consistent racing regardless of weather conditions.",
      seasons: "All year",
      majorRaces: ["All-Weather Championships", "Good Friday meeting"]
    }
  ];

  const formTerms = [
    { term: "1", meaning: "Won the race" },
    { term: "2", meaning: "Finished second" },
    { term: "3", meaning: "Finished third" },
    { term: "0", meaning: "Finished outside first three" },
    { term: "-", meaning: "Fell, unseated rider, or pulled up" },
    { term: "F", meaning: "Fell" },
    { term: "U", meaning: "Unseated rider" },
    { term: "P", meaning: "Pulled up" },
    { term: "/", meaning: "Separates seasons" }
  ];

  const keyFactors = [
    {
      title: "Recent Form",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      description: "Look at the horse's last 3-5 runs, considering finishing positions and margins of defeat/victory."
    },
    {
      title: "Going Preference",
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      description: "Track conditions matter greatly. Some horses prefer firm ground, others perform better on soft going."
    },
    {
      title: "Course & Distance",
      icon: <Clock className="h-6 w-6 text-accent" />,
      description: "Previous performance at the same course and over similar distances is a strong indicator."
    },
    {
      title: "Jockey & Trainer",
      icon: <Users className="h-6 w-6 text-primary" />,
      description: "Top jockeys and trainers have higher success rates. Check their recent form and strike rates."
    }
  ];

  const goingDescriptions = [
    { going: "Firm", description: "Hard, fast ground - suits speedier horses" },
    { going: "Good to Firm", description: "Ideal conditions for most horses" },
    { going: "Good", description: "Standard conditions, gives all horses a chance" },
    { going: "Good to Soft", description: "Slightly testing conditions" },
    { going: "Soft", description: "Heavy going that tests stamina" },
    { going: "Heavy", description: "Very testing conditions, suits hardy stayers" }
  ];

  return (
    <>
      <SEOHead 
        title="Horse Racing Guide - Form, Types & Betting Tips | TopBetSite"
        description="Complete guide to horse racing including race types, form reading, going conditions, and key factors for successful horse racing betting."
        ogTitle="Horse Racing Guide - Form, Types & Betting Tips"
        ogDescription="Master horse racing with our comprehensive guide covering form analysis, race types, and betting strategies."
      />
      
      <div className="min-h-screen bg-neutral-50 dark:bg-gray-800">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              Horse Racing Guide
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto">
              Master the sport of kings with our comprehensive guide to horse racing types, form reading, and betting strategies.
            </p>
          </div>

          {/* Race Types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">Types of Horse Racing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {raceTypes.map((race, index) => (
                <Card key={index} className="h-full dark:bg-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{race.type}</CardTitle>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Season: {race.seasons}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">{race.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 dark:text-neutral-200">Major Races:</h4>
                      <ul className="space-y-1">
                        {race.majorRaces.map((majorRace, raceIndex) => (
                          <li key={raceIndex} className="text-sm text-neutral-600 dark:text-neutral-300">• {majorRace}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Form Reading */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">Reading Horse Racing Form</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 dark:text-neutral-200">Form Numbers Explained</h3>
                <div className="space-y-3">
                  {formTerms.map((term, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-neutral-50 dark:bg-gray-600 rounded">
                      <div className="w-8 h-8 bg-primary text-white rounded flex items-center justify-center font-bold text-sm">
                        {term.term}
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">{term.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 dark:text-neutral-200">Example Form Analysis</h3>
                <div className="bg-neutral-50 dark:bg-gray-600 p-4 rounded-lg mb-4">
                  <p className="font-mono text-lg mb-2 dark:text-neutral-200">1-2-3-1-0</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Reading right to left (most recent first): Finished outside first three, 
                    then won, then third, then second, then won.
                  </p>
                </div>
                <h4 className="font-semibold mb-2 dark:text-neutral-200">What to Look For:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                  <li>• Consistent placings indicate reliability</li>
                  <li>• Recent wins show current form</li>
                  <li>• Consider the quality of opposition</li>
                  <li>• Look for improving form patterns</li>
                  <li>• Check for first-time equipment changes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Going Conditions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">Going Conditions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {goingDescriptions.map((going, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="font-semibold text-primary mb-1">{going.going}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{going.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Factors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {keyFactors.map((factor, index) => (
              <Card key={index} className="text-center dark:bg-gray-700">
                <CardHeader>
                  <div className="mx-auto mb-2">
                    {factor.icon}
                  </div>
                  <CardTitle className="text-lg dark:text-neutral-200">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Betting Markets */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center">Popular Horse Racing Betting Markets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Win</h3>
                <p className="text-sm text-neutral-600">Back a horse to finish first</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Each Way</h3>
                <p className="text-sm text-neutral-600">Win bet + place bet combined</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Place</h3>
                <p className="text-sm text-neutral-600">Finish in top 2-4 positions</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Forecast</h3>
                <p className="text-sm text-neutral-600">Pick first and second in order</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Tricast</h3>
                <p className="text-sm text-neutral-600">Pick first three in order</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Placepot</h3>
                <p className="text-sm text-neutral-600">Pick placed horses in 6 races</p>
              </div>
            </div>
          </div>

          {/* Expert Tips */}
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Expert Racing Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Before You Bet
                </h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Check the going report and weather forecast</li>
                  <li>• Study the racecard for non-runners and late changes</li>
                  <li>• Look for first-time blinkers or hood applications</li>
                  <li>• Consider the draw advantage on different courses</li>
                  <li>• Check for stable confidence indicators</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Value Hunting
                </h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Back horses with improving form trends</li>
                  <li>• Look for unexposed horses stepping up in class</li>
                  <li>• Consider horses returning from breaks with good trainers</li>
                  <li>• Identify horses who ran well despite trouble in running</li>
                  <li>• Back proven course and distance winners</li>
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