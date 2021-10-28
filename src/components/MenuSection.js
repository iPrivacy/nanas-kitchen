import React from "react";

function MenuSection() {
  return (
    <div className="m-auto w-11/12">
      <div className="mt-8 flex justify-evenly bg-gray-100 rounded-md p-5">

        <div className="bg-white rounded overflow-hidden shadow-md w-3/12 cursor-pointer" >
          <img src={process.env.PUBLIC_URL + "/images/food.jpg"} className="transform hover:scale-110 transition-transform duration-1000 ease-out"/>
          <div className="p-4 hover:text-yellow-200 transition duration-300">
            <span className="font-semibold font-lato text-3xl text-gray-300 my-2">
              Platter
            </span>
            <span className="block font-semibold font-lato text-l text-gray-300 my-1">
              Wings, Ribs, Chicken Pops, Dip and Chips
            </span>
            <span className="block font-semibold font-specialElite text-xl text-green-300 my-1">
              R130
            </span>
          </div>
        </div>

        <div className=" bg-white rounded overflow-hidden shadow-md w-3/12 cursor-pointer">
          <img src={process.env.PUBLIC_URL + "/images/food.jpg"} className="transform hover:scale-110 transition-transform duration-1000 ease-out"/>
          <div className="p-4 hover:text-yellow-200 transition duration-300">
            <span className="font-semibold font-lato text-2xl text-gray-300 my-2">
              Platter
            </span>
            <span className="block font-semibold font-lato text-l text-gray-300 my-1">
              Wings, Ribs, Chicken Pops, Dip and Chips
            </span>
            <span className="block font-semibold font-specialElite text-xl text-green-300 my-1">
              R130
            </span>
          </div>
        </div>

        <div className=" bg-white rounded overflow-hidden shadow-md w-3/12 cursor-pointer">
          <img src={process.env.PUBLIC_URL + "/images/food.jpg"} className="transform hover:scale-110 transition-transform duration-1000 ease-out"/>
          <div className="p-4">
            <span className="font-semibold font-lato text-3xl text-gray-300 my-2">
              Platter
            </span>
            <span className="block font-semibold font-lato text-l text-gray-300 my-1">
              Wings, Ribs, Chicken Pops, Dip and Chips
            </span>
            <span className="block font-semibold font-specialElite text-xl text-green-300 my-1">
              R130
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
