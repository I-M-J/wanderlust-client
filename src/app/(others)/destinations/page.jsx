import DestinationCard from '@/components/DestinationCard';

export const dynamic = 'force-dynamic';

// const FALLBACK_DESTINATIONS = [
//     {
//         "name": "Bali Paradise Getaway",
//         "country": "Indonesia",
//         "category": "Beach",
//         "price": 1299,
//         "duration": "7 Days/6 Nights",
//         "departureDate": "2026-08-15",
//         "imageUrl": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
//         "description": "Escape to the beautiful beaches of Bali. Experience luxurious resorts, rich cultural heritage, vibrant marine life, and stunning sunsets over pristine waters."
//     },
//     {
//         "name": "Maldives Overwater Sanctuary",
//         "country": "Maldives",
//         "category": "Beach",
//         "price": 3499,
//         "duration": "5 Days/4 Nights",
//         "departureDate": "2026-09-01",
//         "imageUrl": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
//         "description": "Indulge in a premium overwater villa experience. Swim with manta rays, enjoy private dining on white sandbanks, and experience absolute tropical luxury."
//     },
//     {
//         "name": "Swiss Alps Ski & Hike",
//         "country": "Switzerland",
//         "category": "Mountain",
//         "price": 2499,
//         "duration": "8 Days/7 Nights",
//         "departureDate": "2026-12-10",
//         "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
//         "description": "Breathtaking panoramas await you in the Swiss Alps. Enjoy top-tier skiing in winter or scenic alpine wildflower hiking trails during the warmer months."
//     },
//     {
//         "name": "Patagonia Wilderness Explorer",
//         "country": "Argentina",
//         "category": "Mountain",
//         "price": 1899,
//         "duration": "10 Days/9 Nights",
//         "departureDate": "2026-11-05",
//         "imageUrl": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
//         "description": "Embark on an epic trek across the dramatic landscapes of Patagonia. Discover majestic glaciers, turquoise lakes, and towering granite peaks."
//     },
//     {
//         "name": "Tokyo Neon & Tradition",
//         "country": "Japan",
//         "category": "City",
//         "price": 2199,
//         "duration": "6 Days/5 Nights",
//         "departureDate": "2026-10-20",
//         "imageUrl": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
//         "description": "Immerse yourself in the world's most dynamic metropolis. Explore futuristic skyscrapers in Shinjuku, historical temples in Asakusa, and culinary excellence."
//     },
//     {
//         "name": "Classic Paris Getaway",
//         "country": "France",
//         "category": "City",
//         "price": 1799,
//         "duration": "5 Days/4 Nights",
//         "departureDate": "2026-09-15",
//         "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
//         "description": "Stroll down the Champs-Élysées, admire the Louvre's treasures, and view the iconic Eiffel Tower illuminated at night. A timeless city escape."
//     },
//     {
//         "name": "Queenstown Adventure Hub",
//         "country": "New Zealand",
//         "category": "Adventure",
//         "price": 2699,
//         "duration": "9 Days/8 Nights",
//         "departureDate": "2026-11-18",
//         "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
//         "description": "The ultimate destination for thrill-seekers. Go bungee jumping, jet boating, skydiving, and skiing in one of the most stunning settings on earth."
//     },
//     {
//         "name": "Costa Rica Eco-Adventure",
//         "country": "Costa Rica",
//         "category": "Adventure",
//         "price": 1499,
//         "duration": "7 Days/6 Nights",
//         "departureDate": "2026-08-25",
//         "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
//         "description": "Navigate through lush rainforests, zipline past active volcanoes, spot unique exotic wildlife, and unwind at natural hot springs."
//     },
//     {
//         "name": "Kyoto Ancient Temples",
//         "country": "Japan",
//         "category": "Cultural",
//         "price": 1999,
//         "duration": "7 Days/6 Nights",
//         "departureDate": "2026-10-12",
//         "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
//         "description": "Step back in time as you wander through bamboo forests, walk beneath thousands of red torii gates, and witness traditional tea ceremonies."
//     },
//     {
//         "name": "Giza & Nile Explorer",
//         "country": "Egypt",
//         "category": "Cultural",
//         "price": 1599,
//         "duration": "8 Days/7 Nights",
//         "departureDate": "2026-10-05",
//         "imageUrl": "https://images.unsplash.com/photo-1503177119275-0aa32b31d468?auto=format&fit=crop&w=1200&q=80",
//         "description": "Unravel the mysteries of ancient Egypt. Visit the Pyramids of Giza, the Great Sphinx, and sail down the historic Nile River on a traditional felucca."
//     },
//     {
//         "name": "Santorini Sunset Villa",
//         "country": "Greece",
//         "category": "Luxury",
//         "price": 2999,
//         "duration": "6 Days/5 Nights",
//         "departureDate": "2026-09-08",
//         "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
//         "description": "Relax in a private infinity pool overlooking the Aegean caldera. Experience Michelin-starred dining and the world's most beautiful sunsets."
//     },
//     {
//         "name": "Dubai Desert Palace Resort",
//         "country": "UAE",
//         "category": "Luxury",
//         "price": 3999,
//         "duration": "5 Days/4 Nights",
//         "departureDate": "2026-11-01",
//         "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
//         "description": "Experience five-star luxury in the middle of the Arabian desert. Enjoy camel riding, dune bashing, and world-class spa treatments."
//     }
// ];

