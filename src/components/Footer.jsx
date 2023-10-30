import React from "react";

const Footer = () => {
  return (
    <footer className="py-[40px] sm:px-[60px] lg:py-[40px] mv:px-[50px] max-w-[1400px] mx-auto bg-[#3B3B3B] px-[105px] xl:px-[115px]">
      <div className="flex w-full lg:w-full mv:grid mv:grid-cols-1 lg:grid-cols-2 lg:gap-0">

        <div className="flex lg:grid-cols-2 lg:gap-[50px] justify-between mv:grid mv:grid-cols-1 mv:w-full">

          <div className="text-[#CCC] mv:w-full">

            <div className="flex items-center justify-between mv:w-full">
              <img
                src="./src/assets/icons/storefront.png"
                className="xl:h-[32px] xl:w-[32px] lg:h-[28px] lg:w-[28px]"
              />
              <p className="px-[12px] mv:w-full mv:text-[18px] md:text-[22px] py-[8px] font-space-mono xl:text-[22px] lg:text-[18px] font-semibold not-italic text-white">
                NFT Marketplace
              </p>
            </div>

            <p className="xl:mt-[20px] lg:mt-[15px] mv:w-full font-work-sans xl:text-[16px] lg:text-[14px] mv:my-[10px] sm:my-[20px] font-normal	not-italic">
              NFT marketplace UI created with Anima for Figma.
            </p>

            <p className="xl:mt-[15px] lg:mt-[10px] font-work-sans xl:text-[16px] lg:text-[14px] font-normal	not-italic">
              Join our community
            </p>

            <div className="mt-[10px] flex items-center sm:mt-[20px] lg:gap-[10px] mv:gap-[20px]">
              <a href="#">
                <img src="./src/assets/icons/discordLogo.png" className="sm:w-[28px] mv:w-[28px]"/>
              </a>
              <a href="#">
                <img src="./src/assets/icons/youtubeLogo.png" className="sm:w-[28px] mv:w-[28px]"/>
              </a>
              <a href="#">
                <img src="./src/assets/icons/twitterLogo.png" className="sm:w-[28px] mv:w-[28px]"/>
              </a>
              <a href="#">
                <img src="./src/assets/icons/instagramLogo.png" className="sm:w-[28px] mv:w-[28px]"/>
              </a>
            </div>

          </div>

          <div className="text-[#CCC] lg:pl-[30px] mv:w-full">
            <p className="py-[8px] mv:my-[15px] md:text-[22px] mv:text-[18px] font-space-mono xl:text-[22px] lg:text-[18px] font-semibold not-italic text-white">
              Explore
            </p>

            <p className="xl:mt-[20px] sm:my-[20px] lg:mt-[15px] font-work-sans xl:text-[16px] lg:text-[14px] font-normal	not-italic">
              Marketplace
            </p>

            <p className="xl:mt-[15px] sm:my-[20px] lg:mt-[10px] font-work-sans xl:text-[16px] lg:text-[14px] font-normal	not-italic">
              Rankings
            </p>

            <p className="xl:mt-[15px] md:my-[20px] lg:mt-[10px] font-work-sans xl:text-[16px] lg:text-[14px] font-normal	not-italic">
              Connect a wallet
            </p>
          </div>

        </div>

        <div className="mv:w-full lg:pl-[50px] text-[#CCC]">
          <p className="py-[8px] md:text-[22px] mv:my-[15px] mv:text-[18px] font-space-mono xl:text-[22px] lg:text-[18px] font-semibold not-italic text-white">
            Join our weekly digest
          </p>

          <p className="xl:mt-[20px] lg:mt-[15px] font-work-sans sm:my-[20px] xl:text-[16px] lg:text-[14px] font-normal	not-italic">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="mt-[20px] lg:w-4/5 md:grid-cols-2 md:w-3/5 md:rounded-[20px] md:bg-white mv:w-full w-full box-border mv:grid mv:grid-cols-1 mv:bg-transparent	 flex rounded-[20px] bg-white">
            <input
              className="rounded-[20px] mv:w-full xl:py-[10px] md:py-[10px] md:text-[18px] sm:text-[14px] lg:py-[12px] mv:px-[20px] sm:py-[10px] mv:py-[6px] outline-none"
              type="text"
              placeholder="Enter your email here Subscribe"
            />
            <button className="rounded-[20px] mv:w-full md:py-[10px] md:m-0 px-0 md:text-[18px] sm:text-[16px] mv:px-[20px] sm:py-[10px] bg-[#A259FF] mv:mt-[20px] mv:py-[6px] text-white">
              Subscribe
            </button>
          </form>

        </div>

      </div>

      <div className="my-[35px] h-[1px] w-full bg-[#858584]"></div>

      <p className=" font-work-sans mv:text-[14px] sm:text-[16px] font-normal not-italic	text-[#CCC]">
        Ⓒ NFT Market. Use this template freely.
      </p>

    </footer>
  );
};

export default Footer;
