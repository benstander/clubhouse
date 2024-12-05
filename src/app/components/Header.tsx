import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  showSearch?: boolean;
}

export default function Header({ showSearch = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="px-6 md:px-12 flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-green-800">
          Clubhouse
        </Link>
        
        {showSearch && (
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search golf equipment..."
                className="w-full px-4 py-2 border border-gray-300 rounded-[60px] focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent pr-10 text-black placeholder-gray-500"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Image
                  src="/search-icon.svg"
                  alt="Search"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          <button className="text-black px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors">
            Create a listing
          </button>
          <button 
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/hamburger-icon.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-6 top-16 bg-white shadow-lg rounded-md py-2 w-48 z-50">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-black">
            Home
          </Link>
          <Link href="/search" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-black">
            Search
          </Link>
          <Link href="/signup" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-black">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
} 