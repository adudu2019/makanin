import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const ListCategory = () => {
    const [getCategory, setCategory] = useState([])
    const getListCategory = async() => {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        setCategory(res.data.categories)
        console.log(res.data.categories)
    }
    const [getCountry, setCountry] = useState([])
    const getListCountry = async() => {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        setCountry(res.data.meals)
    }

    useEffect(() => {
        getListCategory()
        getListCountry()
    }, [])

  return (
    <>
    
    <div className="title">
        <h2 className='mt-16 text-center m-5 text-xl font-black'>List Category</h2>
    </div>
    <div className='flex flex-wrap gap-5 justify-center p-8'>
    
    {getCategory.map((i) => (
    <Link to={`/category/${i.strCategory}`} >
        <div key={i.idCategory} className='border shadow-md p-2'>
            <img src={i.strCategoryThumb} alt="..." className='w-20'/>
            <h2 className='text-xs mt-2 text-center'>{i.strCategory}</h2>
            <div className="flex justify-center mt-3">
            </div>
        </div>
    </Link>
    ))}
    </div>

    <div className="title">
        <h2 className='mt-10 text-center m-5 text-xl font-black'>List Country</h2>
    </div>

    <div className='flex flex-wrap gap-5 justify-center p-8'>
    
    {getCountry.map((c) => (
    <Link to={`/country/${c.strArea}`} >
        <div key={c.strArea} className='border shadow-md p-2 w-20'>
            <h2 className='text-xs mt-2 text-center'>{c.strArea}</h2>
            <div className="flex justify-center mt-3"></div>
        </div>
    </Link>
    ))}
    </div>

    </>
  )
}

export default ListCategory