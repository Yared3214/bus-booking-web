import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="bg-gray-900 text-white py-16">
        <div class="footer-container flex justify-around max-w-screen-xl mx-auto">
            <div class="footer-column flex-1 px-4">
                <Image width={50} height={50} src="" alt="Logo" class="footer-logo mb-4"/>
                <p>Brief description about the company.</p>
            </div>
            <div class="footer-column flex-1 px-4">
                <h3 class="text-xl mb-4">Useful Links</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:underline">Home</a></li>
                    <li><a href="#" class="hover:underline">About</a></li>
                    <li><a href="#" class="hover:underline">Services</a></li>
                    <li><a href="#" class="hover:underline">Contact</a></li>
                </ul>
            </div>
            <div class="footer-column flex-1 px-4">
                <h3 class="text-xl mb-4">Follow Us</h3>
                <ul class="social-media flex space-x-4">
                    <li><a href="#"><Image width={50} height={50} src="https://i.ibb.co/GcmzZjQ/facebook-1.png" alt="Facebook" class="w-6 h-6"/></a></li>
                    <li><a href="#"><Image width={50} height={50} src="https://i.ibb.co/0nfTpK5/twitter.png" alt="Twitter" class="w-6 h-6"/></a></li>
                    <li><a href="#"><Image width={50} height={50} src="https://i.ibb.co/bNXVKYM/social.png" alt="Instagram" class="w-6 h-6"/></a></li>
                    <li><a href="#"><Image width={50} height={50} src="https://i.ibb.co/j8SGRsk/linkedin.png" alt="LinkedIn" class="w-6 h-6"/></a></li>
                </ul>
            </div>
            <div class="footer-column flex-1 px-4">
                <h3 class="text-xl mb-4">Contact Us</h3>
                <p>1234 Street Name, City, State, 56789</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@example.com</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer