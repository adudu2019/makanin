import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function CountryPage() {

    const [list, setList] = useState([])
    const {makanan} = useParams()
    const location = useLocation()

    const getList = async() => {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${makanan}`)

        setList(res.data.meals)
    }

    useEffect(() => {
        getList()
    }, [])
  return (
    <div>
        <h2 className='mt-10 text-center m-5 text-xl font-black'>
            Halaman Country {location.pathname.split('/category/')}
        </h2>

        <div className="flex flex-wrap gap-5 justify-center">
        {list.map((li) => (
            <div key={li.idMeal} className='w-44 border border-black' >
                <img src={li.strMealThumb} alt=""/>
                <h2>{li.strMeal}</h2>

                <div className="flex justify-center mt-3">
                    <Link to={`/detail/${li.idMeal}`}>Click Menu</Link>
                </div>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default CountryPage