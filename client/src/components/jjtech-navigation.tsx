import { Search } from "lucide-react";

export default function JJTechNavigation() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-black text-xs font-bold">JJ</span>
            </div>
            <span className="font-bold text-sm">JJ-TECH</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">IT Services</a>
            <a href="#" className="hover:text-gray-300 transition-colors">IT Training</a>
            <a href="#" className="hover:text-gray-300 transition-colors">PMO Services</a>
            <a href="#" className="hover:text-gray-300 transition-colors">About Us</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Our Partnerships</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Business Consulting</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Integrated Platform</a>
          </nav>

          {/* Search Icon */}
          <div className="flex items-center">
            <Search className="h-4 w-4 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}