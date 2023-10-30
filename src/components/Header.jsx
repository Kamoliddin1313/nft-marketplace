import { Link } from "react-router-dom";
// import { UserIcon } from "../assets/icons/Icons";

const Header = () => {
  return (
    <header className="mx-auto flex mv:px-[30px] max-w-[1400px] items-center justify-between py-[20px] font-space-mono font-semibold not-italic text-white lg:px-[50px] xl:px-[80px]">
      <Link to="/home" className="flex items-center">
        <img
          src="./src/assets/icons/storefront.png"
          className="xl:h-[32px] xl:w-[32px] lg:h-[28px] lg:w-[28px] md:h-[26px] mv:w-[26px]"
        />
        <p className="px-[12px] py-[8px] xl:text-[22px] lg:text-[18px] md:text-[16px]">
          NFT Marketplace
        </p>
      </Link>

      <ul className="flex items-center xl:gap-[50px] md:gap-[20px] xl:text-base lg:gap-[30px] lg:text-[15px] md:text-[13px]">
        <li className="mv:hidden md:block">
          <Link to="/aa">Marketplace</Link>
        </li>
        <li className="mv:hidden md:block">
          <Link to="/bb">Rankings</Link>
        </li>
        <li className="mv:hidden md:block">
          <Link to="/cc">Connect a wallet</Link>
        </li>
        <li>
          <Link
            to="/dd"
            className="flex items-center gap-[12px] rounded-[20px]	bg-[#A259FF] mv:px-[20px] mv:py-[8px] lg:px-[18px] lg:py-[12px] xl:px-[25px] xl:py-[14px]"
          >
            <img src="./src/assets/icons/user.png" className="xl:w-[22px] lg:w-[18px] mv:w-[16px]"/>
            {/* <UserIcon className="h-[32px] w-[32px] bg-red-900" /> */}
            <p className="lg:text-[15px] mv:text-[13px]">Sign Up</p>
          </Link>
        </li>
      </ul>

    </header>
  );
};

export default Header;
