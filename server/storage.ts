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
    // Sample casinos
    const sampleCasinos: InsertCasino[] = [
      {
        name: "Bet365 Casino",
        slug: "bet365",
        logo: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80",
        rating: 5,
        bonus: "$1000",
        bonusType: "Welcome Bonus",
        description: "Industry-leading casino with over 400 games, lightning-fast payouts, and 24/7 customer support. Licensed in multiple jurisdictions with proven fair gaming.",
        features: ["Live Dealer", "Mobile App", "Crypto Accepted", "24/7 Support"],
        affiliateUrl: "https://bet365.com?affiliate=casinohub",
        badge: "#1 Choice",
        isFeatured: true,
      },
      {
        name: "888 Casino",
        slug: "888casino",
        logo: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80",
        rating: 4,
        bonus: "$888",
        bonusType: "Sign-up Bonus",
        description: "Established operator with 25+ years in the industry. Features exclusive games, VIP rewards program, and some of the highest RTPs in the market.",
        features: ["Exclusive Games", "VIP Program", "High RTP"],
        affiliateUrl: "https://888casino.com?affiliate=casinohub",
        badge: "Hot Deal",
        isFeatured: true,
      },
      {
        name: "LeoVegas",
        slug: "leovegas",
        logo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80",
        rating: 4,
        bonus: "$1600",
        bonusType: "+ 200 Spins",
        description: "Award-winning mobile casino with the best mobile gaming experience. Features 1000+ games, instant deposits, and mobile-optimized live dealers.",
        features: ["Mobile First", "1000+ Games", "Instant Deposits"],
        affiliateUrl: "https://leovegas.com?affiliate=casinohub",
        badge: "Mobile King",
        isFeatured: true,
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
        title: "Essential Poker Strategy for Beginners",
        slug: "poker-strategy-beginners",
        excerpt: "Learn the fundamental poker strategies that every beginner needs to know. From hand selection to position play, master the basics...",
        content: `# Essential Poker Strategy for Beginners

## Hand Selection

The foundation of good poker play starts with knowing which hands to play...

## Position Matters

Position is one of the most important concepts in poker...

## Betting Patterns

Understanding how to read betting patterns will give you a significant edge...`,
        featuredImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
        category: "Strategy",
        readTime: 5,
        isPublished: true,
        metaTitle: "Essential Poker Strategy for Beginners - Complete Guide",
        metaDescription: "Master fundamental poker strategies with our beginner's guide. Learn hand selection, position play, and betting patterns to improve your game.",
      },
      {
        title: "Mobile Casino Trends to Watch in 2024",
        slug: "mobile-casino-trends-2024",
        excerpt: "Discover the latest mobile gaming innovations, from AR experiences to improved live dealer technology...",
        content: `# Mobile Casino Trends to Watch in 2024

## Augmented Reality Gaming

AR technology is revolutionizing mobile casino experiences...

## Enhanced Live Dealers

Mobile live dealer technology continues to improve...

## Cryptocurrency Integration

More mobile casinos are accepting crypto payments...`,
        featuredImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
        category: "Technology",
        readTime: 3,
        isPublished: true,
        metaTitle: "Mobile Casino Trends 2024 - Future of Mobile Gaming",
        metaDescription: "Explore the latest mobile casino trends including AR gaming, live dealers, and cryptocurrency integration shaping 2024.",
      },
      {
        title: "Complete Guide to Casino Bonuses",
        slug: "casino-bonus-guide",
        excerpt: "Understand wagering requirements, bonus types, and how to maximize your casino bonuses effectively...",
        content: `# Complete Guide to Casino Bonuses

## Types of Casino Bonuses

There are several types of bonuses available...

## Understanding Wagering Requirements

Wagering requirements determine how many times you must play through your bonus...

## Maximizing Bonus Value

Here are strategies to get the most from your bonuses...`,
        featuredImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240",
        category: "Bonuses",
        readTime: 7,
        isPublished: true,
        metaTitle: "Casino Bonus Guide - Types, Requirements & Tips",
        metaDescription: "Complete guide to casino bonuses including types, wagering requirements, and expert tips to maximize your bonus value.",
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
