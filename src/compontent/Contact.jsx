
import React from 'react'

export default function Contact() {
  return (
    <div>
      <div class=" mt-8 py-12">
    <div class="container mx-auto px-4">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
            <p class="text-gray-600">We'd love to hear from you! Please fill out the form below or reach out to us directly.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[#000] p-6  rounded-lg shadow-md">
                <form>
                    <div class="mb-4">
                        <label for="name" class="block text-[#fff] font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-[#fff] font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block text-[#fff] font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Your Message"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div>
            <img  style={{width:'500px', height:'500px'}} src="./public/login.jpg" alt="images" />
            </div>
        </div>
    </div>
</div>

    </div>
  )
}
