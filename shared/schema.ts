import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const casinos = pgTable("casinos", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  logo: text("logo").notNull(),
  rating: integer("rating").notNull(), // Rating out of 5 (stored as 1-5)
  bonus: text("bonus").notNull(),
  bonusType: text("bonus_type").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  affiliateUrl: text("affiliate_url").notNull(),
  badge: text("badge"),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(), // Markdown content
  featuredImage: text("featured_image"),
  category: text("category").notNull(),
  readTime: integer("read_time").notNull(), // in minutes
  isPublished: boolean("is_published").default(false),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const affiliateClicks = pgTable("affiliate_clicks", {
  id: serial("id").primaryKey(),
  casinoId: integer("casino_id").references(() => casinos.id),
  casinoName: text("casino_name").notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  referrer: text("referrer"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertCasinoSchema = createInsertSchema(casinos).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAffiliateClickSchema = createInsertSchema(affiliateClicks).omit({
  id: true,
  timestamp: true,
});

export type InsertCasino = z.infer<typeof insertCasinoSchema>;
export type Casino = typeof casinos.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertAffiliateClick = z.infer<typeof insertAffiliateClickSchema>;
export type AffiliateClick = typeof affiliateClicks.$inferSelect;

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferSelect;

// Keep existing users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});
