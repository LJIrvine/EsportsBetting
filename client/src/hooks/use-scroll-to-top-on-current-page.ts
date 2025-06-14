import { useLocation } from "wouter";
import { useEffect } from "react";

export function useScrollToTopOnCurrentPage() {
  const [location] = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleClick = (targetPath: string) => {
    if (location === targetPath || (location === "/" && targetPath === "/")) {
      scrollToTop();
    }
  };

  return { handleClick };
}