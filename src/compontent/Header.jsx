import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header className='bg-[#d0cdcd]'>
            <div className='flex justify-between items-center'>
                <Link to='/' className='text-[40px] font-extrabold '>Logo</Link>
                <ul className='flex justify-center items-center'>
                <Link to='/'  className='text-[20px] font-medium mr-3'>home</Link>
                <Link to='/about'  className='text-[20px] font-medium mr-3'>about</Link>
                <Link to='/contact'  className='text-[20px] font-medium mr-3'>contact</Link>
                <Link to='/footer'  className='text-[20px] font-medium mr-3'>footer</Link>
                </ul>
                <h2 className='text-[30px] font-extrabold '>Location</h2>
            </div>
        </header>
    </div>
  )
}
