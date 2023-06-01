import React from "react";
import playstore from "../assets/playstore.png"
import apple from "../assets/apple.png"
function Footer() {
  return (
    <div className=" text-white   bg-gray-900">
      <div className=" py-1 bg-white text-pink-600    w-full   text-center  capitalize">
        your pet ours pasion
      </div>
      <div className="flex  flex-wrap  justify-around">
        <ul className="flex flex-col p-2">
          <li className="font-bold max-sm:text-[12px]">RESOURCES</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base">FAQs</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base"> Mobile App Download</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base">Partnerships</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base">News Center</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base">Put Petfinder On Your Site</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base">For Developers</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base">Contact Us</li>
        </ul>
        <ul className="flex flex-col p-2">
          <li className="font-bold max-sm:text-[12px]"> ADOPT OR GET INVOLVED</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base"> All Adopt or Get Involved</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base"> Adopting Pets</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base"> Animal Shelters & Rescues</li>
          <li className="max-sm:text-[10px] max-content 2xl:text-base"> Other Types of Pets</li>
         <div className="flex  space-x-1 mt-2">
         <li className="flex  max-sm:text-[10px] w-24 2xl:text-base text-black max-2xl:w-24 max-sm:w-16  p-1 rounded-xl bg-gray-200"><img className="max-2xl:h-6 h-6  w-6 max-2xl:w-6  max-sm:w-3 max-sm:h-3  " src={playstore}/>playstore</li>
          <li className="flex max-sm:text-[10px] w-24 2xl:text-base text-black max-2xl:w-24 max-sm:w-16  p-1 rounded-xl bg-gray-200"><img className="max-2xl:h-6 h-6  w-6 max-2xl:w-6  max-sm:w-3 max-sm:h-3  " src={apple}/>apple</li>
         </div>
        </ul>
        <ul className="flex flex-col p-2">
        <li className="font-bold max-sm:text-[12px]">ABOUT DOGS & PUPPIES</li>
        <li className="max-sm:text-[10px] max-content 2xl:text-base">All About Dogs & Puppies</li>
        <li className="max-sm:text-[10px] max-content 2xl:text-base">Dog Adoption</li>
        <li className="max-sm:text-[10px] max-content 2xl:text-base">Dog Breeds</li>
        <li className="max-sm:text-[10px] max-content 2xl:text-base">Feeding Your Dog</li>
        <li className="max-sm:text-[10px] max-content 2xl:text-base">Dog Behavior</li>
        <li className="max-sm:text-[10px] max-content 2xl:text-base">Dog Health & Wellness</li>
        <li className="max-sm:text-[10px] max-content 2xl:text-base">Dog Training</li>
        <li className="max-sm:text-[10px] max-content 2xl:text-base">Other Dog Information</li>
        </ul>
        <ul className="flex flex-col p-2">
  <li className="font-bold max-sm:text-[12px]">  ABOUT CATS & KITTENS</li>
  <li className="max-sm:text-[10px] max-content 2xl:text-base">  All About Cats & Kittens</li>
  <li className="max-sm:text-[10px] max-content 2xl:text-base">  Cat Adoption</li>
  <li className="max-sm:text-[10px] max-content 2xl:text-base">  Cat Breeds</li>
  <li className="max-sm:text-[10px] max-content 2xl:text-base">  Feeding Your Cat</li>
  <li className="max-sm:text-[10px] max-content 2xl:text-base">  Cat Behavior</li>
  <li className="max-sm:text-[10px] max-content 2xl:text-base">  Cat Health & Wellness</li>
  <li className="max-sm:text-[10px] max-content 2xl:text-base">  Cat Training</li>
  <li className="max-sm:text-[10px] max-content 2xl:text-base">  Other Cat Information</li>
        </ul>
      </div>

      </div>

  );

}

export default Footer;
