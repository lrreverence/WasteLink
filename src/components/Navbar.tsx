import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-earth-600 text-xl font-bold">WasteLink</span>
            <span className="hidden sm:inline-block bg-earth-500 text-white px-2 py-0.5 rounded-md text-xs">PH</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-soil-800 hover:text-earth-600 transition-colors">
            About BSF
          </a>
          <a href="#benefits" className="text-soil-800 hover:text-earth-600 transition-colors">
            Benefits
          </a>
          <a href="#how-it-works" className="text-soil-800 hover:text-earth-600 transition-colors">
            How It Works
          </a>
          <a href="#success-stories" className="text-soil-800 hover:text-earth-600 transition-colors">
            Success Stories
          </a>
          <Button variant="default" className="bg-earth-500 hover:bg-earth-600">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-soil-800 hover:text-earth-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About BSF
            </a>
            <a 
              href="#benefits" 
              className="text-soil-800 hover:text-earth-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#how-it-works" 
              className="text-soil-800 hover:text-earth-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#success-stories" 
              className="text-soil-800 hover:text-earth-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </a>
            <Button 
              variant="default" 
              className="bg-earth-500 hover:bg-earth-600 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
