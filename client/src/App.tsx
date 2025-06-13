import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-context";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Casinos from "@/pages/casinos";
import CasinoDetail from "@/pages/casino-detail";
import Offers from "@/pages/offers";
import Reviews from "@/pages/reviews";
import Resources from "@/pages/resources";
import FAQ from "@/pages/faq";
import BettingStrategy from "@/pages/betting-strategy";
import UnderstandingOdds from "@/pages/understanding-odds";
import BettingTips from "@/pages/betting-tips";
import HorseRacingGuide from "@/pages/horse-racing-guide";
import ResponsibleGambling from "@/pages/responsible-gambling";
import BettingGlossary from "@/pages/betting-glossary";
import FirstBetGuide from "@/pages/first-bet-guide";
import AccumulatorBets from "@/pages/accumulator-bets";
import LiveBettingStrategies from "@/pages/live-betting-strategies";
import BettingAppsReview from "@/pages/betting-apps-review";
import BettingTaxGuide from "@/pages/betting-tax-guide";
import MatchedBettingGuide from "@/pages/matched-betting-guide";
import AboutUs from "@/pages/about-us";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";

function Router() {
  useScrollToTop();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/casinos" component={Casinos} />
      <Route path="/casino/:slug" component={CasinoDetail} />
      <Route path="/offers" component={Offers} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/resources" component={Resources} />
      <Route path="/faq" component={FAQ} />
      <Route path="/betting-strategy" component={BettingStrategy} />
      <Route path="/understanding-odds" component={UnderstandingOdds} />
      <Route path="/betting-tips" component={BettingTips} />
      <Route path="/horse-racing-guide" component={HorseRacingGuide} />
      <Route path="/responsible-gambling" component={ResponsibleGambling} />
      <Route path="/betting-glossary" component={BettingGlossary} />
      <Route path="/first-bet-guide" component={FirstBetGuide} />
      <Route path="/accumulator-bets" component={AccumulatorBets} />
      <Route path="/live-betting-strategies" component={LiveBettingStrategies} />
      <Route path="/betting-apps-review" component={BettingAppsReview} />
      <Route path="/betting-tax-guide" component={BettingTaxGuide} />
      <Route path="/matched-betting-guide" component={MatchedBettingGuide} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="topbetsite-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
