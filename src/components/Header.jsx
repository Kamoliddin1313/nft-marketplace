import { Link } from "react-router-dom";
// import { UserIcon } from "../assets/icons/Icons";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-[50px] py-[20px] font-space-mono font-semibold not-italic text-white lg:px-[30px]">
        <Link to="/home" className="flex items-center gap-4">
          <img
            src="./src/assets/icons/storefront.svg"
            className="lg:w-[25px] md:w-[30px]"
          />
          <p className="text-[22px] lg:text-[16px] md:text-[18px]">
            NFT Marketplace
          </p>
        </Link>

        <ul className="flex items-center gap-[40px] font-work-sans lg:text-[14px] lg:gap-4">
          <li className="py-[12px] lg:px-[10px] lg:py-[8px] md:hidden">
            <Link to="/aa">Marketplace</Link>
          </li>
          <li className="py-[12px] lg:px-[10px] lg:py-[8px] md:hidden">
            <Link to="/bb">Rankings</Link>
          </li>
          <li className="py-[12px] lg:px-[10px] lg:py-[8px] md:hidden">
            <Link to="/cc">Connect a wallet</Link>
          </li>
        </ul>
        <button>
            <Link
              to="/dd"
              className="flex items-center gap-[12px] rounded-[20px] border-2 border-[#A259FF] bg-[#A259FF] px-[30px] py-[12px] font-semibold leading-6 lg:px-[15px]	lg:py-[8px]"
            >
              <img src="./src/assets/icons/user.svg" className="lg:w-[16px]" />
              <span className="">Sign Up</span>
            </Link>
          </button>
      </nav>
    </header>
  );
};

export default Header;
