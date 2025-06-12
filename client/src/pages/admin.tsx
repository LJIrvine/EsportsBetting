import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertCasinoSchema, insertBlogPostSchema } from "@shared/schema";
import { Plus, Edit, Trash, Eye, BarChart } from "lucide-react";
import type { Casino, BlogPost, AffiliateClick } from "@shared/schema";
import { z } from "zod";

const casinoFormSchema = insertCasinoSchema.extend({
  features: z.string().transform(val => val.split(',').map(s => s.trim()).filter(Boolean)),
});

const blogFormSchema = insertBlogPostSchema;

export default function Admin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("casinos");
  const [editingCasino, setEditingCasino] = useState<Casino | null>(null);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const { data: casinos = [] } = useQuery<Casino[]>({
    queryKey: ["/api/casinos"],
  });

  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const { data: analytics = [] } = useQuery<AffiliateClick[]>({
    queryKey: ["/api/analytics/clicks"],
  });

  // Casino form
  const casinoForm = useForm({
    resolver: zodResolver(casinoFormSchema),
    defaultValues: {
      name: "",
      slug: "",
      logo: "",
      rating: 5,
      bonus: "",
      bonusType: "",
      description: "",
      features: "",
      affiliateUrl: "",
      badge: "",
      isFeatured: false,
    },
  });

  // Blog form
  const blogForm = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featuredImage: "",
      category: "",
      readTime: 5,
      isPublished: false,
      metaTitle: "",
      metaDescription: "",
    },
  });

  // Casino mutations
  const createCasinoMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/casinos", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/casinos"] });
      casinoForm.reset();
      toast({ title: "Casino created successfully!" });
    },
    onError: () => {
      toast({ title: "Failed to create casino", variant: "destructive" });
    },
  });

  const updateCasinoMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) => 
      apiRequest("PUT", `/api/casinos/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/casinos"] });
      setEditingCasino(null);
      casinoForm.reset();
      toast({ title: "Casino updated successfully!" });
    },
    onError: () => {
      toast({ title: "Failed to update casino", variant: "destructive" });
    },
  });

  const deleteCasinoMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/casinos/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/casinos"] });
      toast({ title: "Casino deleted successfully!" });
    },
    onError: () => {
      toast({ title: "Failed to delete casino", variant: "destructive" });
    },
  });

  // Blog mutations
  const createBlogMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/blog", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      blogForm.reset();
      toast({ title: "Blog post created successfully!" });
    },
    onError: () => {
      toast({ title: "Failed to create blog post", variant: "destructive" });
    },
  });

  const updateBlogMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) => 
      apiRequest("PUT", `/api/blog/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setEditingPost(null);
      blogForm.reset();
      toast({ title: "Blog post updated successfully!" });
    },
    onError: () => {
      toast({ title: "Failed to update blog post", variant: "destructive" });
    },
  });

  const deleteBlogMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/blog/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Blog post deleted successfully!" });
    },
    onError: () => {
      toast({ title: "Failed to delete blog post", variant: "destructive" });
    },
  });

  // Form handlers
  const onCasinoSubmit = (data: any) => {
    if (editingCasino) {
      updateCasinoMutation.mutate({ id: editingCasino.id, data });
    } else {
      createCasinoMutation.mutate(data);
    }
  };

  const onBlogSubmit = (data: any) => {
    if (editingPost) {
      updateBlogMutation.mutate({ id: editingPost.id, data });
    } else {
      createBlogMutation.mutate(data);
    }
  };

  const startEditingCasino = (casino: Casino) => {
    setEditingCasino(casino);
    casinoForm.reset({
      ...casino,
      features: casino.features.join(', '),
    });
  };

  const startEditingPost = (post: BlogPost) => {
    setEditingPost(post);
    blogForm.reset(post);
  };

  const cancelEditing = () => {
    setEditingCasino(null);
    setEditingPost(null);
    casinoForm.reset();
    blogForm.reset();
  };

  return (
    <>
      <SEOHead 
        title="Admin Panel - Content Management | CasinoHub"
        description="Manage casinos, blog posts, and track affiliate performance."
      />
      
      <div className="min-h-screen bg-neutral-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-800 mb-2">Admin Panel</h1>
            <p className="text-neutral-600">Manage your casino listings and blog content</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="casinos">Casinos</TabsTrigger>
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="casinos" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Casino Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {editingCasino ? <Edit className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      {editingCasino ? 'Edit Casino' : 'Add New Casino'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...casinoForm}>
                      <form onSubmit={casinoForm.handleSubmit(onCasinoSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={casinoForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={casinoForm.control}
                            name="slug"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Slug</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={casinoForm.control}
                          name="logo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Logo URL</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-3 gap-4">
                          <FormField
                            control={casinoForm.control}
                            name="rating"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Rating (1-5)</FormLabel>
                                <FormControl>
                                  <Input type="number" min="1" max="5" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={casinoForm.control}
                            name="bonus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Bonus</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={casinoForm.control}
                            name="bonusType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Bonus Type</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={casinoForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea {...field} rows={3} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={casinoForm.control}
                          name="features"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Features (comma-separated)</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Live Dealer, Mobile App, Crypto" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={casinoForm.control}
                            name="affiliateUrl"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Affiliate URL</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={casinoForm.control}
                            name="badge"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Badge (optional)</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={casinoForm.control}
                          name="isFeatured"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <FormLabel>Featured Casino</FormLabel>
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-2">
                          <Button 
                            type="submit" 
                            disabled={createCasinoMutation.isPending || updateCasinoMutation.isPending}
                          >
                            {editingCasino ? 'Update' : 'Create'} Casino
                          </Button>
                          {editingCasino && (
                            <Button type="button" variant="outline" onClick={cancelEditing}>
                              Cancel
                            </Button>
                          )}
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>

                {/* Casino List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Existing Casinos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {casinos.map((casino) => (
                        <div key={casino.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{casino.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <span>⭐ {casino.rating}/5</span>
                              <span>•</span>
                              <span>{casino.bonus}</span>
                              {casino.isFeatured && <Badge variant="secondary">Featured</Badge>}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => startEditingCasino(casino)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => deleteCasinoMutation.mutate(casino.id)}
                              disabled={deleteCasinoMutation.isPending}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="blog" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Blog Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {editingPost ? <Edit className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      {editingPost ? 'Edit Blog Post' : 'Create New Post'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...blogForm}>
                      <form onSubmit={blogForm.handleSubmit(onBlogSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={blogForm.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={blogForm.control}
                            name="slug"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Slug</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={blogForm.control}
                          name="excerpt"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Excerpt</FormLabel>
                              <FormControl>
                                <Textarea {...field} rows={2} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={blogForm.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Content (Markdown)</FormLabel>
                              <FormControl>
                                <Textarea {...field} rows={8} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={blogForm.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={blogForm.control}
                            name="readTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Read Time (minutes)</FormLabel>
                                <FormControl>
                                  <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={blogForm.control}
                          name="featuredImage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Featured Image URL</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={blogForm.control}
                            name="metaTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Meta Title</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={blogForm.control}
                            name="metaDescription"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Meta Description</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={blogForm.control}
                          name="isPublished"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <FormLabel>Published</FormLabel>
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-2">
                          <Button 
                            type="submit" 
                            disabled={createBlogMutation.isPending || updateBlogMutation.isPending}
                          >
                            {editingPost ? 'Update' : 'Create'} Post
                          </Button>
                          {editingPost && (
                            <Button type="button" variant="outline" onClick={cancelEditing}>
                              Cancel
                            </Button>
                          )}
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>

                {/* Blog List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Existing Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {blogPosts.map((post) => (
                        <div key={post.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{post.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <Badge variant="outline">{post.category}</Badge>
                              <span>{post.readTime} min</span>
                              {post.isPublished ? (
                                <Badge className="bg-green-100 text-green-800">Published</Badge>
                              ) : (
                                <Badge variant="outline">Draft</Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => startEditingPost(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => deleteBlogMutation.mutate(post.id)}
                              disabled={deleteBlogMutation.isPending}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    Affiliate Click Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800">Total Clicks</h3>
                        <p className="text-2xl font-bold text-blue-600">{analytics.length}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800">Unique Casinos</h3>
                        <p className="text-2xl font-bold text-green-600">
                          {new Set(analytics.map(click => click.casinoName)).size}
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-800">Today's Clicks</h3>
                        <p className="text-2xl font-bold text-purple-600">
                          {analytics.filter(click => 
                            new Date(click.timestamp).toDateString() === new Date().toDateString()
                          ).length}
                        </p>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 p-2 text-left">Casino</th>
                            <th className="border border-gray-200 p-2 text-left">Timestamp</th>
                            <th className="border border-gray-200 p-2 text-left">User Agent</th>
                          </tr>
                        </thead>
                        <tbody>
                          {analytics.slice(0, 10).map((click) => (
                            <tr key={click.id}>
                              <td className="border border-gray-200 p-2">{click.casinoName}</td>
                              <td className="border border-gray-200 p-2">
                                {new Date(click.timestamp).toLocaleString()}
                              </td>
                              <td className="border border-gray-200 p-2 text-sm text-gray-600">
                                {click.userAgent?.slice(0, 50)}...
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <Footer />
      </div>
    </>
  );
}
