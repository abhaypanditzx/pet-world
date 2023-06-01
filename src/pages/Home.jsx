import React,{useEffect} from "react";
import Footer from "../Components/Footer";
import Pet from "../Components/Pet";
import  dog  from "../assets/dog.png"
import  cat  from "../assets/cat.png"
import livestock   from "../assets/livestock.png"
import house   from "../assets/pet-house.png"
import Cards from "../Components/Cards";
import PurpleCard from "../Components/purpleCard";
import PetTips from "../Components/PetTips";
import Benefit from "../Components/Benefit";

function Home() {
  useEffect(() => {

  })
  function petfunc(){
  let id = document.getElementById("id")
  if(id.style.display = "none"){
    id.style.display = "flex";
    id.style.position = "fixed";
    id.style.left = "50%";
    id.style.top = "23%";
    id.style.transform = "translate";
    id.style.translate = "-50%";
  
  }}


  return (
  <div className="relative App bg-[#efeef1]">
    <div className="w-full h-fit   home relative items-center justify-center    flex flex-col">
      <div className=" flex  flex-col p-[2rem] justify-center  items-center   w-full ">
        <h1 className="text-gray-600 poppins max-[321px]:text-xl text-center w-screen  font-extrabold  uppercase   2xl:text-4xl xl:text-4xl   ">
          Find your new best friend
        </h1>
        <p className="text-purple-500 oswald w-[100vw] sm:text-[0.8rem] 2xl:text-2xl text-center  uppercase text-base ">
          Browse pets from our network of over 11,500 shelters and rescues.
        </p> 
      </div>

      <div  id="parent" className="flex   text-style   2xl:space-x-5 first-con   sm:space-x-4 space-x-0    font-semibold ubantu">
        <div onClick={petfunc} className=" shrink max-[614px]:w-64 max-[614px]:py-5   max-[768px]:-40   md:w-40   xl:w-40 2xl:w-40   pet-card border-[2px]  relative p-1 hover:scale-95 first-con max-[637px]:text-xs hover:shadow-gray-500 sm:p-2  sm:text-xs  2xl:text-lg shadow-md shadow-gray-300 md:border-none 2x:border-none xl:border-none  sm:border-purple-600  max-2xl:text-gray-800 max-sm:text-purple-600  rounded-md flex flex-col items-center  bg-white  first-con-li"><img className=" xl:block first-con-img max-[614px]:hidden" src={dog}/>      <span className="max-content  first-con-span">Dogs</span></div> <Pet/>
        <div onClick={petfunc} className=" shrink max-[614px]:w-64 max-[614px]:py-5   max-[768px]:-40   md:w-40   xl:w-40 2xl:w-40   pet-card border-[2px]  relative p-1 hover:scale-95 first-con max-[637px]:text-xs hover:shadow-gray-500 sm:p-2  sm:text-xs  2xl:text-lg shadow-md shadow-gray-300 md:border-none 2x:border-none xl:border-none  sm:border-purple-600  max-2xl:text-gray-800 max-sm:text-purple-600  rounded-md flex flex-col items-center  bg-white  first-con-li"><img className=" xl:block first-con-img max-[614px]:hidden" src={cat}/>      <span className="max-content  first-con-span">  Cats</span></div>
        <div onClick={petfunc} className=" shrink max-[614px]:w-64 max-[614px]:py-5   max-[768px]:-40   md:w-40   xl:w-40 2xl:w-40   pet-card border-[2px]  relative p-1 hover:scale-95 first-con max-[637px]:text-xs hover:shadow-gray-500 sm:p-2  sm:text-xs  2xl:text-lg shadow-md shadow-gray-300 md:border-none 2x:border-none xl:border-none  sm:border-purple-600  max-2xl:text-gray-800 max-sm:text-purple-600  rounded-md flex flex-col items-center  bg-white  first-con-li"><img className=" xl:block first-con-img max-[614px]:hidden" src={livestock}/><span className="max-content  first-con-span">Other Animals </span> </div>
        <div onClick={petfunc} className=" shrink max-[614px]:w-64 max-[614px]:py-5   max-[768px]:-40   md:w-40   xl:w-40 2xl:w-40   pet-card border-[2px]  relative p-1 hover:scale-95 first-con max-[637px]:text-xs hover:shadow-gray-500 sm:p-2  sm:text-xs  2xl:text-lg shadow-md shadow-gray-300 md:border-none 2x:border-none xl:border-none  sm:border-purple-600  max-2xl:text-gray-800 max-sm:text-purple-600  rounded-md flex flex-col items-center  bg-white  first-con-li"><img  className="xl:block first-con-img max-[614px]:hidden" src={house}/>    <span className="max-content  first-con-span"> Shelters </span> </div>
      </div>

      <div className="flex flex-col w-full  sm:w-fit mt-10 text-center  p-10  items-center justify-center  ">
        <h1 className="text-purple-600 uppercase ubantu text-4xl max-[321px]:text-lg  sans available  ">Pets Available for Adoption Nearby</h1>
<div className="lg:flex-row max-sm:space-y-5  max-[768px]:space-y-0 mobile 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0 xl:space-x-5   lg:space-x-5  card-con sm:space-x-0 md:flex-row    flex mt-10 ">
<Cards/>
<PurpleCard/>
</div>
      </div>
    </div>
  
    <div className="h-full  flex flex-col max-sm:items-center max-2xl:justify-normal py-5  w-full">
<PetTips/>
<div className="flex px-4 flex-col items-center h-fit w-fit">
 
<Benefit/>

</div>
    </div>
     
  </div>
  );
}

export default Home;
