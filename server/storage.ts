import { 
  casinos, 
  blogPosts, 
  affiliateClicks,
  users,
  type Casino, 
  type InsertCasino,
  type BlogPost,
  type InsertBlogPost,
  type AffiliateClick,
  type InsertAffiliateClick,
  type User,
  type InsertUser
} from "@shared/schema";

export interface IStorage {
  // Casino methods
  getCasinos(): Promise<Casino[]>;
  getFeaturedCasinos(): Promise<Casino[]>;
  getCasinoBySlug(slug: string): Promise<Casino | undefined>;
  createCasino(casino: InsertCasino): Promise<Casino>;
  updateCasino(id: number, casino: Partial<InsertCasino>): Promise<Casino | undefined>;
  deleteCasino(id: number): Promise<boolean>;

  // Blog methods
  getBlogPosts(published?: boolean): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;

  // Affiliate tracking methods
  trackAffiliateClick(click: InsertAffiliateClick): Promise<AffiliateClick>;
  getAffiliateClicks(casinoId?: number): Promise<AffiliateClick[]>;

  // User methods (existing)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private casinos: Map<number, Casino>;
  private blogPosts: Map<number, BlogPost>;
  private affiliateClicks: Map<number, AffiliateClick>;
  private users: Map<number, User>;
  private currentCasinoId: number;
  private currentBlogPostId: number;
  private currentAffiliateClickId: number;
  private currentUserId: number;

