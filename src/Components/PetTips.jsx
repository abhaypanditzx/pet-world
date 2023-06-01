import React from 'react'
import bgCatWithOwner from "../assets/petAndOwner.jpg"
import { ArrowDownIcon, LinkIcon, PrinterIcon, ShareIcon } from '@heroicons/react/24/outline'
function PetTips() {
    return (
        <div className='flex  '>
            <div className='flex  w-full   justify-center items-center   p-10 flex-col'>
                <div className=' w-full  h-fit  rounded-sm p-2' >
                    <p className='uppercase text-xl text-gray-500 self-center p-2 font-bold ubantu cursive'>pets</p>
                    <h1 className='max-2xl:text-4xl max-sm:text-xl  text-purple-500'>The Health and Mood-Boosting Benefits of Pets</h1>
                    <p className='text-gray-400  w-full   '>Pets come with some powerful health benefits. Here’s how caring for a dog, cat, or other animal can help relieve depression and anxiety, lower stress, and improve your heart health.</p>
                    <div className='flex text-white  kalam border-1 bg-purple-400 mt-10 border-purple-500 shadow-sm shadow-purple-900 border rounded-2xl   p-3 '>
                    By choosing to adopt an animal from the shelter, you will be saving them from fear, distress, and death. Moreover, a lot of shelter animals are obedient pets that had their comfort and happiness snached away after being abandoned by their owners
                    </div>
                </div>

            </div>
            <div className=' relative flex max-[736px]:hidden h-full overflow-hidden  justify-end items-center w-full   '>
                <img src={bgCatWithOwner} className='rounded-l-full h-[25rem]' alt='bg' />
            </div>

        </div>
    )
}

export default PetTips