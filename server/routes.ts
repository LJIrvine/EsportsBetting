import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCasinoSchema, insertBlogPostSchema, insertAffiliateClickSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Casino routes
  app.get("/api/casinos", async (req, res) => {
    try {
      const featured = req.query.featured === 'true';
      const casinos = featured ? await storage.getFeaturedCasinos() : await storage.getCasinos();
      res.json(casinos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch casinos" });
    }
  });

  app.get("/api/casinos/:slug", async (req, res) => {
    try {
      const casino = await storage.getCasinoBySlug(req.params.slug);
      if (!casino) {
        return res.status(404).json({ message: "Casino not found" });
      }
      res.json(casino);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch casino" });
    }
  });

  app.post("/api/casinos", async (req, res) => {
    try {
      const validatedData = insertCasinoSchema.parse(req.body);
      const casino = await storage.createCasino(validatedData);
      res.status(201).json(casino);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid casino data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create casino" });
    }
  });

  app.put("/api/casinos/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertCasinoSchema.partial().parse(req.body);
      const casino = await storage.updateCasino(id, validatedData);
      if (!casino) {
        return res.status(404).json({ message: "Casino not found" });
      }
      res.json(casino);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid casino data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update casino" });
    }
  });

  app.delete("/api/casinos/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteCasino(id);
      if (!deleted) {
        return res.status(404).json({ message: "Casino not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete casino" });
    }
  });

  // Blog routes
  app.get("/api/blog", async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : req.query.published === 'false' ? false : undefined;
      const posts = await storage.getBlogPosts(published);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid blog post data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create blog post" });
    }
  });

  app.put("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(id, validatedData);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid blog post data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update blog post" });
    }
  });

  app.delete("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteBlogPost(id);
      if (!deleted) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete blog post" });
    }
  });

  // Affiliate tracking routes
  app.post("/api/track-click", async (req, res) => {
    try {
      const validatedData = insertAffiliateClickSchema.parse({
        ...req.body,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        referrer: req.get('Referer'),
      });
      const click = await storage.trackAffiliateClick(validatedData);
      res.status(201).json(click);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid tracking data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to track click" });
    }
  });

  app.get("/api/analytics/clicks", async (req, res) => {
    try {
      const casinoId = req.query.casinoId ? parseInt(req.query.casinoId as string) : undefined;
      const clicks = await storage.getAffiliateClicks(casinoId);
      res.json(clicks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch analytics data" });
    }
  });

  // Redirect route for affiliate links
  app.get("/goto/:slug", async (req, res) => {
    try {
      const casino = await storage.getCasinoBySlug(req.params.slug);
      if (!casino) {
        return res.status(404).json({ message: "Casino not found" });
      }

      // Track the click
      await storage.trackAffiliateClick({
        casinoId: casino.id,
        casinoName: casino.name,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        referrer: req.get('Referer'),
      });

      // Redirect to affiliate URL
      res.redirect(casino.affiliateUrl);
    } catch (error) {
      res.status(500).json({ message: "Failed to process redirect" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
