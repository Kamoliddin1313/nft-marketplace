import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#3B3B3B] py-[40px] px-[115px] lg:px-[30px]">
      <div className="flex w-full grid-cols-2 md:grid md:grid-cols-1 gap-[80px] xl:gap-[30px]">
        <div className="flex justify-between sm:grid-cols-1 sm:grid grid-cols-2 lg:w-full xl:gap-[30px] gap-[40px]">
          <div className="text-[#CCC] w-3/5">
            <div className="flex items-center gap-3">
              <img
                src="./src/assets/icons/storefront.png"
                className="lg:w-[28px]"
              />
              <p className="font-space-mono lg:text-[18px] text-[22px] xl:text-[20px] font-bold not-italic text-white">
                NFT Marketplace
              </p>
            </div>

            <p className="font-work-sans font-normal text-[16px] lg:text-[14px] mt-[25px] text-[#858584] not-italic">
              NFT marketplace UI created with Anima for Figma.
            </p>

            <p className="font-work-sans font-normal my-[20px] lg:text-[14px] text-[16px] text-[#858584] not-italic">
              Join our community
            </p>

            <div className="gap-[10px] flex items-center">

              <a href="#">
                <img className="lg:w-[30px]"
                  src="./src/assets/icons/discordLogo.png"
                />
              </a>

              <a href="#">
                <img className="lg:w-[30px]"
                  src="./src/assets/icons/youtubeLogo.png"
                />
              </a>

              <a href="#">
                <img className="lg:w-[30px]"
                  src="./src/assets/icons/twitterLogo.png"
                />
              </a>

              <a href="#">
                <img className="lg:w-[30px]"
                  src="./src/assets/icons/instagramLogo.png"
                />
              </a>

            </div>
          </div>

          <div className="text-[#CCC] w-2/5">
            <p className="text-[22px] xl:text-[20px] lg:text-[18px] font-bold font-space-mono not-italic text-white">
              Explore
            </p>

            <p className="font-work-sans text-[16px] lg:text-[14px] mt-[25px] text-[#858584] font-normal not-italic">
              Marketplace
            </p>

            <p className="font-work-sans text-[16px] lg:text-[14px] my-[20px] text-[#858584] font-normal not-italic">
              Rankings
            </p>

            <p className="font-work-sans text-[16px] lg:text-[14px] text-[#858584] font-normal not-italic">
              Connect a wallet
            </p>
          </div>
        </div>

        <div>
          <p className="text-[22px] xl:text-[20px] lg:text-[18px] font-bold font-space-mono not-italic text-white">
            Join our weekly digest
          </p>

          <p className="font-work-sans text-[16px] lg:text-[14px] mt-[25px] text-[#858584] font-normal not-italic">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="mt-[20px] box-border md:w-2/3 sm:w-full md:mb-[20px] xl:top-[25px] flex relative w-full rounded-[20px] bg-white">
            <input
              className="rounded-[20px] lg:text-[14px] lg:py-[10px] xl:pl-[15px] outline-none xl:py-[12px] px-[20px] py-[16px] text-[#2B2B2B]"
              type="text"
              placeholder="Enter your email here Subscribe"
            />
            <button className="rounded-[20px] md:px-[50px] lg:text-[14px] lg:py-[10px] xl:px-[20px] font-work-sans xl:py-[12px] hover:bg-green-600 absolute right-0 px-[50px] py-[16px] bg-[#A259FF] text-white">
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
