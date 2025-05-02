import React, { useContext, useState } from 'react'
import logo from '../assets/Shopper.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from '../Data/CartContext';
import { ProductContext } from '../Data/ProductContext'
import { useAuth } from '../Data/LoginContext';
const Header = () => {
  const [active, setActive] = useState()
  const { logout } = useAuth();
  const { setSearchItem, searchItem } = useContext(ProductContext)
  const { cartCount } = useCart()
  return (
    <>

      <div className="bg-white">
        <div className="shadow-xl py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={logo} alt="" className="w-[100px] h-[50px]" />
              {/* <span className="ml-2 font-semibold text-[#252C32]">What a Market</span> */}
            </div>

            <div className="ml-6 flex flex-1 gap-x-3">


              <input value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                type="text" className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" placeholder='Search for Products,Brands and More' />
            </div>

            <div className="ml-2 flex">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">

                <span className="text-sm font-medium">Service</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">

                <span className="text-sm font-medium">Contact</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cartCount}</span>
                </div>
                <Link to={'/cart'}>
                  <span className="text-sm font-medium">Cart</span></Link>
              </div>

              <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                <span onClick={logout} className="text-sm font-medium">Sign in</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-x-2 py-1 px-2">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg> */}
              <span className="text-sm font-medium">India</span>
            </div>

            <div className="flex gap-x-8">
              <Link to={"/"} >
                <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">All</span>
              </Link>

              <Link to={'/jewelery'}>
                <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Jewelery</span>
              </Link>
              <span className="relative group cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                <span className="  py-2 rounded ">
                  Fashion
                </span>
                <ul className="absolute z-10 left-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block">
                  <Link to={'/menfashin'}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Men's Fashion</li>
                  </Link>
                  <Link to={'/womenfashin'}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Women's Fashion</li>
                  </Link>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kid's Fashion</li>
                </ul>
              </span>
              <Link to={'/electronic'}>
                <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Electronics</span>
              </Link>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Health</span>
              <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Toys & Games</span>
            </div>

            <div className="flex gap-4 ml-2">

              <span className="flex items-center justify-center text-black border-2 border-black p-2 rounded-full"> <CiFacebook /> </span>
              <span className="flex items-center justify-center text-black border-2 border-black p-2 rounded-full"> <FaInstagram /> </span>
              <span className="flex items-center justify-center text-black border-2 border-black p-2 rounded-full"> <FaLinkedinIn /> </span>
              <span className="flex items-center justify-center text-black border-2 border-black p-2 rounded-full"> <AiOutlineYoutube /> </span>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
