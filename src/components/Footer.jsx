import React from "react";

const FooterPage = () => {
  return (
    <footer className="px-[100px] py-[40px]">
      <div className="flex w-full">
        <div className="flex w-3/5 justify-between">
          <div className="w-3/5 text-[#CCC]">
            <div className="flex items-center">
              <img
                src="./src/assets/icons/storefront.png"
                className="h-[32px] w-[32px]"
              />
              <p className="px-[12px] py-[8px] font-space-mono text-[22px] font-semibold not-italic text-white">
                NFT Marketplace
              </p>
            </div>

            <p className="mt-[20px] w-3/5 font-work-sans text-[16px] font-normal	not-italic">
              NFT marketplace UI created with Anima for Figma.
            </p>

            <p className="mt-[15px] font-work-sans text-[16px] font-normal	not-italic">
              Join our community
            </p>

            <div className="mt-[10px] flex items-center gap-[10px]">
              <a href="#">
                <img src="./src/assets/icons/discordLogo.png" />
              </a>
              <a href="#">
                <img src="./src/assets/icons/youtubeLogo.png" />
              </a>
              <a href="#">
                <img src="./src/assets/icons/twitterLogo.png" />
              </a>
              <a href="#">
                <img src="./src/assets/icons/instagramLogo.png" />
              </a>
            </div>
          </div>

          <div className="w-2/5 text-[#CCC]">
            <p className="py-[8px] font-space-mono text-[22px] font-semibold not-italic text-white">
              Explore
            </p>

            <p className="mt-[20px] w-1/2 font-work-sans text-[16px] font-normal	not-italic">
              Marketplace
            </p>

            <p className="mt-[15px] font-work-sans text-[16px] font-normal	not-italic">
              Rankings
            </p>

            <p className="mt-[15px] font-work-sans text-[16px] font-normal	not-italic">
              Connect a wallet
            </p>
          </div>
        </div>

        <div className="w-2/5 text-[#CCC]">
          <p className="py-[8px] font-space-mono text-[22px] font-semibold not-italic text-white">
            Join our weekly digest
          </p>

          <p className="mt-[20px] w-1/2 font-work-sans text-[16px] font-normal	not-italic">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="mt-[20px] flex justify-between rounded-[20px] bg-white">
            <input
              className="rounded-[20px] px-[20px] py-[16px]	 outline-none"
              type="text"
              placeholder="Enter your email here Subscribe"
            />
            <button className="rounded-[20px] bg-[#A259FF] px-[50px] text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="my-[35px] h-[1px] w-full bg-[#858584]"></div>
      <p className=" font-work-sans text-[14px] font-normal not-italic	text-[#CCC]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
};

export default FooterPage;
