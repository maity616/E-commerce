import React from "react";
import logo from '../assets/Shopper.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="bg-[#212121] min-h-[20vh] w-full ">

                <div className="flex flex-row ">
                    <div className="flex flex-col items-start justify-center min-h-[20vh] w-1/2 gap-2  px-30">
                        <img src={logo} alt="" className="w-[150px] h-[99px]" />
                        <h1 className="text-gray-400 text-[14px] font-normals">Social :</h1>
                        <div className="flex gap-4 ml-2">
                           
                            <span className="flex items-center justify-center text-white border-2 border-white p-2 rounded-full"> <CiFacebook /> </span>
                            <span className="flex items-center justify-center text-white border-2 border-white p-2 rounded-full"> <FaInstagram /> </span>
                            <span className="flex items-center justify-center text-white border-2 border-white p-2 rounded-full"> <FaLinkedinIn /> </span>
                            <span className="flex items-center justify-center text-white border-2 border-white p-2 rounded-full"> <AiOutlineYoutube /> </span>

                        </div>
                    </div>
                    <div className="flex w-1/2 gap-[30%] py-[45px] items-end justify-end ">
                        <div className="flex flex-col gap-3 font-[your-font-class]">
                            <span className="text-white text-[16px] font-normal">Contact Us</span>
                            <span className="text-white text-[16px] font-normal" >About Us</span>
                            <span className="text-white text-[16px] font-normal">Careers</span>
                            <span className="text-white text-[16px] font-normal"> Stories</span>
                            <span className="text-white text-[16px] font-normal"> Corporate Information</span>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[10px] w-[300px] font-[your-font-class] text-[20px] font-light">
                            <button className="text-gray-400 text-[14px] border-2 border-gray-400 rounded-[50px] outline-none bg-transparent p-[5px]">Register office address :</button>
                            <div className="flex gap-3 text-[16px] font-normal">
                                <span className="text-white mt-2"><IoMdCall /> </span>
                                {/* <span className="text-white">7032541991</span> */}
                            </div>
                            <div className="flex gap-3 text-[16px] font-normal">
                                <span className="text-white  mt-2"><CiMail /> </span>
                                <span className="text-white">sales@freyrenergy.com</span>
                            </div>
                            <div className="flex gap-3 text-[16px] font-normal">
                                <span className="text-white mt-2"><FaLocationDot /> </span>
                                <span className="text-white"> Shopper Services Pvt Ltd
                                    301, 3rd Floor, KKR Square, Kavuri Hills,
                                    Phase I, Road no. 36 Hyderabad,
                                    India - 500033
                                </span>
                            </div>


                        </div>
                    </div>
                    <div />
                    <div className="px-[100px] text-white">
                        <hr />
                    </div>
                </div>



                <div className="px-[100px] text-white">
                    <hr />
                </div>
                <div className="flex flex-col items-center justify-center px-[100px] py-[20px]">

                    <div className="flex flex-col gap-[10px]">
                        <div className="flex items-center justify-center gap-[10px]">
                            <span className="text-white">Disclaimer Policy</span>
                            <hr className="h-4" />
                            <span className="text-white">Privacy Policy </span>
                            <hr className="h-4"/>
                            <span className="text-white">Sitemap</span>
                        </div>
                        <div className="flex items-center justify-center gap-[10px]">
                            <span className="text-white">Copyright © 2024 Freyr Energy</span>
                            {/* <hr /> */}
                            <span className="text-white">All Rights Reserved.</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Footer;
