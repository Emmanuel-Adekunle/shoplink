'use client';

import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";
import ProfileIcon from "apps/user-ui/src/assets/svgs/profile-icon";
import HeartIcon from "apps/user-ui/src/assets/svgs/heart-icon";
import CartIcon from "apps/user-ui/src/assets/svgs/cart-icon";
import HeaderBottom from "./header-bottom";

const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[80%] py-5 m-auto md:flex hidden items-center justify-between">
        
        {/*Logo*/}
        <div>
          <Link href="/">
            <span className="text-7xl font-semibold font-poppins">SHOPLINK</span>
          </Link>
        </div>

        {/*Search Bar*/}
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search for Products ....."
            className="w-full px-4 font-poppins font-medium border-[3px] border-[#000000] outline-none h-[60px]"
          />
          <div className="w-[60px] h-[60px] bg-[#000000] absolute top-0 right-0 flex items-center justify-center cursor-pointer">
            <Search color="#fff" />
          </div>
        </div>

        {/* Profile/Login */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link
              href={"/login"}
              className="border-2 w-[50px] h-[50px] flex items-center justify-center rounded-full border-[#010f1c1a]"
            >
              <ProfileIcon />
            </Link>
            <Link href={"/login"}>
              <div>
                <span className="block font-medium">Hello,</span>
                <span className="font-semibold">Sign In</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link href={"/wishlist"} className="relative">
            <HeartIcon/>
            <div className="w-6 h-6 border-2 border-white bg-red-500 rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px]">
              <span className="text-white font-medium text-sm">0</span>
            </div>
            </Link>

            <Link href={"/cart"} className="relative">
            <CartIcon/>
            <div className="w-6 h-6 border-2 border-white bg-red-500 rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px]">
              <span className="text-white font-medium text-sm">0</span>
            </div>
            </Link>
          </div>
        </div>

      </div>
      <div className="border-b border-b-[#99999938]" />
        <HeaderBottom/>
      </div>
    
  );
};

export default Header;
