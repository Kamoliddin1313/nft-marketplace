import React from "react";

const HomeHeader = () => {
  return (
    <section className="grid grid-cols-2 gap-[30px]  py-[80px] lg:py-[40px] sm:grid-cols-1">
      <div>
        <h1 className="font-work-sans text-[67px] font-semibold capitalize leading-[73px] xl:text-[52px] xl:leading-[65px] lg:text-[38px] lg:leading-[50px] md:text-[32px] md:leading-[45px]">
          Discover digital art & Collect NFTs
        </h1>

        <p className="mt-4 font-work-sans text-[22px] font-normal capitalize leading-[35px] xl:mt-3 xl:text-[18px] xl:leading-[30px] lg:text-[14px] lg:leading-[25px] md:text-[14px]">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>

        <button className="my-[30px] flex items-center justify-center gap-3 rounded-[20px] border-2 border-[#A259FF] bg-[#A259FF] px-[50px] py-[15px] xl:my-[25px] xl:py-3 lg:my-[15px] lg:px-[30px] lg:py-[10px] md:py-[8px] sm:mx-auto sm:h-[60px] sm:w-full">
          <img src="./src/assets/icons/rocket_launch_icon.svg" alt="btnImg" />
          Get Started
        </button>

        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <p className="font-space-mono text-[28px] font-bold leading-[39px] xl:text-[24px] xl:leading-[35px] lg:text-[20px]">
              240k+
            </p>
            <p className="font-work-sans text-[24px] font-normal leading-[38px] xl:text-[20px] xl:leading-[35px] lg:text-[16px] md:text-[14px]">
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

      <div className="h-[500px] rounded-[24px] bg-[#3B3B3B] xl:h-[460px] lg:h-[360px]">
        <img
          src="./src/assets/images/imagePlaceholder.png"
          alt="img"
          className="h-[79%] w-full xl:h-[75%] lg:h-[70%]"
        />

        <div className="p-[20px] font-work-sans capitalize not-italic">
          <p className="text-[22px] font-semibold	leading-[31px]">
            Space Walking
          </p>

          <div className="mt-[10px] flex gap-3 font-normal">
            <img src="./src/assets/images/avatar.png" alt="img" />
            <p className="leading-[22px]">Animakid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
