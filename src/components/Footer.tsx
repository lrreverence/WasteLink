
import { ArrowRight, Facebook, Globe, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-soil-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-earth-100">Ulikba Farm PH</h3>
            <p className="text-soil-300 mb-4">
              Promoting sustainable Black Soldier Fly farming across the Philippines to reduce food waste and create value from organic materials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-soil-300 hover:text-earth-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-soil-300 hover:text-earth-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-soil-300 hover:text-earth-300 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-earth-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-soil-300 hover:text-earth-300 transition-colors">About BSF Farming</a>
              </li>
              <li>
                <a href="#benefits" className="text-soil-300 hover:text-earth-300 transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-soil-300 hover:text-earth-300 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#success-stories" className="text-soil-300 hover:text-earth-300 transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-soil-300 hover:text-earth-300 transition-colors">Resources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-earth-100">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-earth-400" />
                <span className="text-soil-300">info@ulikbafarm.ph</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-earth-400" />
                <span className="text-soil-300">+63 (02) 1234 5678</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-earth-400" />
                <span className="text-soil-300">Manila, Philippines</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-earth-100">Join Our Newsletter</h4>
            <p className="text-soil-300 mb-4">
              Subscribe for updates on BSF farming techniques, events, and success stories.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 rounded-md bg-soil-700 border border-soil-600 text-white placeholder:text-soil-400 focus:outline-none focus:border-earth-400"
              />
              <Button className="w-full bg-earth-500 hover:bg-earth-600">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-soil-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-soil-400 text-sm">
              © {new Date().getFullYear()} Ulikba Farm PH. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-soil-400 hover:text-earth-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-soil-400 hover:text-earth-300 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
