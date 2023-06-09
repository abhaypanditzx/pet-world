import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {ArrowLeftIcon} from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom';
function About() {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bwcqhct', 'template_hm57jd7', form.current, '6pgJt5RNHXGYbtAAh')
      .then((result) => {
        console.log(result.text);
        alert(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className='h-screen flex flex-col items-center    w-full  '>
      <div  className=" bg-purple-300 list-none    h-[10vh] w-full absolute shadow-md shadow-gray-500   flex justify-center items-center cursive uppercase  ">
        <Link className='absolute  left-2 flex space-x-1 ' to="/">
         <ArrowLeftIcon className='h-6 w-6'/>
        </Link>
        <p  className="  text-5xl     cursive uppercase  ">about us</p>
        </div>

      <div className={` w-full overflow-hidden  h-screen bg flex  flex-col items-center   justify-center`}>
        <p className='bg-gray-100 w-[80vw]   max-[376px]:h-fit max-[376px]:rounded-sm max-[376px]:text-sm p-10 max-[426px]:text-sm max-[376px]:flex-wrap flex  shadow-lg kalam bg-opacity-75   capitalize   max-xl:p-2 max-xl:rounded-none 2xl:rounded-full h-fit'>
          pets world has been established with the aim to provide one stop solution for pet lovers. Being a pet lover we understand that “a house is not home without paw prints” and here we help you find that friendly companion for you.

          But journey of a pet lover does not stop with being a pet parent; it brings much more responsibility with it. Taking care of your pet and keeping them healthy is as important as loving them. This means that what so ever you and your pet or you are into we too are into it. Be it taking your pet on a walk or filing their nails or when it’s time for your pet to meet its vet or when your pet is looking for his/her date.

          We are committed in making pet care safe, affordable and easy for every pet parent so that they can enjoy the unconditional love of their pet.

          “Love of pet is unconditional… Let’s feel the awesomeness!!!"
        </p>
      </div>
      <form ref={form} className=' bg-purple-100 w-full flex-row h-fit p-4 flex flex-wrap justify-center ' onSubmit={sendEmail}>
       <div className='flex items-center space-x-3'>
       <label>Name</label>
        <input type="text"  className='border-2 border-black' name="user_name" />
       </div>
        <div className='flex items-center space-x-3'>
        <label>Email</label>
        <input  className='border-2 border-black' type="email" name="user_email" />
        </div>
        <div className='flex items-center space-x-3'>
        <label>Message</label>
        <textarea  className='border-2 h-6 border-black' name="message" />
        </div>
        <input type="submit" className='px-2 ml-2 rounded-lg shadow-md shadow-gray-600 bg-purple-600 text-white' value="Send" />
      </form>
    </div>
  )
}

export default About