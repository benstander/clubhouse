"use client"
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

const categories = [
  "All listings",
  "New",
  "Featured",
  "Drivers",
  "Putters",
  "Irons",
  "Wedges",
  "Bags",
  "Apparel",
  "Shoes",
  "Balls",
  "Accessories"
];

export default function SearchPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header showSearch={true} />

      {/* Categories Section */}
      <div className="border-b sticky top-0 bg-white z-10">
        <div className="px-6 md:px-12 relative flex items-center">
          <div className="flex-1">
            <div className="flex justify-between pr-32">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/search${category === 'All listings' ? '' : `?category=${category.toLowerCase()}`}`}
                  className={`
                    text-gray-500 transition-colors whitespace-nowrap text-base
                    py-4 flex items-center relative font-[550]
                    hover:text-gray-800
                    ${category === 'All listings' ? 'text-gray-800' : ''}
                  `}
                  style={{ fontVariationSettings: "'wght' 550" }}
                >
                  {category}
                  {category === 'All listings' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-800" />
                  )}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Filters Button */}
          <div className="absolute right-6 md:right-12 top-0 h-full flex items-center">
            <button className="flex items-center gap-2 border rounded-[5px] px-4 py-2 hover:shadow-md transition-all text-black bg-white">
              <Image
                src="/filter-icon.svg"
                alt="Filters"
                width={16}
                height={16}
              />
              Filters
            </button>
          </div>
        </div>
      </div>

      <main className="px-6 md:px-12 py-8">
        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/placeholder-club.jpg"
                alt="Golf Club"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Titleist Pro V1</h3>
              <p className="text-gray-600">$45.99</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/placeholder-club.jpg"
                alt="Golf Club"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">TaylorMade Driver</h3>
              <p className="text-gray-600">$299.99</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/placeholder-club.jpg"
                alt="Golf Club"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Callaway Irons Set</h3>
              <p className="text-gray-600">$799.99</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/placeholder-club.jpg"
                alt="Golf Club"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Ping Putter</h3>
              <p className="text-gray-600">$199.99</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/placeholder-club.jpg"
                alt="Golf Club"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Golf Bag</h3>
              <p className="text-gray-600">$149.99</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/placeholder-club.jpg"
                alt="Golf Club"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Golf Shoes</h3>
              <p className="text-gray-600">$129.99</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 