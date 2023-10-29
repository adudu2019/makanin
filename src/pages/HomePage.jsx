import React, { useEffect, useState } from 'react'
import Home from '../components/Home'
import axios from 'axios'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import About from '../components/About'
import ListCategory from '../components/ListCategory'
import SearchMenu from '../components/SearchMenu'
import Footer from '../components/Footer'
import { InfinitySpin } from 'react-loader-spinner'
export const HomePage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // search props component
  const [search, setSearch] = useState("")
  const [listSearch, setListSearch] = useState([])

  const getData = async() => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}search.php?s=`)

    console.log(res.data.meals)
    setData(res.data.meals)
  }

  useEffect(() => {
    getData()
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return <div className='flex justify-center items-center h-screen'><InfinitySpin
    width='200'
    color="#4fa94d"
  /></div>
}

  return (
    // <div>HomePage</div>
    <>

      <Header/>
      <section id='home'>
        <Home />
      </section>
      
      
    <br />

    <section id='about'>
      < About/>

    </section>

    <section id='category-food'>
      <ListCategory />
    </section>

    <section id='menu'>
      <h2 className='mt-16 text-center m-5 text-xl font-black'>Menu Makanan</h2>

      <section id='search-food' className=''>
        <SearchMenu
        search={search}
        setSearch={setSearch} 
        listSearch={listSearch} 
        setListSearch={setListSearch}
        />
      </section>

      <div className="flex flex-wrap gap-5 justify-center">
      {data.map((makanan, index) => (
        <Link to={`/detail/${makanan.idMeal}`}>
          <div key={index.idMeal} className='w-44 border rounded-lg text-center shadow-lg'> 

          <img src={makanan.strMealThumb} alt={makanan.strMeal} className='object-cover rounded-lg'/>
          <p className='text-center m-2'>{makanan.strMeal}</p>

          </div>
        </Link>
      ))}
      </div>

    </section>

    <section id='footer'>
      <Footer />
    </section>
    </>
  )
}
