import React, { useState } from "react";
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import catPic from "../assets/kitty-2948404.jpg";
import match from "../assets/match.png";


function CatAdo() {
  const [elem1, setElem1] =useState("hidden")
  const [elem2, setElem2] =useState("block")
  const [mytext, setMytext] =useState("show more")
  function hidden(){
   if(elem1 === "hidden"){
    setElem1("block")
    setElem2("hidden")
   setMytext("show less")
   }
  else {
    setElem1("hidden")
    setElem2("block")
    setMytext("show more")

   }
  }
  return (
    <div className="h-[150vh]  flex  flex-col  bg-gray-100  ">
      <h1 className="text-5xl self-center capitalize sans text-white text-center max-sm:p-3 max-sm:text-lg p-5 bg-purple-700 w-full">
      Cats & Kittens Adoption
      </h1>
      <div className="flex  max-sm:flex-col p-3 marker: max-sm:justify-center max-sm:items-center justify-center w-full h-full ">
        <div className="flex flex-col w-full max-sm:items-center ">
          <div className="flex-col shadow-md card items-center w-[50vw] max-sm:w-[80vw]  flex-wrap    bg-white flex">
            <img className=" w-[50vw] max-sm:w-[80vw] " src={catPic} />
            <span className=" p-1 text-xl  uppercase text-gray-600">
              cat adoption
            </span>
            <span className=" p-1 text-4xl text-purple-600 max-sm:text-lg">
              living with both dogs and cats
            </span>
            <span id="iam-hidden" className={` p-1 text-base ${elem2} cursive max-sm:text-sm `}>
              I'm not sure where the phrase "fighting like cats and dogs" comes
              from, but in the majority of homes I am acquainted with, dogs and
              cats share living
            </span>
            <span id="no-more-hidden" className={`p-1 text-base ${elem1} cursive max-sm:text-sm`}> 
              While working at the Washington Humane Society (WHS) in
              Washington, DC, I was thrilled when I found out that King, a large
              and handsome black Labrador mix was finally adopted after spending
              many months at WHS. King had been at the shelter for so long,
              everyone knew and loved him. King was a black adoptable dog at
              Washington Humane Society. When black colored dogs spend more time
              waiting for their new home than their lighter-colored kennelmates,
              this is known as Black Dog Syndrome (BDS). When I left WHS to
              pursue graduate work in anthropology at The George Washington
              University I conducted research into BDS. BDS is observed by
              shelters and rescue groups throughout America and affects black
              dogs, as well as cats. It is possible that there may simply be
              more black pets in the shelter and rescue population. However
              reports from across the country seem to illustrate the problem,
              and multiple national organizations have long recognized BDS as an
              issue that adversely affects the adoption rates of black pets.
            </span>
            <div className="p-4 max-sm:p-2">
              <button
                className="uppercase max-sm:w-36 max-sm:text-sm  border-purple-600  rounded-3xl ubantu text-purple-600  text-lg hover:bg-purple-700  hover:text-white  p-2 border w-60"
                onClick={hidden}
              >
                {mytext}
              </button>
            </div>
          </div>
        </div>
        <div className="flex max-sm:mt-10 max-sm:w-[80vw] shadow-md   bg-white p-10 h-fit items-center  flex-col">
          <img src={match} />
          <span className="text-4xl text-purple-600 max-sm:text-2xl">
            Find your best match
          </span>
          <span className="p-1 text-gray-600 capitalize">
            It only takes 60 seconds.
          </span>
          <button className="text-lg rounded-xl bg-purple-700  uppercase p-1 text-white ubantu w-60 hover:bg-purple-900  max-sm:text-xs max-sm:w-28    ">
            get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default CatAdo;
