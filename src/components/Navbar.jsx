import React from "react";
import { Link } from "react-router-dom";
// import { UserIcon } from "../assets/icons/Icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[50px] py-[20px] font-space-mono font-semibold not-italic text-white">
      <div className="flex items-center">
        
        <img src="./src/assets/icons/storefront.png"  className="h-[32px] w-[32px]"/>
        <p className="px-[12px] py-[8px] text-[22px]">NFT Marketplace</p>
      </div>
      <ul className="flex items-center gap-[50px] text-base">
        <li>
          <Link to="/aa">Marketplace</Link>
        </li>
        <li>
          <Link to="/bb">Rankings</Link>
        </li>
        <li>
          <Link to="/cc">Connect a wallet</Link>
        </li>
        <li>
          <Link to="/dd">
            <div className="flex items-center	gap-[12px] rounded-[20px] bg-[#A259FF] px-[30px] py-[16px]">
              <img src="./src/assets/icons/user.png" />
              {/* <UserIcon className="h-[32px] w-[32px] bg-red-900" /> */}
              <p>Sign Up</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
