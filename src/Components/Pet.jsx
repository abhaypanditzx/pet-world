import React from "react";
import petfunc from "../pages/Home";
import {
  XMarkIcon,
  BackwardIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

function Pet(props) {
  let a = " within ";
  let b = " milles ";
  return (
    <div
      id="id"
      className={`hidden  shadow-xl sm:w-fit w-80    space-y-2   flex-col justify-center items-center  shadow-black top-0 z-50 h-fit  p-2 bg-white`}
    >
      <div className="flex h-fit  w-full p-2 justify-between border-b-[1px] ">
        <ChevronLeftIcon
          onClick={() => {
            id.style.display = "none";
          }}
          className="h-7 w-7"
        />
        <XMarkIcon
          onClick={() => {
            id.style.display = "none";
          }}
          className="h-7 w-7"
        />
      </div>
      <h1 className="font-bold capitalize text-center sm:p-4   sm:text-2xl text-lg">
        where do you like to search
      </h1>
      <form className="flex input sm:p-10 space-x-1 sm:h-fit w-full sm:flex-row flex-col justify-around sm:py-10 items-center  ">
        <input   placeholder="Enter City, State or ZIP" className="sm:w-auto input w-40   " />
        <select className="border-[1px] border-[#ccc] p-3">
          <option color="red" className="bg-purple-100 " value="10">
            {a + 10 + b}
          </option>
          <option className="bg-purple-100" value="25">
            {25 + b}
          </option>
          <option className="bg-purple-100" value="50">
            {50 + b}
          </option>
          <option className="bg-purple-100" value="100">
            {100 + b}
          </option>
        </select>
      </form>
        <button
          onSubmit={() => {
            alert("submited");
          }}
          className=" hover:bg-purple-700  bg-purple-500 rounded-xl px-3 text-center   flex justify-center items-center text-white capitalize oswald shadow-md shadow-gray-300"
        >
          continue
        </button>
    </div>
  );
}

export default Pet;
