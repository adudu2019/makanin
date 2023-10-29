import React from 'react'
const Home = () => {
  return (
    <section className='bg-gambar-home h-screen bg-no-repeat bg-cover bg-center '>
      <div className='w-full h-full flex items-center'>
        
        <div>
        <h2 className='text-white ms-14 text-4xl font-black'>Real Ingredient.</h2>
        <h2 className='text-white ms-14 text-4xl font-black mt-2'>Real Purpose.</h2>
        <h2 className='text-white ms-14 text-4xl font-black mt-2'>Real Flavor.</h2>
        <p className='text-white ms-14 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus quae velit consequuntur
         exercitationem</p>
         <button className='bg-white p-2 ms-14 mt-2 rounded font-bold text-sm'>Order Now</button>
        </div>
      </div>
    </section>
  )
}

export default Home