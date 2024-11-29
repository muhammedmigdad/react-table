import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer class="bg-[#000] mt-8 text-gray-100 py-8">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h1 class="text-xl font-bold mb-4">About Us</h1>
                        <p class="text-gray-400">
                            We are a leading photography company dedicated to capturing life's most beautiful moments. Our team of skilled photographers is passionate about creating memories that last a lifetime.
                        </p>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold mb-4">Quick Links</h1>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-white">Home</a></li>
                            <li><a href="#" class="hover:text-white">About</a></li>
                            <li><a href="#" class="hover:text-white">Gallery</a></li>
                            <li><a href="#" class="hover:text-white">Portfolio</a></li>
                            <li><a href="#" class="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold mb-4">Follow Us</h1>
                        <div class="flex space-x-4 mb-4">
                            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white">
                                <i class="fab fa-facebook"></i> <span>Facebook</span>
                            </a>
                            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white">
                                <i class="fab fa-twitter"></i> <span>Twitter</span>
                            </a>
                            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white">
                                <i class="fab fa-instagram"></i> <span>Instagram</span>
                            </a>
                        </div>
                        <h1 class="text-xl font-bold mb-2">Contact Us</h1>
                        <p class="text-gray-400">Email: info@photography.com</p>
                        <p class="text-gray-400">Phone: +123 456 7890</p>
                    </div>
                </div>

                <hr class="my-8 border-gray-600" />

                <div class="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
                    <p>&copy; 2024 Photography Co. All rights reserved.</p>
                    <ul class="flex space-x-4 mt-4 md:mt-0">
                        <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>


    </div>
  )
}
