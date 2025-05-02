import React,{useContext} from 'react'
import { ProductContext } from '../Data/ProductContext'

import { useCart } from '../Data/CartContext';
import { NavLink } from 'react-router-dom';
const Home = () => {
    const {data}=useContext(ProductContext)
    const { addToCart } = useCart()

// console.log(data)
  return (
   <>

<section className="w-full min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 flex items-center">
  <div className="container mx-auto gap-32 px-6 flex flex-col md:flex-row items-center justify-between">

  
    <div className="flex flex-col items-start text-left space-y-6 max-w-lg">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Discover the Best Products for You
      </h1>
      <p className="text-gray-600 text-lg">
        Upgrade your lifestyle with our exclusive collection. Shop the latest trends and timeless classics today.
      </p>
      <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg shadow-lg">
        Buy Now
      </button>
    </div>

   
    <div className="relative mt-10 md:mt-0 grid grid-cols-2 gap-2">
      <img src={data[3]?.image} alt="Product 1" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300  h-42 w-62"/>
      <img src={data[9]?.image} alt="Product 2" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-62"/>
      <img src={data[7]?.image} alt="Product 3" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"/>
      <img src={data[19]?.image} alt="Product 4" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300 h-42 w-62"/>
    </div>

  </div>
</section>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full mt-10">
                {data.map((post) => {
                    const { image, id, title, price, description, rating, category } = post;
                    return (

                        <div className="relative mx-auto w-full" key={id}>
                            <div href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                                <div className="shadow p-4 rounded-lg bg-white">
                                <NavLink to={`/product/${post.id}`}>
                                        <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                                            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                                <div className="absolute inset-0 ">
                                                    <img src={image} alt="" className="w-full h-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <div className="mt-4">
                                        <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                                            <p>{title}</p>
                                        </h2>
                                        {/* <p class="mt-2 text-sm text-gray-800 line-clamp-1" >
                                            {description}
                                        </p> */}
                                    </div>

                                  

                                    <div className="grid grid-cols-2 mt-8">
                                        <div className="flex items-center">


                                            <p className="ml-2 text-red-500 line-clamp-1">
                                                <button onClick={() => addToCart(post)} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to cart</button>
                                            </p>
                                        </div>

                                        <div className="flex justify-end">
                                            <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                                                <span className="text-lg text-black">Price: {price}</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
   </>
  )
}

export default Home
