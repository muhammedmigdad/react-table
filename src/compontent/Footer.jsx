import React from 'react'

export default function Footer() {
  return (
    <div>
              <footer>
            <div class="container">
                <div class="grid">
                    <div>
                        <h1>About Us</h1>
                        <p>
                            We are a leading photography company dedicated to capturing life's most beautiful moments. Our team of skilled photographers is passionate about creating memories that last a lifetime.
                        </p>
                    </div>
                    <div>
                        <h1>Quick Links</h1>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1>Follow Us</h1>
                        <div class="flex space-x-4">
                            <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
                            <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
                            <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
                        </div>
                        <h1>Contact Us</h1>
                        <p>Email: info@photography.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>

                <hr class="my-8" />

                <div class="flex items-center justify-between text-center text-gray-400">
                    <p>&copy; 2024 Photography Co. All rights reserved.</p>
                    <ul class="flex space-x-4">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    </div>
  )
}
