"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      <section className="relative w-full h-[60vh]">
        <Image
          src="/masters-hero-image.webp"
          alt="The Masters Golf Tournament"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-8 left-6 md:left-12 flex flex-col gap-4">
          <h2 className="text-white text-3xl font-bold drop-shadow-lg">
            ALL YOUR GOLFING NEEDS IN ONE PLACE
          </h2>
          <Link 
            href="/search"
            className="bg-white text-green-800 px-8 py-2 rounded-md w-48 text-lg hover:bg-green-100 transition-colors text-center"
          >
            Explore Clubs
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 py-8 bg-white">
        <h2 className="text-2xl font-bold mb-6">New Listings</h2>
        <div className="overflow-hidden">
          <div className="flex gap-4 w-[calc(100%+240px)]">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[240px]">
              <div className="h-32 relative">
                <Image
                  src="/placeholder-club.jpg"
                  alt="Golf Club"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">Titleist Pro V1</h3>
                <p className="text-gray-600">$45.99</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[240px]">
              <div className="h-32 relative">
                <Image
                  src="/placeholder-club.jpg"
                  alt="Golf Club"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">TaylorMade Driver</h3>
                <p className="text-gray-600">$299.99</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[240px]">
              <div className="h-32 relative">
                <Image
                  src="/placeholder-club.jpg"
                  alt="Golf Club"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">Callaway Irons Set</h3>
                <p className="text-gray-600">$799.99</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[240px]">
              <div className="h-32 relative">
                <Image
                  src="/placeholder-club.jpg"
                  alt="Golf Club"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">Ping Putter</h3>
                <p className="text-gray-600">$199.99</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[240px]">
              <div className="h-32 relative">
                <Image
                  src="/placeholder-club.jpg"
                  alt="Golf Club"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">Golf Bag</h3>
                <p className="text-gray-600">$149.99</p>
              </div>
            </div>

            {/* Card 6 (Partial) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[240px]">
              <div className="h-32 relative">
                <Image
                  src="/placeholder-club.jpg"
                  alt="Golf Club"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">Golf Shoes</h3>
                <p className="text-gray-600">$129.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
