import axios from 'axios'
import React, { useState } from 'react'

function SearchMenu({search, setSearch, listSearch, setListSearch}) {

    const getSearch = async(e) => {
        e.preventDefault()

        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

        // setSearch(res.data.meals)
        setListSearch(res.data.meals)
    }
  return (
    <div>
        <div className="form-search flex justify-center my-10">
            <form onSubmit={getSearch}>
                <input type="text" 
                placeholder="Silahkan Masukkan Menu"
                className='border-2 p-2 rounded-md w-80 border-black'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
                />
                <button type='submit' className='bg-black text-white p-2 ml-2 border-2 rounded-md'>Search</button>
            </form>

        </div>

        <div className="list-search flex justify-center">
            {!listSearch ? (

            <><h2 className='m-5 text-xl font-black'>Maaf, Menu tidak ditemukan!!</h2></> 
            ) : (<>{listSearch.map((menu) => (
                <div key={menu.idMeal} className='w-44 border text-center mb-8 shadow-md rounded-lg'>
                    <img src={menu.strMealThumb} alt="..." className='rounded-lg' />
                    <h2 className='m-2'>{menu.strMeal}</h2>
                </div>
            ))}</>)}
        </div>
    </div>
  )
}

export default SearchMenu