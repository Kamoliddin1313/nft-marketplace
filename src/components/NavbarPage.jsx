import React from "react";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <nav className="flex justify-between font-space-mono px-[50px] items-center font-semibold not-italic py-[20px] text-white">
      <div className="flex items-center">
        <img src="./src/assets/icons/storefront.png" className="h-[32px] w-[32px]"/>
        <p className="px-[12px] py-[8px] text-[22px]">NFT Marketplace</p>
      </div>
      <div className="flex items-center text-base gap-[50px]">
        <Link to="/aa">Marketplace</Link>
        <Link to="/bb">Rankings</Link>
        <Link to="/cc">Connect a wallet</Link>
        <Link to="/dd">
          <div className="flex items-center	rounded-[20px] bg-[#A259FF] px-[30px] py-[16px] gap-[12px]">
            <img src="./src/assets/icons/user.png" />
            <p>Sign Up</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarPage;
