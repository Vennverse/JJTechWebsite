import { Search } from "lucide-react";
import { Link } from "wouter";
import { JJTechLogo } from "./jj-tech-logo";

export default function JJTechNavigation() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <JJTechLogo size="sm" className="text-white" />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/it-services" className="hover:text-gray-300 transition-colors">IT Services</Link>
            <Link href="/it-training" className="hover:text-gray-300 transition-colors">IT Training</Link>
            <Link href="/pmo-services" className="hover:text-gray-300 transition-colors">PMO Services</Link>
            <Link href="/about-us" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link href="/partnerships" className="hover:text-gray-300 transition-colors">Our Partnerships</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>

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