import { Link } from "react-router-dom";
import { Storefront, ToggleBtn, User } from "../assets/icons/Icons";

const Header = () => {
  return (
    <header className="flex items-center px-[150px] py-[20px] font-space-mono font-semibold text-white xl:px-[100px] xl:py-[15px] lg:px-[50px] md:px-[30px]">
      <Link to="/home" className="flex items-center gap-4 lg:gap-[9px]">
        <Storefront />
        <span className="text-[22px] xl:text-[20px] lg:text-[16px] md:text-[18px]">
          NFT Marketplace
        </span>
      </Link>

      <nav className="ml-auto mr-4 lg:hidden">
        <ul className="flex items-center gap-[40px] font-work-sans text-[16px] xl:text-[14px] lg:gap-4 lg:text-[14px]">
          <li className="py-[12px] lg:px-[10px] lg:py-[8px]">
            <Link to="/market-place">Marketplace</Link>
          </li>
          <li className="py-[12px] lg:px-[10px] lg:py-[8px]">
            <Link to="/rankings">Rankings</Link>
          </li>
          <li className="py-[12px] lg:px-[10px] lg:py-[8px]">
            <Link to="/connect-wallet">Connect a wallet</Link>
          </li>
        </ul>
      </nav>

      <Link
        to="/"
        className="ml-[8px] flex h-[60px] items-center gap-3 rounded-[20px] border-2 border-[#A259FF] bg-[#A259FF] px-[50px] text-[16px] font-semibold leading-6 xl:px-10 lg:hidden lg:px-[15px] lg:py-[6px]"
      >
        <User />
        <span>Sign Up</span>
      </Link>

      <Link to="/" className="ml-auto hidden lg:block">
        <ToggleBtn />
      </Link>
    </header>
  );
};

export default Header;
