import React from "react";
import Logo from "../assets/logo.png";
import Foodimg1 from '../assets/food1.png'
import Foodimg2 from '../assets/food2.png'

const Navbar = () => {
  return (
    <div className=" w-full h-[20vw] bg-slate-100 flex flex-col relative overflow-hidden ">
      <div className="flex items-center justify-center px-12 py-6">
        <div className=" ">
          <img src={Logo} className="w-20 h-20" alt="" />
        </div>
        <div className="w-1/2  flex justify-center">
          <input
            type="search"
            placeholder="Search meal"
            className=" w-2/3 px-4 py-2 bg-slate-50 rounded-3xl border-2 border-black outline-none"
            id=""
          />
        </div>
        <div className="flex  gap-7 ">
          <button className=" px-4 py-2 text-red-500 font-semibold rounded-3xl">
            Register
          </button>
          <button className="px-4 py-2 bg-white text-red-500 font-semibold  rounded-3xl">
            Login
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        <div> 
          <img src={Foodimg2} className="w-48 absolute left-0 scale-150 " alt="" />
        </div>
        <div className=" font-roca text-7xl ">Explore Recipes</div>
        <div>
          <img src={Foodimg1} alt="" className="w-48 absolute right-0 bottom-1 -rotate-45 scale-150" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