const DestinationsPage = async () => {
    let destinations = [];
    try {
        const res = await fetch("http://localhost:5000/destinations", { cache: 'no-store' });

        // console.log(res);

        if (res.ok) {
            destinations = await res.json();
        }
    } catch (error) {
        console.error("Error fetching destinations: ", error);
    }

    // If API returned an empty list, use fallback list
    // if (!destinations || destinations.length === 0) {
    //     destinations = FALLBACK_DESTINATIONS;
    // }

    return (
        <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-20">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-10 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black-c0 font-normal tracking-tight leading-tight">
                        Explore All Destinations
                    </h1>
                    <p className="mt-3 text-lg text-gray-6c">
                        Find your perfect travel experience from our curated collection
                    </p>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col md:flex-row border border-white-ee bg-white mb-6">
                    {/* Category Select */}
                    <div className="flex-1 relative border-b md:border-b-0 md:border-r border-white-ee">
                        <select className="w-full bg-transparent px-6 py-5 appearance-none focus:outline-none text-black-c0 font-semibold tracking-wider text-xs md:text-sm cursor-pointer pr-12 uppercase">
                            <option value="ALL">CATEGORY</option>
                            <option value="BEACH">BEACH</option>
                            <option value="MOUNTAIN">MOUNTAIN</option>
                            <option value="CITY">CITY</option>
                            <option value="ADVENTURE">ADVENTURE</option>
                            <option value="CULTURAL">CULTURAL</option>
                            <option value="LUXURY">LUXURY</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-b6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Price Range Select */}
                    <div className="flex-1 relative border-b md:border-b-0 md:border-r border-white-ee">
                        <select className="w-full bg-transparent px-6 py-5 appearance-none focus:outline-none text-black-c0 font-semibold tracking-wider text-xs md:text-sm cursor-pointer pr-12 uppercase">
                            <option value="ALL">PRICE RANGE</option>
                            <option value="UNDER_1500">UNDER $1500</option>
                            <option value="1500_2500">$1500 - $2500</option>
                            <option value="ABOVE_2500">ABOVE $2500</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-b6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Sort By Select */}
                    <div className="flex-1 relative">
                        <select className="w-full bg-transparent px-6 py-5 appearance-none focus:outline-none text-black-c0 font-semibold tracking-wider text-xs md:text-sm cursor-pointer pr-12 uppercase">
                            <option value="DEFAULT">SORT BY</option>
                            <option value="PRICE_LOW_TO_HIGH">PRICE: LOW TO HIGH</option>
                            <option value="PRICE_HIGH_TO_LOW">PRICE: HIGH TO LOW</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-b6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Showing Count */}
                <div className="text-gray-6c text-sm sm:text-base mb-8 text-center lg:text-left font-medium">
                    Showing {destinations.length} {destinations.length === 1 ? 'destination' : 'destinations'}
                </div>

                {/* Grid of Destinations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {
                        destinations.map((dest) =>
                            <DestinationCard key={dest._id} dest={dest} />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default DestinationsPage;


