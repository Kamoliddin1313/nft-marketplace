import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3B3B3B] px-[115px] py-[40px] xl:px-[50px] lg:px-[30px]">
      <div className="flex w-full justify-between xl:gap-[30px] md:grid md:grid-cols-1">
        <div className="flex grid-cols-2 justify-between gap-[40px] xl:gap-[30px] lg:w-full sm:grid sm:grid-cols-1">
          <div className="w-3/5 text-[#CCC]">
            <div className="flex items-center gap-3">
              <img
                src="./src/assets/icons/storefront.svg"
                className="lg:w-[28px]"
              />
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
              <a href="#">
                <img
                  className="lg:w-[30px]"
                  src="./src/assets/icons/discord_logo.svg"
                />
              </a>

              <a href="#">
                <img
                  className="lg:w-[30px]"
                  src="./src/assets/icons/youtube_logo.svg"
                />
              </a>

              <a href="#">
                <img
                  className="lg:w-[30px]"
                  src="./src/assets/icons/twitter_logo.svg"
                />
              </a>

              <a href="#">
                <img
                  className="lg:w-[30px]"
                  src="./src/assets/icons/instagram_logo.svg"
                />
              </a>
            </div>
          </div>

          <div className="w-2/5 text-[#CCC]">
            <p className="font-space-mono text-[22px] font-bold not-italic text-white xl:text-[20px] lg:text-[18px]">
              Explore
            </p>

            <p className="mt-[25px] font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]">
              Marketplace
            </p>

            <p className="my-[20px] font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]">
              Rankings
            </p>

            <p className="font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]">
              Connect a wallet
            </p>
          </div>
        </div>

        <div>
          <p className="font-space-mono text-[22px] font-bold not-italic text-white xl:text-[20px] lg:text-[18px]">
            Join our weekly digest
          </p>

          <p className="mt-[25px] font-work-sans text-[16px] font-normal not-italic text-[#858584] lg:text-[14px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="relative mt-[20px] box-border flex w-full rounded-[20px] bg-white xl:top-[25px] md:mb-[20px] md:w-2/3 sm:w-full">
            <input
              className="rounded-[20px] px-[20px] py-[16px] text-[#2B2B2B] outline-none xl:py-[12px] xl:pl-[15px] lg:py-[10px] lg:text-[14px]"
              type="text"
              placeholder="Enter your email here Subscribe"
            />
            <button className="absolute right-0 rounded-[20px] bg-[#A259FF] px-[50px] py-[16px] font-work-sans text-white xl:px-[20px] xl:py-[12px] lg:py-[10px] lg:text-[14px] md:px-[50px]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="my-[35px] h-[1px] w-full bg-[#858584]"></div>

      <p className=" font-work-sans font-normal not-italic text-[#CCC]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
};

export default Footer;
