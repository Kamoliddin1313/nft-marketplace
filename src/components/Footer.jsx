import React from "react";
import {
  DiscordIcon,
  InstagramIcon,
  StorefrontIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../assets/icons/Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-auto mt-auto max-w-[1280px] bg-[#3B3B3B] px-[115px] py-[40px] xl:px-[50px] lg:px-[72px] md:m-0">
      <div className="flex w-full justify-between xl:gap-[30px] lg:grid lg:grid-cols-1">
        <div className="flex grid-cols-2 justify-between gap-[40px] xl:w-3/5 xl:gap-[30px] lg:grid lg:w-[65%] lg:grid-cols-1 sm:grid sm:grid-cols-1">
          <div className="w-3/5 text-[#CCC] lg:w-full">
            <div className="flex items-center gap-3">
              <StorefrontIcon className="lg:w-[28px]" />
              <p className="font-space-mono text-[22px] font-bold not-italic text-white xl:text-[20px] lg:text-[18px]">
                NFT Marketplace
              </p>
            </div>

            <p className="mt-[25px] font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]">
              NFT marketplace UI created with Anima for Figma.
            </p>

            <p className="my-[20px] font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]">
              Join our community
            </p>

            <div className="flex items-center gap-[10px]">
              <a href="/">
                <DiscordIcon className="lg:w-[30px]" />
              </a>

              <a href="/">
                <YoutubeIcon className="lg:w-[30px]" />
              </a>

              <a href="/">
                <TwitterIcon className="lg:w-[30px]" />
              </a>

              <a href="/">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="w-2/5 text-[#CCC] lg:w-full">
            <p className="font-space-mono text-[22px] font-bold not-italic text-white xl:text-[20px] lg:text-[18px]">
              Explore
            </p>
            <div className="grid grid-cols-1">
              <Link
                to="/market-place"
                className="mt-[25px] font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]"
              >
                Marketplace
              </Link>

              <Link
                to="/rankings"
                className="my-[20px] font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]"
              >
                Rankings
              </Link>

              <Link
                to="/connect-wallet"
                className="font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]"
              >
                Connect a wallet
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="font-space-mono text-[22px] font-bold not-italic text-white xl:text-[20px] lg:text-[18px]">
            Join our weekly digest
          </p>

          <p className="mt-[25px] font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="relative mt-[20px] box-border flex w-full rounded-[20px] bg-white xl:top-[25px] lg:mb-5 md:grid md:grid-cols-1 md:bg-transparent sm:w-full">
            <input
              className="rounded-[20px] px-[20px] py-[16px] text-[#2B2B2B] outline-none xl:py-[12px] xl:pl-[15px] lg:text-[14px] md:w-full"
              type="text"
              placeholder="Enter your email here Subscribe"
            />
            <button className="absolute right-0 rounded-[20px] bg-[#A259FF] px-[50px] py-[16px] font-work-sans text-white xl:px-[30px] xl:py-[12px] lg:w-full lg:px-[50px] lg:text-[14px] md:sticky md:mt-5 md:w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="my-[35px] h-[1px] w-full bg-[#858584]"></div>

      <p className="font-work-sans font-normal text-[#CCC]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
};

export default Footer;
