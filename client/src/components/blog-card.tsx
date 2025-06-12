import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {post.featuredImage && (
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-neutral-500 mb-3">
          <Badge variant="outline">{post.category}</Badge>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-neutral-800 mb-3 hover:text-primary transition-colors cursor-pointer">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-neutral-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        
        <Link href={`/blog/${post.slug}`}>
          <button className="text-primary hover:text-blue-700 font-medium inline-flex items-center transition-colors">
            Read More 
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </Link>
      </CardContent>
    </Card>
  );
}
