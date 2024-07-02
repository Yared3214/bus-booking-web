import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div >
        <main class="container mx-auto mt-10">
        <section class="bg-white p-8 rounded-lg ">
            <Image width={2069} height={250} src="https://i.ibb.co/TvFmtRP/pexels-madsdonald-1178448.jpg" alt="Bus" class="w-full h-64 object-cover rounded-lg mb-6"/>
            <h1 class="text-3xl font-bold mb-4">Book Your Ticket</h1>
            <p class="text-[#A18249] mb-8">Enter your details to find the best bus routes.</p>
            <form class="space-y-4">
                <div>
                    <label for="name" class="block text-md font-semibold text-gray-700">Name</label>
                    <input type="text" id="name" name="name" class="w-2/5 px-4 py-2 border-2 border-[#f4efe6] text-[#1C160C] rounded-lg placeholder:text-[#A18249] focus:border-none"
                    placeholder='Enter your full name'/>
                </div>
                <div>
                    <label for="phone" class="block text-md font-semibold text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" name="phone" class="w-2/5 px-4 py-2 border-2 border-[#f4efe6] text-[#1C160C] rounded-lg placeholder:text-[#A18249] focus:border-none"
                    placeholder='Enter your phone number'/>
                </div>
                <div>
                    <label for="source" class="block text-md font-semibold text-gray-700">Source</label>
                    <select id="source" name="source" class="w-2/5 px-4 py-2 border-2 border-[#f4efe6] text-[#1C160C] rounded-lg placeholder:text-[#A18249] focus:border-none">
                        <option value="">Select your source</option>
                         {/* Add options here --> */}
                    </select>
                </div>
                <div>
                    <label for="destination" class="block text-md font-semibold text-gray-700">Destination</label>
                    <select id="destination" name="destination" class="w-2/5 px-4 py-2 border-2 border-[#f4efe6] text-[#1C160C] rounded-lg placeholder:text-[#A18249] focus:border-none">
                        <option value="">Select your destination</option>
                         {/* Add options here --> */}
                    </select>
                </div>
                <div>
                    <label for="date" class="block text-md font-semibold text-gray-700">Date</label>
                    <input type="date" id="date" name="date" class="w-2/5 px-4 py-2 border-2 border-[#f4efe6] text-[#1C160C] rounded-lg placeholder:text-[#A18249] focus:border-none"/>
                </div>
                <button type="submit" class="w-2/5 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:ring focus:ring-green-300">Search Routes</button>
            </form>
        </section>
        <section class="mt-10">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Popular Routes</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                 {/* Route 1 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={2069} height={250} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Addis_abeba_meskele_square_%28cropped%29.jpg/272px-Addis_abeba_meskele_square_%28cropped%29.jpg" 
                    alt="Route 1" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Addis Ababa</h3>
                    </div>
                </div>
                 {/* Route 2 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={2069} height={250} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/59/a7/bd/l-hotel-domine-le-lac.jpg?w=1400&h=1400&s=1" 
                    alt="Route 2" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Hawassa</h3>
                    </div>
                </div>
                 {/* Route 3 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={2069} height={250} src="https://borkena.com/wp-content/uploads/2024/03/Bahir-Dar-Security-Update.jpg" alt="Route 3" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Bahirdar</h3>
                    </div>
                </div>
                 {/* Route 4 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={2069} height={250} src="https://www.historyhit.com/app/uploads/2020/11/Harar-Jugol.jpg" alt="Route 4" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Harer</h3>
                    </div>
                </div>
                 {/* Route 5 --> */}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image width={2069} height={250} src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSnh6RWdB1MxRneRHdU3zETh57UbgD6saX9AhNZ7FnJT3sU7CLx7bA03dnBp0DFdA13T1fWmycG1K_YEZ4EZ7eJMicRb1K2D1O5o1LuBQ" alt="Route 5" class="w-full h-32 object-cover"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">Gonder</h3>
                    </div>
                </div>
            </div>
        </section>
    </main>


    </div>
  )
}

export default page

