import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="container hidden sm:block">
      <div className="flex justify-between items-center w-full pt-8">
        <img className="w-[60px] h-[35px]" src="assets/logo.jpg" alt="" />
        <div className="relative w-full max-w-[350px]">
          <input
            className="bg-[#fff] w-full 
            border-[1px] outline-none px-6 py-3 h-9 rounded-[30px]"
            type="text"
            placeholder="Sarch Products.."
          />
          <CiSearch className="absolute top-0 right-0 mt-1 mr-2 size-7 text-gray-500" />
        </div>

        <div className="icons flex justify-center items-center gap-1">
          <div className="user-icon">
            <CiUser className="size-4" />
          </div>
          <div className="cart-icon relative">
            <CiShoppingCart className="size-4" />
            {/* <CartBadge size="w-[20px] h-[20px]" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
