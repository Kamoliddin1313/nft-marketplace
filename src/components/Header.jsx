import { Link } from "react-router-dom";
// import { UserIcon } from "../assets/icons/Icons";

const Header = () => {
  return (
    <header className="flex px-[50px] lg:px-[30px] items-center justify-between py-[20px] font-space-mono font-semibold not-italic text-white">
      <Link to="/home" className="flex gap-4 items-center">
        <img
          src="./src/assets/icons/storefront.png"
          className="lg:w-[25px] md:w-[30px]"
        />
        <p className="text-[22px] lg:text-[16px] md:text-[18px]">
          NFT Marketplace
        </p>
      </Link>

      <ul className="flex items-center lg:text-[14px] font-work-sans gap-[10px]">
        <li className="px-[20px] py-[12px] lg:px-[10px] md:hidden lg:py-[8px]">
          <Link to="/aa">Marketplace</Link>
        </li>
        <li className="px-[20px] py-[12px] lg:px-[10px] md:hidden lg:py-[8px]">
          <Link to="/bb">Rankings</Link>
        </li>
        <li className="px-[20px] py-[12px] lg:px-[10px] md:hidden lg:py-[8px]">
          <Link to="/cc">Connect a wallet</Link>
        </li>
        <li>
          <Link
            to="/dd"
            className="flex py-[12px] hover:bg-green-600 hover:border-white border-[#A259FF] border-2 items-center gap-[12px] rounded-[20px] lg:px-[15px] lg:py-[8px] px-[30px] leading-6 font-semibold	bg-[#A259FF]"
          >
            <img src="./src/assets/icons/user.png" className="lg:w-[16px]"/>
            <p className="">Sign Up</p>
          </Link>
        </li>
      </ul>

    </header>
  );
};

export default Header;
