import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const DetailPage = () => {

    const {id} = useParams()

    const [makanan, setMakanan] = useState([])

    const getMakananById = async() => {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setMakanan(res.data.meals)
    }

    useEffect(() => {
        getMakananById()
    }, [])
    console.log(makanan);
  return (
    <>
    <div className='container'>
        {makanan.map((m, index) => (

            <>
            <div key={index.idMeal} className='flex'>
                <img src={m.strMealThumb} alt={m.strMeal} className='object-cover m-10 shadow-2xl h-96'/>
                <div>
                    <h2 className='mt-10 text-2xl font-black'>{m.strMeal}</h2>
                    <h2 className='mt-3'>{m.strArea}</h2>
                    <h2>{m.strCategory}</h2>
                    <h2 >{m.strTags ? m.strTags : '-'}</h2>
                    <pre className='text-xs mt-5 whitespace-pre-wrap font-sans leading-normal me-5'>{m.strInstructions}</pre>

                </div>
            </div>

            <h2 className='text-center mb-5 mt-5 text-xl font-black w-screen'>OUR INGREDIENT</h2>

                <div className='flex flex-wrap gap-1 justify-center me-4 w-screen'>
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient1}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient2}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient3}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient4}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient5}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient6 ? m.strIngredient6 : '-'}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient7 ? m.strIngredient7 : '-'}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient8 ? m.strIngredient8 : '-'}</button>
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient9 ? m.strIngredient9 : '-'}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient10 ? m.strIngredient10 : '-'}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient11 ? m.strIngredient11 : '-'}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient12 ? m.strIngredient12 : '-'}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient13 ? m.strIngredient13 : '-'}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient14 ? m.strIngredient14 : '-'}</button> 
                <button className='bg-black text-white text-xs p-1 rounded-md ms-4'>{m.strIngredient15 ? m.strIngredient15 : '-'}</button>
            </div> 

            <h2 className=' text-center mt-5 text-xl font-black w-screen'>TUTORIAL</h2>
            <div className='w-full flex justify-center mt-5 mb-5 w-screen'>
                <iframe src={m.strYoutube} frameborder="0" className='flex justify-center'></iframe>
            </div>

            <div className='w-screen flex justify-center'>
                <button className='bg-black text-white p-3 rounded-md text-xs m-5'>
                    <a target='_blank' href={m.strSource} >
                {
                    m.strSource

                        ? m.strSource
                        .split(",")
                        .map((link) => `${link.trim()}`)
                        .join(", ")
                        : "No source available"}
                    </a>
                </button>            
            </div>
            
            </>
            
        ))}
    </div>
    </>
  )
}

export default DetailPage