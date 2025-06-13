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
      <Link href="/offers" onClick={() => window.location.reload()}>
        <Button 
          variant="default"
          className="bg-secondary hover:bg-green-600 text-white px-4 py-2 text-sm font-medium"
        >
          All Betting Offers
        </Button>
      </Link>
      <Link href="/reviews" onClick={() => window.location.reload()}>
        <Button 
          variant="ghost" 
          className={`px-3 py-2 text-sm font-medium transition-colors ${
            isActive("/reviews") ? "text-primary bg-primary/10" : "text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary"
          }`}
        >
          Full Bookmaker Reviews
        </Button>
      </Link>
      <Link href="/resources" onClick={() => window.location.reload()}>
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
              <Link href="/" onClick={() => window.location.reload()}>
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-9 w-9 px-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
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
