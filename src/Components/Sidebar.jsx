import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
function Sidebar() {
    const [bg, setBg] = useState("bg-gray-900")
    function hide() {
        let bars = document.getElementById("bars")
        let ul = document.getElementById("ul")
        let x = document.getElementById("x")
        if (x.style.display = "none") {
            x.style.display = "block"
            ul.style.display = "flex"
            bars.style.display = "none"
        } 
        x.style.color = "#111827"
        setBg("[#EFEEF1]")
    }

    function hide2() {
        let bars = document.getElementById("bars")
        let x = document.getElementById("x")
        let ul = document.getElementById("ul")
        if (bars.style.display = "none") {
            bars.style.display = "block"
            ul.style.display = "none"
            x.style.display = "none"
        }
        setBg("bg-gray-900")
    }


    return (
        <div className={`w-screen h-[100vh]  bg-${bg} flex justify-center items-center   absolute right-0   top-0 z-50  sm:hidden `}>
            <div className='flex p-1 justify-between absolute right-0 top-1 '>
                <Bars3Icon onClick={hide} id="bars" className={`w-8 hover:scale-110   text-white cursor-pointer  h-8`} />
                <XMarkIcon onClick={hide2} id='x' className={`w-8 hidden hover:scale-110   text-white cursor-pointer  h-8`} />
            </div>

            <ul id='ul' className=' hidden   flex-col space-y-0  justify-center items-center font-semibold p-6 '>
                
                <li className={`hover:scale-110 text-purple-600 capitalize border-gray-100 border-[1px] bg-white max-md:w-72   cursor-pointer max-[534px]:w-72  max-[358px]:w-52 p-3 rounded text-center shadow-md shadow-gray-300`}>HOME</li>
                <li className={`hover:scale-110 text-purple-600 capitalize border-gray-100 border-[1px] bg-white max-md:w-72   cursor-pointer max-[534px]:w-72  max-[358px]:w-52 p-3 rounded text-center shadow-md shadow-gray-300`}>search</li>
                <li className={`hover:scale-110 text-purple-600 capitalize border-gray-100 border-[1px] bg-white max-md:w-72   cursor-pointer max-[534px]:w-72  max-[358px]:w-52 p-3 rounded text-center shadow-md shadow-gray-300`}>ABOUT US</li>
                <li className={`hover:scale-110 text-purple-600 capitalize border-gray-100 border-[1px] bg-white max-md:w-72   cursor-pointer max-[534px]:w-72  max-[358px]:w-52 p-3 rounded text-center shadow-md shadow-gray-300`}>TOOLS</li>
                <li className={`hover:scale-110 text-purple-600 capitalize border-gray-100 border-[1px] bg-white max-md:w-72   cursor-pointer max-[534px]:w-72  max-[358px]:w-52 p-3 rounded text-center shadow-md shadow-gray-300`}>SERVICES</li>
                <li className={`hover:scale-110 text-purple-600 capitalize border-gray-100 border-[1px] bg-white max-md:w-72   cursor-pointer max-[534px]:w-72  max-[358px]:w-52 p-3 rounded text-center shadow-md shadow-gray-300`}>MORE</li>
                <li className={`hover:scale-110 text-purple-600 capitalize border-gray-100 border-[1px] bg-white max-md:w-72   cursor-pointer max-[534px]:w-72  max-[358px]:w-52 p-3 rounded text-center shadow-md shadow-gray-300`}>login/signup</li>
            </ul>
        </div>
    )
}

export default Sidebar