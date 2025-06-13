import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export default function Header() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

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
            isActive("/reviews") ? "text-primary bg-primary/10" : "text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary"
          }`}
        >
          Full Bookmaker Reviews
        </Button>
      </Link>
      <Link href="/resources">
        <Button 
          variant="ghost" 
          className={`px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/resources") ? "text-primary bg-primary/10" : "text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary"
          }`}
        >
          Betting Resources
        </Button>
      </Link>
    </>
  );

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary dark:text-primary cursor-pointer">
                  TopBetSite<span className="text-sm">.co.uk</span>
                </h1>
              </Link>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-2">
              <NavLinks />
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative w-16 h-8 bg-gray-200 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle theme"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                  theme === "dark" ? "translate-x-8" : "translate-x-0"
                }`}
              >
                {theme === "light" ? (
                  <Sun className="h-3 w-3 text-yellow-500" />
                ) : (
                  <Moon className="h-3 w-3 text-blue-600" />
                )}
              </div>
              
              {/* Background decorations */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Sun side (left) */}
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <Sun className={`h-3 w-3 text-yellow-400 transition-opacity duration-300 ${
                    theme === "light" ? "opacity-0" : "opacity-100"
                  }`} />
                </div>
                
                {/* Moon side (right) */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Moon className={`h-3 w-3 text-blue-400 transition-opacity duration-300 ${
                    theme === "dark" ? "opacity-0" : "opacity-100"
                  }`} />
                </div>
                
                {/* Stars for dark side */}
                <div className={`absolute right-1 top-1 w-1 h-1 bg-yellow-300 rounded-full transition-opacity duration-300 ${
                  theme === "dark" ? "opacity-0" : "opacity-60"
                }`}></div>
                <div className={`absolute right-3 top-3 w-0.5 h-0.5 bg-yellow-300 rounded-full transition-opacity duration-300 ${
                  theme === "dark" ? "opacity-0" : "opacity-40"
                }`}></div>
              </div>
            </button>
            
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
