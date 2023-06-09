import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LoginBtn from "./LoginBtn";
import SignBtn from "./SignBtn";
import { ChevronUpIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom";


function Nav() {
  const [rotate, setRotate] = useState("rotate-0")
  const [display, setDisplay] = useState("visible")
  const [m, setM] = useState("mt-5")
  const buttons = () => {

    if (rotate == "rotate-0") {
      setRotate("rotate-180")
      setDisplay("hidden")
      setM("mt-0")
    }
    else {
      setRotate("rotate-0")
      setDisplay("visible")
      setM("mt-5")

    }


  }
  return (
    <>
      <div className="text-white sm:hidden    z-50 p-2 h-full sticky w-full bg-gray-900 justify-center items-center flex  top-0">
        <ul className="flex w-full h-full popins uppercase ">
          <li className="hover:scale-110  rounded-lg cursor-pointer    px-5 py-1 ">
            Home
          </li>
          <li className="hover:scale-110  rounded-lg cursor-pointer    px-5 py-1 ">
            pets
          </li>
          <li className="hover:scale-110  rounded-lg cursor-pointer    px-5 py-1 ">
            adoption
          </li>
          <Sidebar />
        </ul>
      </div>

      <div className="text-white bg-gray-900 hidden 2xl:text-md md:text-sm w-full     justify-between sm:flex z-50 p-2 sticky  top-0">
        <ul className="flex text-white ">
          <li className="logo sm:text-sm 2xl:w-fit sm:w-[4rem] 2xl:text-2xl mt-2 "> pets world</li>
        </ul>
        <ul className="flex justify-between sm:text-sm sm:space-x-0  md:space-x-5">
          <div id="li1" className="h-fit p-2   w-fit">
            <li className="  px-2 py-1 max-content   cursor-pointer hover:scale-95 uppercase font-bold   rounded-lg">
              adopt or get involved
            </li>
            <ul id="ul" className="w-fit ml-2 p-3 popins capitalize    hidden h-fit ">

              <Link to="/About"> <li className="hover:underline hover:scale-95   max-content hover:text-gray-300 transition-[0.2s] cursor-pointer">about pets world</li></Link>
              <Link to="/AdoptingPets"><li className="hover:underline hover:scale-95   max-content hover:text-gray-300 transition-[0.2s] cursor-pointer">adopting pets</li></Link>
              <Link to="/ShelterAndRescue"> <li className="hover:underline hover:scale-95   max-content hover:text-gray-300 transition-[0.2s] cursor-pointer">animal shelters & rescues</li> </Link>
            </ul>
          </div>

          <div id="li1" className="h-fit p-2  w-fit">
            <li className="  px-2 py-1 max-content cursor-pointer hover:scale-95 uppercase font-bold  text-white rounded-lg">
              dogs and puppies
            </li>
            <ul id="ul" className="w-fit ml-2 p-3    popins capitalize   hidden h-fit ">

              <Link to="/dogAdo"><li className="hover:underline hover:scale-95 max-content  hover:text-gray-300 transition-[0.2s]   cursor-pointer">Dog Adoption</li></Link>
              <li className="hover:underline hover:scale-95 max-content  hover:text-gray-300 transition-[0.2s]   cursor-pointer">Dog Breeds</li>
              <li className="hover:underline hover:scale-95 max-content  hover:text-gray-300 transition-[0.2s]   cursor-pointer">Feeding Your Dog</li>
              <li className="hover:underline hover:scale-95 max-content  hover:text-gray-300 transition-[0.2s]   cursor-pointer">Dog Behavior</li>
              <li className="hover:underline hover:scale-95 max-content  hover:text-gray-300 transition-[0.2s]   cursor-pointer">Dog Health & Wellness</li>
            </ul>
          </div>
          <div id="li1" className="h-fit p-2  w-fit">
            <li className="  px-2 py-1 max-content cursor-pointer hover:scale-95 uppercase font-bold  text-white rounded-lg">
              cats & kittens
            </li>
            <ul id="ul" className="w-fit ml-2 p-3 popins capitalize  hidden h-fit ">
<Link to="/CatAdo"><li className="hover:underline hover:scale-95 max-content hover:text-gray-300 transition-[0.2s]  cursor-pointer">Cat Adoption</li></Link>
             
              <Link to="/CatBreeds"> <li className="hover:underline hover:scale-95 max-content hover:text-gray-300 transition-[0.2s]  cursor-pointer">Cat Breeds</li> </Link>
              <li className="hover:underline hover:scale-95 max-content hover:text-gray-300 transition-[0.2s]  cursor-pointer">Feeding Your Cat</li>
              <li className="hover:underline hover:scale-95 max-content hover:text-gray-300 transition-[0.2s]  cursor-pointer">Cat Behavior</li>
              <li className="hover:underline hover:scale-95 max-content hover:text-gray-300 transition-[0.2s]  cursor-pointer">Cat Health & Wellness</li>

            </ul>
          </div>
        </ul>
        <div className="flex   w-24  items-center  btn-con justify-center h-fit flex-col " >
          <ul className={`flex sm:text-xs    space-x-1 ${display}`}>
            <LoginBtn display={display} />
            <SignBtn display={display} />
          </ul>
          <ChevronUpIcon id="chevronUp" onClick={buttons} className={`w-6 2xl:hidden xl:hidden md:hidden text-gray-900  icon transition-[0.3s]  ${rotate} ${m} h-6`} />
        </div>
      </div>
    </>
  );
}

export default Nav;
