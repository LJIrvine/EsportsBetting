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
    // Sample bookmakers
    const sampleCasinos: InsertCasino[] = [
      {
        name: "William Hill",
        slug: "william-hill",
        logo: "/logos/william-hill.svg",
        rating: 5,
        bonus: "£30",
        bonusType: "in Free Bets",
        description: "Britain's most trusted bookmaker with over 80 years of experience. Offering competitive odds on football, horse racing, and all major sports with excellent live streaming.",
        features: ["Live Streaming", "In-Play Betting", "Mobile App", "Cash Out"],
        affiliateUrl: "https://williamhill.com?affiliate=topbetsite",
        badge: "Most Trusted",
        isFeatured: true,
      },
      {
        name: "Bet365",
        slug: "bet365",
        logo: "/logos/bet365.svg",
        rating: 5,
        bonus: "Up to £100",
        bonusType: "in Bet Credits",
        description: "World's favourite online sports betting company. Comprehensive live streaming, extensive in-play betting options, and industry-leading mobile app.",
        features: ["Live Streaming", "In-Play Betting", "Best Odds", "Mobile App"],
        affiliateUrl: "https://bet365.com?affiliate=topbetsite",
        badge: "#1 Choice",
        isFeatured: true,
      },
      {
        name: "BetVictor",
        slug: "betvictor",
        logo: "/logos/betvictor.svg",
        rating: 4,
        bonus: "£25",
        bonusType: "Free Bet",
        description: "Premium sportsbook with enhanced odds and excellent customer service. Known for competitive football and horse racing markets.",
        features: ["Enhanced Odds", "Best Odds Guaranteed", "Live Streaming"],
        affiliateUrl: "https://betvictor.com?affiliate=topbetsite",
        badge: "Premium",
        isFeatured: true,
      },
      {
        name: "Betfred",
        slug: "betfred",
        logo: "/logos/betfred.svg",
        rating: 4,
        bonus: "£40",
        bonusType: "Free Bet Bundle",
        description: "The 'Bonus King' offering generous promotions and competitive odds. Strong focus on horse racing and football betting.",
        features: ["Daily Promotions", "Best Odds Guaranteed", "Live Results"],
        affiliateUrl: "https://betfred.com?affiliate=topbetsite",
        badge: "Bonus King",
        isFeatured: true,
      },
      {
        name: "Coral",
        slug: "coral",
        logo: "/logos/coral.svg",
        rating: 4,
        bonus: "£20",
        bonusType: "Free Bet",
        description: "Established high-street bookmaker with excellent online platform. Great odds on football and comprehensive racing coverage.",
        features: ["High Street Presence", "Live Streaming", "Cash Out"],
        affiliateUrl: "https://coral.co.uk?affiliate=topbetsite",
        badge: "High Street",
        isFeatured: true,
      },
      {
        name: "Ladbrokes",
        slug: "ladbrokes",
        logo: "/logos/ladbrokes.svg",
        rating: 4,
        bonus: "£25",
        bonusType: "Free Bet",
        description: "One of Britain's oldest bookmakers with a strong reputation for horse racing. Excellent odds and comprehensive betting markets.",
        features: ["Racing Specialist", "Live Streaming", "In-Shop Betting"],
        affiliateUrl: "https://ladbrokes.com?affiliate=topbetsite",
        badge: "Racing Expert",
        isFeatured: true,
      },
      {
        name: "Unibet",
        slug: "unibet",
        logo: "/logos/unibet.svg",
        rating: 4,
        bonus: "£40",
        bonusType: "Money Back + Bonus",
        description: "European operator with innovative features and competitive odds. Excellent mobile app and live betting platform.",
        features: ["Innovative Features", "Live Betting", "Multi-Sport Coverage"],
        affiliateUrl: "https://unibet.co.uk?affiliate=topbetsite",
        badge: "Innovation",
        isFeatured: true,
      },
      {
        name: "BetUK",
        slug: "betuk",
        logo: "/logos/betuk.svg",
        rating: 4,
        bonus: "£30",
        bonusType: "Free Bet",
        description: "British-focused bookmaker with competitive odds and excellent customer service. Strong football and racing markets.",
        features: ["British Focus", "Competitive Odds", "Fast Payouts"],
        affiliateUrl: "https://betuk.com?affiliate=topbetsite",
        badge: "New",
        isFeatured: true,
      },
      {
        name: "BoyleSports",
        slug: "boylesports",
        logo: "/logos/boylesports.svg",
        rating: 4,
        bonus: "£20",
        bonusType: "Free Bet",
        description: "Ireland's largest independent bookmaker with strong presence in UK market. Known for competitive football odds and extensive horse racing coverage.",
        features: ["Racing Specialist", "Competitive Football Odds", "Irish Heritage"],
        affiliateUrl: "https://boylesports.com?affiliate=topbetsite",
        badge: "Irish Leader",
        isFeatured: false,
      },
      {
        name: "BetMGM",
        slug: "betmgm",
        logo: "/logos/betmgm.svg",
        rating: 4,
        bonus: "£25",
        bonusType: "Free Bet",
        description: "MGM's premium sports betting platform with American backing and UK licensing. Strong focus on Premier League and major sporting events.",
        features: ["Premium Platform", "MGM Heritage", "Live Betting"],
        affiliateUrl: "https://betmgm.co.uk?affiliate=topbetsite",
        badge: "Premium",
        isFeatured: false,
      },
      {
        name: "Betano",
        slug: "betano",
        logo: "/logos/betano.svg",
        rating: 4,
        bonus: "£30",
        bonusType: "Free Bet",
        description: "European sports betting brand with strong focus on football. Official partner of major football clubs with competitive odds and promotions.",
        features: ["Football Focus", "European Expertise", "Club Partnerships"],
        affiliateUrl: "https://betano.co.uk?affiliate=topbetsite",
        badge: "Football Partner",
        isFeatured: false,
      },
      {
        name: "Virgin Bet",
        slug: "virgin-bet",
        logo: "/logos/virgin-bet.svg",
        rating: 4,
        bonus: "£20",
        bonusType: "Free Bet",
        description: "Virgin's sports betting platform with innovative features and customer-first approach. Known for transparent pricing and excellent user experience.",
        features: ["Virgin Innovation", "User-Friendly", "Transparent Pricing"],
        affiliateUrl: "https://virginbet.com?affiliate=topbetsite",
        badge: "Innovation",
        isFeatured: false,
      },
      {
        name: "Kwiff",
        slug: "kwiff",
        logo: "/logos/kwiff.svg",
        rating: 3,
        bonus: "£30",
        bonusType: "Free Bet",
        description: "Innovative betting platform known for random price boosts and enhanced odds. Young brand with unique approach to sports betting and engaging user experience.",
        features: ["Random Boosts", "Enhanced Odds", "Unique Experience"],
        affiliateUrl: "https://kwiff.com?affiliate=topbetsite",
        badge: "Unique",
        isFeatured: false,
      },
      {
        name: "Casumo",
        slug: "casumo",
        logo: "/logos/casumo.svg",
        rating: 4,
        bonus: "£25",
        bonusType: "Free Bet",
        description: "Multi-platform operator offering both sports betting and casino games. Known for excellent mobile experience and comprehensive sports coverage.",
        features: ["Multi-Platform", "Mobile Excellence", "Comprehensive Markets"],
        affiliateUrl: "https://casumo.com/sports?affiliate=topbetsite",
        badge: "Mobile Leader",
        isFeatured: false,
      },
      {
        name: "Bet442",
        slug: "bet442",
        logo: "/logos/bet442.svg",
        rating: 3,
        bonus: "£10",
        bonusType: "Free Bet",
        description: "Boutique sportsbook offering competitive odds and personalized service. Focus on providing value for regular punters with consistent pricing.",
        features: ["Competitive Odds", "Personal Service", "Value Focus"],
        affiliateUrl: "https://bet442.com?affiliate=topbetsite",
        badge: "Value",
        isFeatured: false,
      },
      {
        name: "Betrino",
        slug: "betrino",
        logo: "/logos/betrino.svg",
        rating: 3,
        bonus: "£20",
        bonusType: "Free Bet",
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
      };
      this.casinos.set(id, fullCasino);
    });

    // Sample blog posts
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Football Betting Strategy: Premier League Tips",
        slug: "football-betting-premier-league-tips",
        excerpt: "Master Premier League betting with our expert tips on form analysis, value betting, and in-play strategies for consistent profits...",
        content: `# Football Betting Strategy: Premier League Tips

## Form Analysis

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
    };
    this.casinos.set(id, casino);
    return casino;
  }

  async updateCasino(id: number, updates: Partial<InsertCasino>): Promise<Casino | undefined> {
    const casino = this.casinos.get(id);
    if (!casino) return undefined;
    
    const updatedCasino: Casino = { ...casino, ...updates };
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
    return posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
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
      updatedAt: new Date() 
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
    };
    this.affiliateClicks.set(id, click);
    return click;
  }

  async getAffiliateClicks(casinoId?: number): Promise<AffiliateClick[]> {
    const clicks = Array.from(this.affiliateClicks.values());
    if (casinoId !== undefined) {
      return clicks.filter(click => click.casinoId === casinoId);
    }
    return clicks.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
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
