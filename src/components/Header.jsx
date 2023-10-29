import React from 'react'

function Header() {
  return (
    
    <header className='flex p-5 absolute w-full mt-3'>
        <h2 className='ms-10 font-black text-white text-xl'>MAKANIN</h2>
        <nav className='ml-auto me-10'>
            <ul className='flex gap-5 cursor-pointer list-header text-sm text-white font-semibold'>
                <a href="#home"><li>HOME</li></a>
                <a href="#about"><li>ABOUT</li></a>
                <a href="#category-food"><li>CATEGORY</li></a>
                <a href="#menu"><li>MENU</li></a>
                <a href="#"><li>CONTACT</li></a>
            </ul>
        </nav>
    </header>

  )
}

export default Header