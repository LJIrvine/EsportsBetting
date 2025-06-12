import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, maxRating = 5, size = "md" }: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <Star
        key={i}
        className={`${sizeClasses[size]} ${
          i <= rating ? "text-accent fill-current" : "text-gray-300"
        }`}
      />
    );
  }

  return <div className="flex space-x-1">{stars}</div>;
}
