import React from 'react'
import { ArrowLeftIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import {ChevronDoubleDownIcon} from "@heroicons/react/24/outline";


function Benefit() {
    return (
        <div className='flex flex-col shadow-inner-xl overflow-x-scroll  relative   bg-white  w-[50rem] max-[884px]:w-[40rem]   hide-scroll  max-[670px]:w-[30rem] max-sm:w-[25rem] max-[435px]:w-[20rem] p-2  space-y-5  2xl:h-[50vh] overflow-y-scroll '>
             <div className="flex flex-col sticky top-0 capitalize cursive left-[50%]  translate-x-[0%] justify-center items-center">
    <p className='text-gray-600'>scroll</p>
    <ChevronDoubleDownIcon className="h-6 animate-bounce  w-6"/>
     </div>
            <div className=' space-y-5 max-[321px]:space-y-3    ' >
                <h1 className='text-3xl ubantu max-[321px]:text-xl uppercase text-purple-600'>
                    The benefits of pets
                </h1>
                <p className='capitalize poppins text-gray-500 max-[321px]:text-xs max-sm:text-sm '>
                    Most pet owners are clear about the immediate joys that come with sharing their lives with companion animals. However, many of us remain unaware of the physical and mental health benefits that can also accompany the pleasure of snuggling up to a furry friend. It’s only recently that studies have begun to scientifically explore the benefits of the human-animal bond.
                </p>
                <p className='capitalize poppins  text-gray-500 max-[321px]:text-xs max-sm:text-sm '>
                    Pets have evolved to become acutely attuned to humans and our behavior and emotions. Dogs, for example, are able to understand many of the words we use, but they’re even better at interpreting our tone of voice, body language, and gestures. And like any good human friend, a loyal dog will look into your eyes to gauge your emotional state and try to understand what you’re thinking and feeling (and to work out when the next walk or treat might be coming, of course).
                </p>
                <p className='capitalize poppins  text-gray-500 max-[321px]:text-xs max-sm:text-sm '>
                    Pets, especially dogs and cats, can reduce stress, anxiety, and depression, ease loneliness, encourage exercise and playfulness, and even improve your cardiovascular health. Caring for an animal can help children grow up more secure and active. Pets also provide valuable companionship for older adults. Perhaps most importantly, though, a pet can add real joy and unconditional love to your life.
                </p>
            </div>
            <div className=' space-y-5   ' >

                <h1 className='text-3xl ubantu uppercase max-[321px]:text-xl text-purple-600'>
                    Any pet can improve your health
                </h1>
                <p className='capitalize popins text-gray-500 max-[321px]:text-xs max-sm:text-sm '>
                    While it’s true that people with pets often experience greater health benefits than those without, a pet doesn’t necessarily have to be a dog or a cat. A rabbit could be ideal if you’re allergic to other animals or have limited space but still want a furry friend to snuggle with. Birds can encourage social interaction and help keep your mind sharp if you’re an older adult. Snakes, lizards, and other reptiles can make for exotic companions. Even watching fish in an aquarium can help reduce muscle tension and lower your pulse rate.
                </p>
            
            </div>
            <div>

<ul className="flex flex-col  ">
<p className='capitalize cursive p-2  text-purple-600 max-[321px]:text-xs max-sm:text-sm  '>
    studies have shown that :
</p>
    <li className='flex p-2 text-sm capitalize text-gray-700 '><ArrowLeftIcon className='rotate-180 h-5 w-5  text-purple-500 ' />Pet owners are less likely to suffer from depression than those without pets.</li>
    <li className='flex p-2 text-sm capitalize text-gray-700 '><ArrowLeftIcon className='rotate-180 h-5 w-5  text-purple-500 ' />Playing with a dog, cat, or other pet can elevate levels of serotonin and dopamine, which calm and relax.</li>
    <li className='flex p-2 text-sm capitalize text-gray-700 '><ArrowLeftIcon className='rotate-180 h-5 w-5  text-purple-500 ' />Pet owners have lower triglyceride and cholesterol levels (indicators of heart disease) than those without pets.</li>
    <li className='flex p-2 text-sm capitalize text-gray-700 '><ArrowLeftIcon className='rotate-180 h-5 w-5  text-purple-500 ' />Heart attack patients with pets survive longer than those without.</li>
</ul>
</div>
        </div>
    )
}

export default Benefit