  constructor() {
    this.casinos = new Map();
    this.blogPosts = new Map();
    this.affiliateClicks = new Map();
    this.users = new Map();
    this.currentCasinoId = 1;
    this.currentBlogPostId = 1;
    this.currentAffiliateClickId = 1;
    this.currentUserId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample esports betting sites
    const sampleCasinos: InsertCasino[] = [
      {
        name: "Betway",
        slug: "betway",
        logo: "/logos/betway.png",
        rating: 5,
        bonus: "Bet £10 get £30 in free bets",
        bonusType: "New customers only. Min deposit £10. Place a bet of £10 at minimum odds of 1.75. Free bets credited upon settlement. Free bets expire after 7 days. Full T&Cs apply. 18+ BeGambleAware.org",
        description: "Leading esports betting platform with extensive tournament coverage for CS2, League of Legends, Dota 2, and Valorant. Excellent live betting and competitive odds.",
        features: ["Live Esports Betting", "Tournament Coverage", "Mobile App", "Fast Payouts"],
        affiliateUrl: "https://betway.com?affiliate=topbetsite",
        badge: "Best Overall",
        isFeatured: true,
      },
      {
        name: "GG.Bet",
        slug: "gg-bet",
        logo: "/logos/gg-bet.png",
        rating: 5,
        bonus: "100% up to €200 welcome bonus",
        bonusType: "New players only. Min deposit €10. Bonus must be wagered 5x on accumulator bets with 3+ selections at odds 1.40+. Bonus expires in 7 days. Full T&Cs apply. 18+",
        description: "Dedicated esports betting specialist with the widest range of markets. Covers all major tournaments and regional leagues with innovative bet types.",
        features: ["Esports Specialist", "Innovative Markets", "Live Streaming", "Crypto Accepted"],
        affiliateUrl: "https://gg.bet?affiliate=topbetsite",
        badge: "Esports Specialist",
        isFeatured: true,
      },
      {
        name: "Pinnacle",
        slug: "pinnacle",
        logo: "/logos/pinnacle.png",
        rating: 5,
        bonus: "High odds, no welcome bonus needed",
        bonusType: "Pinnacle offers the highest odds in the market instead of welcome bonuses. No maximum limits and winners welcome. Professional betting environment.",
        description: "The sharp bettor's choice with highest odds and no limits. Professional-grade platform that welcomes winners and offers unmatched esports odds.",
        features: ["Highest Odds", "No Limits", "Winners Welcome", "Professional Platform"],
        affiliateUrl: "https://pinnacle.com?affiliate=topbetsite",
        badge: "Highest Odds",
        isFeatured: true,
      },
      {
        name: "Stake",
        slug: "stake",
        logo: "/logos/stake.png",
        rating: 4,
        bonus: "Weekly reload bonus up to $2000",
        bonusType: "Existing players can claim weekly reload bonuses. Cryptocurrency deposits only. Wagering requirements apply. Bonus varies by VIP level. Full T&Cs apply.",
        description: "Crypto-focused betting platform with comprehensive esports coverage. Instant deposits/withdrawals with cryptocurrency and provably fair gaming.",
        features: ["Crypto Exclusive", "Instant Transactions", "Provably Fair", "VIP Program"],
        affiliateUrl: "https://stake.com?affiliate=topbetsite",
        badge: "Crypto Friendly",
        isFeatured: true,
      },
      {
        name: "Unibet",
        slug: "unibet",
        logo: "/logos/unibet.png",
        rating: 4,
        bonus: "Bet £10 get £40 in free bets",
        bonusType: "New customers only. Min deposit £10. Place a qualifying bet of £10 at odds 1/2 or greater. Free bets credited as 4x £10. Free bets expire after 7 days. T&Cs apply.",
        description: "Reliable esports betting with good tournament coverage and competitive odds. Strong mobile platform and comprehensive live betting options.",
        features: ["Mobile Excellence", "Live Betting", "Tournament Specials", "Cash Out"],
        affiliateUrl: "https://unibet.com?affiliate=topbetsite",
        badge: "Mobile Friendly",
        isFeatured: true,
      },
      {
        name: "bet365",
        slug: "bet365-esports",
        logo: "/logos/bet365.png",
        rating: 4,
        bonus: "Bet £10 get £30 in free bets",
        bonusType: "New customers only. Min deposit £5. Qualifying bet must be placed at odds of 1/5 or greater. Free bets paid as bet credits. T&Cs apply.",
        description: "World-renowned betting platform expanding into esports. Excellent live streaming and in-play betting for major tournaments.",
        features: ["Live Streaming", "In-Play Betting", "Global Coverage", "Established Brand"],
        affiliateUrl: "https://bet365.com?affiliate=topbetsite",
        badge: "Trusted Name",
        isFeatured: true,
      },
      {
        name: "Unibet",
        slug: "unibet",
        logo: "/logos/unibet.png",
        rating: 4,
        bonus: "Bet £10 Get £40 in Bonuses",
        bonusType: "18+. GambleAware.org. New GB customers only. Min £10 debit card deposit. Place a £10+ bet at Evens or greater (2.0) each leg on Sports within 7 days. Opt in for £20 in free bets and £20 Casino Bonus. Valid for 7 days. Geographical restrictions and T&C's apply.",
        description: "European operator with innovative features and competitive odds. Excellent mobile app and live betting platform.",
        features: ["Innovative Features", "Live Betting", "Multi-Sport Coverage"],
        affiliateUrl: "https://unibet.co.uk?affiliate=topbetsite",
        badge: "Innovation",
        isFeatured: true,
      },
      {
        name: "BetUK",
        slug: "betuk",
        logo: "/logos/betuk.png",
        rating: 4,
        bonus: "Bet £10 get £30 in free bets",
        bonusType: "New cust only. Deposit & Place a Bet within 7 days, and settle a £10 minimum bet at odds of 4/5 (1.8) or greater, to be credited with 3x £10 Free Bets: 1 x £10 Horse Racing, 1 x £10 Free Bet Builder and 1 x £10 Football. 7 day expiry. Stake not returned. T&Cs Apply.",
        description: "British-focused bookmaker with competitive odds and excellent customer service. Strong football and racing markets.",
        features: ["British Focus", "Competitive Odds", "Fast Payouts"],
        affiliateUrl: "https://betuk.com?affiliate=topbetsite",
        badge: "New",
        isFeatured: true,
      },
      {
        name: "BoyleSports",
        slug: "boylesports",
        logo: "/logos/boylesports.png",
        rating: 4,
        bonus: "Bet £10 get £30 in free bets + £10 casino bonus",
        bonusType: "18+. New UK customers (Excluding NI) only. £40 in FREE Bets (FB) as £30 in sports bets & a £10 casino bonus (CB). Min Deposit £10. Min stake £10. Min odds Evs. FB applied on 1st settlement of any qualifying bet. FB 7-day expiry. 1 FB offer per customer, household & IP address only. Account & Payment restrictions.",
        description: "Ireland's largest independent bookmaker with strong presence in UK market. Known for competitive football odds and extensive horse racing coverage.",
        features: ["Racing Specialist", "Competitive Football Odds", "Irish Heritage"],
        affiliateUrl: "https://boylesports.com?affiliate=topbetsite",
        badge: "Irish Leader",
        isFeatured: false,
      },
      {
        name: "BetMGM",
        slug: "betmgm",
        logo: "/logos/betmgm.png",
        rating: 4,
        bonus: "Bet £10, Get £40 in Free Bets",
        bonusType: "New customers only. 7 days to place qualifying bet of £10 at 1/1 (2.0) to receive 4 x £10 Free Bets: 1 x £10 football, 1 x £10 horse racing & 2 x £10 Bet Builders. Free Bets cannot be used on e-sports and non-UK/IE horse racing. 7 day expiry. Exclusions apply. Stake not returned. 18+. T&Cs apply.",
        description: "MGM's premium sports betting platform with American backing and UK licensing. Strong focus on Premier League and major sporting events.",
        features: ["Premium Platform", "MGM Heritage", "Live Betting"],
        affiliateUrl: "https://betmgm.co.uk?affiliate=topbetsite",
        badge: "Premium",
        isFeatured: false,
      },
      {
        name: "Betano",
        slug: "betano",
        logo: "/logos/betano.png",
        rating: 4,
        bonus: "Bet £10 Get £30 in Free Bets",
        bonusType: "18+ New Customers Only. Opt in and bet £10 (odds 2.00+) within 3 days of sign up. No cash-out. Get 3x£10 Free Bets for set markets (odds 2.0+) which expire in 5 days. Click for T&Cs. GambleAware.org | Please gamble responsibly",
        description: "European sports betting brand with strong focus on football. Official partner of major football clubs with competitive odds and promotions.",
        features: ["Football Focus", "European Expertise", "Club Partnerships"],
        affiliateUrl: "https://betano.co.uk?affiliate=topbetsite",
        badge: "Football Partner",
        isFeatured: false,
      },
      {
        name: "Virgin Bet",
        slug: "virgin-bet",
        logo: "/logos/virgin-bet.png",
        rating: 4,
        bonus: "Bet £10 Get £20 in free bets",
        bonusType: "Only available to new, verified customers residing in the UK. Join VBET and place a first ever bet of at least £10 (multi-bets only; min. 3 legs). Get 2x£10 in free multi-bets (min. 3 legs per £10 bet; no odds restrictions). Payment method restrictions apply. T&Cs apply.",
        description: "Virgin's sports betting platform with innovative features and customer-first approach. Known for transparent pricing and excellent user experience.",
        features: ["Virgin Innovation", "User-Friendly", "Transparent Pricing"],
        affiliateUrl: "https://virginbet.com?affiliate=topbetsite",
        badge: "Innovation",
        isFeatured: false,
      },
      {
        name: "Kwiff",
        slug: "kwiff",
        logo: "/logos/kwiff.png",
        rating: 3,
        bonus: "Bet £10 Get £30 in Free Bets",
        bonusType: "Promotion available on desktop and web only and is not offered via the kwiff apps. New selected customers & 18+ only. Min. deposit of £10. Full T&Cs apply. Qualifying bet of £10 at min. odds 2.0 within 5 days of registration, E/W excluded. Get 3x Free Bets at min odds 2.0 each. 1x£10 Football, 1x£10 Racing, 1x£10 Acca (Min 4 selections). 7-day expiry",
        description: "Innovative betting platform known for random price boosts and enhanced odds. Young brand with unique approach to sports betting and engaging user experience.",
        features: ["Random Boosts", "Enhanced Odds", "Unique Experience"],
        affiliateUrl: "https://kwiff.com?affiliate=topbetsite",
        badge: "Unique",
        isFeatured: false,
      },
      {
        name: "Casumo",
        slug: "casumo",
        logo: "/logos/casumo.png",
        rating: 4,
        bonus: "100% back as a Free Bet up to £30",
        bonusType: "New customers only. Registration required. Valid on your first combo bet (minimum 3 selections, minimum odds of 1.40 per selection, minimum bet of £5). If you lose, you receive a 100% refund up to £30 as Free Bet. Free bet valid for 7 days. The Free Bet can be used on a combo bet with at least 2 selections, minimum odds of 1.50 per selection and maximum odd of 5.00, Football only. Terms & Conditions apply.",
        description: "Multi-platform operator offering both sports betting and casino games. Known for excellent mobile experience and comprehensive sports coverage.",
        features: ["Multi-Platform", "Mobile Excellence", "Comprehensive Markets"],
        affiliateUrl: "https://casumo.com/sports?affiliate=topbetsite",
        badge: "Mobile Leader",
        isFeatured: false,
      },
      {
        name: "Bet442",
        slug: "bet442",
        logo: "/logos/bet442.png",
        rating: 3,
        bonus: "Bet £20, Get £20",
        bonusType: "18+. New Customers Only. Min deposit £20. Maximum one £10 Free Bet & two £5 Bet Builder Free Bets. Qualifying bet must be placed at odds of Evens (2.00) or greater. Paid as bonus tokens: Token 1 Min odds Req: 4/5 (1.80). Token 2 & 3 are valid for Bet Builder only and are subject to min odds of 2/1 (3.00). T&Cs apply.",
        description: "Boutique sportsbook offering competitive odds and personalized service. Focus on providing value for regular punters with consistent pricing.",
        features: ["Competitive Odds", "Personal Service", "Value Focus"],
        affiliateUrl: "https://bet442.com?affiliate=topbetsite",
        badge: "Value",
        isFeatured: false,
      },
      {
        name: "Betrino",
        slug: "betrino",
        logo: "/logos/betrino.png",
        rating: 3,
        bonus: "Bet £10 Get £30 Free Bet + 10 Free Spins",
        bonusType: "New Players Only. Free bet - one-time stake of £30, min odds 1.5, stake not returned. 1X wager for Sports and 50X for Free Spins on the winnings. Wager from real balance first. Wager calculated on bonus bets only. Max conversion: £200 for Free Bet and £20 for Free Spins. Valid for 7 Days from receipt. Limited to 1 sport & 5 casino brand/s within the network.",
        description: "Modern sports betting platform with clean interface and competitive markets. Growing UK presence with focus on user experience and fair odds.",
        features: ["Modern Interface", "Fair Odds", "Growing Platform"],
        affiliateUrl: "https://betrino.com?affiliate=topbetsite",
        badge: "Modern",
        isFeatured: false,
      },
    ];

    sampleCasinos.forEach((casino) => {
      const id = this.currentCasinoId++;
      const fullCasino: Casino = {
        ...casino,
        id,
        createdAt: new Date(),
        badge: casino.badge || null,
        isFeatured: casino.isFeatured ?? false,
      };
      this.casinos.set(id, fullCasino);
    });

    // Sample esports blog posts
    const samplePosts: InsertBlogPost[] = [
      {
        title: "CS2 Betting Strategy: Major Tournament Analysis",
        slug: "cs2-betting-major-tournament-analysis",
        excerpt: "Master CS2 betting with advanced map analysis, team form evaluation, and tactical insights for Major tournaments...",
        content: `# CS2 Betting Strategy: Major Tournament Analysis

## Map Pool Analysis

Understanding recent form is crucial for successful Premier League betting. Look beyond just wins and losses to examine underlying performance metrics...

## Value Betting

Finding value in Premier League markets requires deep knowledge of team strengths, weaknesses, and current odds pricing...

## In-Play Strategies

Live betting during Premier League matches offers unique opportunities for profitable wagering when you know what to look for...`,
        featuredImage: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
        category: "Football Betting",
        readTime: 6,
        isPublished: true,
        metaTitle: "Premier League Betting Tips - Football Strategy Guide",
        metaDescription: "Expert Premier League betting tips and strategies. Learn form analysis, value betting, and in-play tactics for profitable football wagering.",
      },
      {
        title: "Horse Racing Betting Guide for Beginners",
        slug: "horse-racing-betting-guide-beginners",
        excerpt: "Complete beginner's guide to horse racing betting covering race types, odds, form reading, and essential betting strategies...",
        content: `# Horse Racing Betting Guide for Beginners

## Understanding Race Types

Different race types require different betting approaches. From handicaps to maiden races, each presents unique opportunities...

## Reading the Form

The form book is your most valuable tool in horse racing. Learn how to interpret recent performance data...

## Essential Betting Strategies

Successful horse racing betting requires discipline, bankroll management, and understanding of value...`,
        featuredImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
        category: "Horse Racing",
        readTime: 8,
        isPublished: true,
        metaTitle: "Horse Racing Betting Guide - Beginner Tips & Strategies",
        metaDescription: "Complete horse racing betting guide for beginners. Learn race types, form reading, odds, and winning strategies.",
      },
      {
        title: "Understanding Betting Odds and Value",
        slug: "understanding-betting-odds-value",
        excerpt: "Learn how betting odds work, how to calculate implied probability, and identify value bets for long-term profitability...",
        content: `# Understanding Betting Odds and Value

## How Odds Work

Betting odds represent the bookmaker's assessment of probability and determine your potential payout...

## Calculating Implied Probability

Converting odds to probability helps you assess whether a bet offers genuine value...

## Finding Value Bets

Value betting is the key to long-term profitability. Learn how to identify when odds are in your favour...`,
        featuredImage: "https://images.unsplash.com/photo-1594736797933-d0401ba9db65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
        category: "Betting Guides",
        readTime: 5,
        isPublished: true,
        metaTitle: "Betting Odds Guide - Understanding Value & Probability",
        metaDescription: "Learn how betting odds work, calculate implied probability, and identify value bets for profitable sports betting.",
      },
    ];

    samplePosts.forEach((post) => {
      const id = this.currentBlogPostId++;
      const fullPost: BlogPost = {
        ...post,
        id,
        createdAt: new Date(),
        updatedAt: new Date(),
        featuredImage: post.featuredImage || null,
        isPublished: post.isPublished ?? true,
        metaTitle: post.metaTitle || null,
        metaDescription: post.metaDescription || null,
      };
      this.blogPosts.set(id, fullPost);
    });
  }

