import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Table from './compontent/Table'
import Forms from './compontent/Forms'
import Header from './compontent/Header'
import Footer from './compontent/Footer'
import Contact from './compontent/Contact'
import About from './compontent/About'
import Todolist from './compontent/Todolist';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Todolist/>
      {/* <Table/> */}
      {/* <Forms/> */}
      {/* <Header/>
      // <About/>
      // <Contact/> 
      // <Footer/>  */}
      {/* // <BrowserRouter> */}
      {/* <div>
        <div className="flex space-x-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <ul >
          <li>
            <Link
              to="/home"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/footer"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Footer
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul>
        <form action="" method="get" class="relative bg-white flex items-center rounded-full shadow-md w-full">
                <input 
                    type="text" 
                    name="q" 
                    value="{{ q }}" 
                    placeholder="Search" 
                    class="w-full py-2 md:py-4 px-4 md:px-6 text-gray-800 rounded-full focus:outline-none"
                />
                <button type="submit" class="absolute right-2 bg-transparent">
                    <img src="{% static 'images/search.png' %}" alt="search" class="w-[16px] md:w-[20px] h-[16px] md:h-[20px]"/>
                </button>
            </form>
        </ul>
      </div> */}
      {/* <BrowserRouter> */}
{/* <Header/> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Header />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/footer" element={<Footer />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        {/* </Routes> */}
        {/* </BrowserRouter> */}

      </div>
     </>
  )
}

export default App
