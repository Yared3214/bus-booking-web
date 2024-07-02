import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div class="bg-gray-100">
    <main class="container mx-auto mt-10">
        <section class="bg-white p-8 rounded-lg shadow-lg">
            <Image width={50} height={50} src="https://i.ibb.co/TvFmtRP/pexels-madsdonald-1178448.jpg" alt="Bus" class="w-full h-64 object-cover rounded-lg mb-6"/>
            <h1 class="text-2xl font-semibold text-gray-800 mb-4">Book Your Ticket</h1>
            <p class="text-gray-600 mb-8">Enter your details to find the best bus routes.</p>
            <form class="space-y-4">
                <div>
                    <label for="name" class="block text-sm text-gray-700">Name</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"/>
                </div>
                <div>
                    <label for="phone" class="block text-sm text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"/>
                </div>
                <div>
                    <label for="source" class="block text-sm text-gray-700">Source</label>
                    <select id="source" name="source" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300">
                        <option value="">Select your source</option>
                         {/* Add options here --> */}
                    </select>
                </div>
                <div>
                    <label for="destination" class="block text-sm text-gray-700">Destination</label>
                    <select id="destination" name="destination" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300">
                        <option value="">Select your destination</option>
                         {/* Add options here --> */}
                    </select>
                </div>
                <div>
                    <label for="date" class="block text-sm text-gray-700">Date</label>
                    <input type="date" id="date" name="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"/>
                </div>
                <button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:ring focus:ring-green-300">Search Routes</button>
            </form>
        </section>
        <section class="mt-10">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Popular Routes</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                 {/* Route 1 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={50} height={50} src="" alt="Route 1" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Route 1</h3>
                        <p class="text-gray-600">City A to City B</p>
                    </div>
                </div>
                 {/* Route 2 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={50} height={50} src="" alt="Route 2" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Route 2</h3>
                        <p class="text-gray-600">City C to City D</p>
                    </div>
                </div>
                 {/* Route 3 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={50} height={50} src="" alt="Route 3" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Route 3</h3>
                        <p class="text-gray-600">City E to City F</p>
                    </div>
                </div>
                 {/* Route 4 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={50} height={50} src="" alt="Route 4" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Route 4</h3>
                        <p class="text-gray-600">City G to City H</p>
                    </div>
                </div>
                 {/* Route 5 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={50} height={50} src="" alt="Route 5" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Route 5</h3>
                        <p class="text-gray-600">City I to City J</p>
                    </div>
                </div>
            </div>
        </section>
    </main>


    </div>
  )
}

export default page