  // Casino methods
  async getCasinos(): Promise<Casino[]> {
    return Array.from(this.casinos.values()).sort((a, b) => b.rating - a.rating);
  }

  async getFeaturedCasinos(): Promise<Casino[]> {
    return Array.from(this.casinos.values())
      .filter(casino => casino.isFeatured)
      .sort((a, b) => b.rating - a.rating);
  }

  async getCasinoBySlug(slug: string): Promise<Casino | undefined> {
    return Array.from(this.casinos.values()).find(casino => casino.slug === slug);
  }

  async createCasino(insertCasino: InsertCasino): Promise<Casino> {
    const id = this.currentCasinoId++;
    const casino: Casino = {
      ...insertCasino,
      id,
      createdAt: new Date(),
      badge: insertCasino.badge || null,
      isFeatured: insertCasino.isFeatured ?? false,
    };
    this.casinos.set(id, casino);
    return casino;
  }

  async updateCasino(id: number, updates: Partial<InsertCasino>): Promise<Casino | undefined> {
    const casino = this.casinos.get(id);
    if (!casino) return undefined;
    
    const updatedCasino: Casino = { 
      ...casino, 
      ...updates,
      badge: updates.badge !== undefined ? updates.badge : casino.badge,
      isFeatured: updates.isFeatured !== undefined ? updates.isFeatured : casino.isFeatured,
    };
    this.casinos.set(id, updatedCasino);
    return updatedCasino;
  }

