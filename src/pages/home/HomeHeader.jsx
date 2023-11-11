import React from "react";
import { RocketLaunch } from "../../assets/icons/Icons";

const HomeHeader = () => {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-2 gap-[30px] px-[115px] py-[80px]  lg:px-[72px] lg:py-[40px] md:grid-cols-1 md:px-[30px] sm:grid-cols-1 sm:px-[60px]">
      <div>
        <h1 className="font-work-sans text-[67px] font-semibold capitalize leading-[73px] xl:text-[50px] xl:leading-[62px] lg:text-[38px] lg:leading-[46px] md:text-[28px] md:leading-[39px]">
          Discover digital art & Collect NFTs
        </h1>

        <p className="mt-5 font-work-sans text-[22px] font-normal capitalize leading-[35px] xl:mt-3 xl:text-[18px] xl:leading-[30px] lg:text-[16px] lg:leading-[22px] md:text-[16px]">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>

        <button className="my-[30px] flex h-[60px] items-center justify-center gap-3 rounded-[20px] bg-[#A259FF] px-[50px] text-[16px] xl:my-[25px] xl:px-8 xl:py-3 lg:my-5 lg:px-[50px] md:my-10 md:w-full sm:mx-auto sm:h-[60px] sm:w-full">
          <RocketLaunch />
          Get Started
        </button>

        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <p className="font-space-mono text-[28px] font-bold leading-[39px] xl:text-[24px] xl:leading-[35px] lg:text-[20px] md:text-[22px]">
              240k+
            </p>
            <p className="font-work-sans text-[24px] leading-[38px] xl:text-[20px] xl:leading-[35px] lg:text-[16px] md:text-[16px]">
              Total Sale
            </p>
          </div>

          <div>
            <p className="font-space-mono text-[28px] font-bold leading-[39px] xl:text-[24px] xl:leading-[35px] lg:text-[20px]">
              100k+
            </p>
            <p className="font-work-sans text-[24px] font-normal leading-[38px] xl:text-[20px] xl:leading-[35px] lg:text-[16px] md:text-[14px]">
              Auctions
            </p>
          </div>

          <div>
            <p className="font-space-mono text-[28px] font-bold leading-[39px] xl:text-[24px] xl:leading-[35px] lg:text-[20px]">
              240k+
            </p>
            <p className="font-work-sans text-[24px] font-normal leading-[38px] xl:text-[20px] xl:leading-[35px] lg:text-[16px] md:text-[14px]">
              Artists
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] bg-[#3B3B3B] xl:h-[420px]">
        <img
          src="./src/assets/images/imagePlaceholder.png"
          alt="img"
          className="w-full xl:h-[75%]"
        />
        <div className="p-[20px] font-work-sans capitalize">
          <p className="text-[22px] font-semibold	leading-[31px]">
            Space Walking
          </p>

          <div className="mt-[10px] flex gap-3 font-normal">
            <img src="./src/assets/images/avatar.png" alt="img" />
            <p className="text-[16px] leading-[22px]">Animakid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
