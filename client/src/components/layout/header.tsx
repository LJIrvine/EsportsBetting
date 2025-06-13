import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or filter current page
      console.log("Searching for:", searchQuery);
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const NavLinks = () => (
    <>
      <Link href="/offers">
        <Button 
          variant="default"
          className="bg-secondary hover:bg-green-600 text-white px-4 py-2 text-sm font-medium"
        >
          All Betting Offers
        </Button>
      </Link>
      <Link href="/reviews">
        <Button 
          variant="ghost" 
          className={`px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/reviews") ? "text-primary bg-primary/10" : "text-neutral-500 hover:text-primary"
          }`}
        >
          Full Bookmaker Reviews
        </Button>
      </Link>
      <Link href="/resources">
        <Button 
          variant="ghost" 
          className={`px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/resources") ? "text-primary bg-primary/10" : "text-neutral-500 hover:text-primary"
          }`}
        >
          Betting Resources
        </Button>
      </Link>
    </>
  );

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary cursor-pointer">TopBetSite</h1>
              </Link>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-2">
              <NavLinks />
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <Input
                type="search"
                placeholder="Search offers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                  
                  {/* Mobile search */}
                  <form onSubmit={handleSearch} className="relative mt-4">
                    <Input
                      type="search"
                      placeholder="Search offers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </form>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
