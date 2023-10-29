import React from 'react'

function About() {
  return (
    <section>
        <div className='flex'>
            <img className='shadow-xl ms-20 mt-10 h-[550px] w-[400px] object-cover' src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?w=826&t=st=1697074913~exp=1697075513~hmac=6e422ab236f698082a576442974bf2119feb51ead7743ec6b8dfb6ed45930901" alt="" />
            <div className='ms-20 mt-16 '>
            <h2 className='mt-28 text-xl font-black'>About Us</h2>
            <h2 className='text-2xl font-black mt-6'>Kualitas yang Anda Rasakan,<br /> Harga yang Anda Nikmati</h2>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsa fuga, eos saepe assumenda nam consequuntur repellat eaque laborum cumque dolorem sunt similique corrupti explicabo quas fugit, <br /> consectetur repudiandae pariatur ipsam nostrum expedita. Et aliquid dolore a odio quibusdam nam voluptas suscipit error neque ut quod, <br /> quia ex debitis quae aut?</p>
            </div>
        </div>
    </section>
  )
}

export default About