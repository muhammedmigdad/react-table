import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='bg-[#d0cdcd]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[40px] font-extrabold '>Logo</h1>
                <ul className='flex justify-center items-center'>
                <li className='text-[20px] font-medium mr-3'>Home</li>
                <li className='text-[20px] font-medium mr-3'>About</li>
                <li className='text-[20px] font-medium mr-3'>Contact</li>
                <li className='text-[20px] font-medium mr-3'>Account</li>
                </ul>
                <h2 className='text-[30px] font-extrabold '>Location</h2>
            </div>
        </header>
    </div>
  )
}
