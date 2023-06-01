import React from 'react'
import  cat  from "../assets/cat.png"

function PurpleCard() {
  return (
    <div className="h-60 justify-around  flex max-[614px]:w-64 max-[614px]:py-5   max-[768x] shrink   md:w-40    text-white p-2 flex-col rounded-md shadow-xl lg:w-40  items-center bg-purple-800 2xl:w-60">
    <div className="bg-white rounded-full p-2"><img className="h-20 " src={cat}/></div>
    <div className="lowercase ubantu">84+ pets are Available on  pets world</div>
    <div className="text-2xl  uppercase ">meet them</div>
   </div>
  )
}

export default PurpleCard