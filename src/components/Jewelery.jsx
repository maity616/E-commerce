import React,{useContext} from 'react'
import { ProductContext } from '../Data/ProductContext'
import { NavLink } from 'react-router-dom';
import { useCart } from '../Data/CartContext';
const Jewelery = () => {
      const {data}=useContext(ProductContext)
        const { addToCart } = useCart()
       // console.log(data)
        const filterJewelery=data.filter((item)=>{
          return(
            item.category === "jewelery"
          );
        });
        console.log(filterJewelery)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full mt-10">
    {filterJewelery.map((post) => {
        const { image, id, title, price, description, rating, category } = post;
        return (

            <div className="relative mx-auto w-full" key={id}>
                <a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
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
                        {/* <div class="mt-4">
                            <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                                <h2>{title}</h2>
                            </h2>
                            <p class="mt-2 text-sm text-gray-800 line-clamp-1" >
                                {description}
                            </p>
                        </div> */}

                        {/* <div class="flex items-center">
                            <div class="relative">
                                <h1>{rating.rate}</h1>

                                <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                            </div>

                            <p class="ml-2 text-red-500 line-clamp-1">
                                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </p>
                        </div> */}

                        <div className="flex items-center">


                            <h1 className="ml-2 text-red-500 line-clamp-1">
                                <p> Category : {category} </p>
                            </h1>
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
                </a>
            </div>

        )
    })}
</div>
  )
}

export default Jewelery
