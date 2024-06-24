import React from 'react'
import Image from 'next/image'

function SignInPage() {
  return (
    <div class="w-full max-w-[1000px] ml-[100px]">
        <div class="mt-10 mb-8">
            <Image src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Traveler Banner" class="w-full h-[200px] rounded-lg object-cover" width={50} height={50}/>
        </div>
        <h1 class="text-2xl font-semibold mb-2">Welcome to Traveler</h1>
        <p class="text-gray-600 mb-6">Explore the world, connect with locals, and take the trip of a lifetime.</p>
        <form>
            <div class="mb-4">
                <label for="email" class="block text-gray-700">Email</label>
                <input
                placeholder="email"
                class="form-input flex w-[500px] min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700">Password</label>
                <input
                placeholder="password"
                class="form-input flex w-[500px] min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
                
              />
            </div>
            <button type="submit" class="w-[500px] px-4 py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">Log in</button>
        </form>
        <div class="my-4 flex items-center">
            <hr class="flex-grow border-t border-gray-300"/>
            <span class="mx-2 text-gray-500">or</span>
            <hr class="flex-grow border-t border-gray-300"/>
        </div>
        <button class="w-[500px] px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <Image src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" class="inline w-5 h-5 mr-2"
            width={50} height={50}/> Continue with Google
        </button>
        <div class="mt-4 text-center">
            <p class="text-gray-600">Don't have an account? <a href="#" class="text-brown-600 hover:underline">Sign up</a></p>
        </div>
    </div>
  )
}

export default SignInPage