  async deleteCasino(id: number): Promise<boolean> {
    return this.casinos.delete(id);
  }

  // Blog methods
  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    const posts = Array.from(this.blogPosts.values());
    if (published !== undefined) {
      return posts.filter(post => post.isPublished === published);
    }
    return posts.sort((a, b) => {
      const aTime = a.createdAt?.getTime() || 0;
      const bTime = b.createdAt?.getTime() || 0;
      return bTime - aTime;
    });
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      featuredImage: insertPost.featuredImage || null,
      isPublished: insertPost.isPublished ?? true,
      metaTitle: insertPost.metaTitle || null,
      metaDescription: insertPost.metaDescription || null,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: number, updates: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;
    
    const updatedPost: BlogPost = { 
      ...post, 
      ...updates, 
      updatedAt: new Date(),
      featuredImage: updates.featuredImage !== undefined ? updates.featuredImage : post.featuredImage,
      isPublished: updates.isPublished !== undefined ? updates.isPublished : post.isPublished,
      metaTitle: updates.metaTitle !== undefined ? updates.metaTitle : post.metaTitle,
      metaDescription: updates.metaDescription !== undefined ? updates.metaDescription : post.metaDescription,
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  // Affiliate tracking methods
  async trackAffiliateClick(insertClick: InsertAffiliateClick): Promise<AffiliateClick> {
    const id = this.currentAffiliateClickId++;
    const click: AffiliateClick = {
      ...insertClick,
      id,
      timestamp: new Date(),
      casinoId: insertClick.casinoId || null,
      userAgent: insertClick.userAgent || null,
      ipAddress: insertClick.ipAddress || null,
      referrer: insertClick.referrer || null,
    };
    this.affiliateClicks.set(id, click);
    return click;
  }

  async getAffiliateClicks(casinoId?: number): Promise<AffiliateClick[]> {
    const clicks = Array.from(this.affiliateClicks.values());
    if (casinoId !== undefined) {
      return clicks.filter(click => click.casinoId === casinoId);
    }
    return clicks.sort((a, b) => {
      const aTime = a.timestamp?.getTime() || 0;
      const bTime = b.timestamp?.getTime() || 0;
      return bTime - aTime;
    });
  }

  // User methods (existing)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
