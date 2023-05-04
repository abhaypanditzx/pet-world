import React, { useState } from 'react'

function Sidebar() {
    function hide(){
       let bars =  document.getElementById("bars")
       let ul =  document.getElementById("ul")
       let x =  document.getElementById("x")
    
       if(x.style.display = "none"){
        x.style.display = "block"   
        ul.style.display = "flex"   
        bars.style.display = "none"
       }
    }
    
    function hide2(){
        let bars =  document.getElementById("bars")
        let x =  document.getElementById("x")
        let ul =  document.getElementById("ul")
        if(bars.style.display = "none"){
         bars.style.display = "block"   
        ul.style.display = "none"   
         x.style.display = "none"
        }
     }
    const [display,setDisplay] = useState("")
  return (
    <div className='w-fit bg-gray-800 text-gray-50'>
        <svg onClick={hide} id="bars" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 hover:scale-110 cursor-pointer h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<svg onClick={hide2} id='x' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 hidden hover:scale-110 cursor-pointer  h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


        <ul id='ul' className=' hidden flex-col space-y-2 font-semibold    p-4'>
            <li className=' hover:scale-110 hover:shadow-gray-500 cursor-pointer  bg-black p-1 rounded-md text-center shadow-sm shadow-black '>HOME</li>
            <li className=' hover:scale-110 hover:shadow-gray-500 cursor-pointer  bg-black p-1 rounded-md text-center shadow-sm shadow-black '>ABOUT US</li>
            <li className=' hover:scale-110 hover:shadow-gray-500 cursor-pointer  bg-black p-1 rounded-md text-center shadow-sm shadow-black '>TOOLS</li>
            <li className=' hover:scale-110 hover:shadow-gray-500 cursor-pointer  bg-black p-1 rounded-md text-center shadow-sm shadow-black '>SERVICES</li>
            <li className=' hover:scale-110 hover:shadow-gray-500 cursor-pointer  bg-black p-1 rounded-md text-center shadow-sm shadow-black '>MORE</li>
        </ul>
    </div>
  )
}

export default Sidebar