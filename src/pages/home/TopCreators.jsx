import React from "react";
import { topCreators } from "../../contents/index";
import { RocketLaunchBlueIcon } from "../../assets/icons/Icons";
const TopCreators = () => {
  return (
    <div>
      <section className="mx-auto mt-20 flex max-w-[1280px] items-center justify-between px-[115px] font-work-sans lg:mt-10 lg:gap-24 lg:px-[72px] md:grid md:grid-cols-1 md:gap-4 md:px-[30px] sm:grid sm:grid-cols-1 sm:px-[60px]">
        <div className="mb-0">
          <h2 className="font-work-sans text-[38px] font-semibold leading-[45px] xl:text-[36px] lg:text-[28px]">
            Top creators
          </h2>

          <p className="mb-0 mt-[10px] font-work-sans text-[22px] font-semibold capitalize leading-[35px] xl:text-[20px] lg:text-[16px] lg:leading-[22px]">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>

        <button className="mt-[30px] flex h-[60px] items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] px-[50px] font-work-sans text-[16px] font-semibold leading-[22px] xl:px-[30px] lg:px-[50px] sm:mx-auto sm:h-[60px] sm:w-full">
          <RocketLaunchBlueIcon />
          View Rankings
        </button>
      </section>

      <section className="mx-auto mb-20 mt-[60px] grid max-w-[1280px] grid-cols-4 gap-[30px] px-[115px] capitalize lg:grid-cols-2 lg:gap-[30px] lg:px-[72px] md:grid-cols-1 md:px-[30px] sm:grid-cols-1 sm:px-[60px]">
        {topCreators.map((value) => (
          <div
            key={value.id}
            className="relative rounded-[20px] bg-[#3B3B3B] p-[20px] font-work-sans xl:p-[15px] lg:p-[20px] md:p-5 lg:[&:nth-child(n+7)]:hidden md:[&:nth-child(n+7)]:hidden"
          >
            <span className="absolute flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#2B2B2B] font-space-mono text-[16px] font-normal text-[#858584] xl:h-[25px] xl:w-[25px] xl:text-[14px] lg:h-[20px] lg:w-[20px] lg:p-[12px] lg:text-[15px] sm:ml-[-5px] sm:mt-[-5px]">
              {value.id}
            </span>

            <div className="grid items-center font-work-sans lg:flex lg:gap-5">
              <img
                src={value.img}
                alt="user img"
                className="mx-auto w-1/2 lg:ml-0 lg:w-[25%] sm:w-[60px]"
              />

              <div className="text-center capitalize lg:m-0 lg:w-[70%] lg:gap-4 sm:w-full">
                <p className="mb-[5px] mt-[20px] font-work-sans text-[22px]  font-semibold leading-[31px] xl:text-[18px] lg:m-0 lg:text-left lg:text-[22px]">
                  {value.name}
                </p>

                <div className="flex justify-center gap-3 text-center text-[16px] font-normal leading-[22px] xl:grid-cols-1 xl:gap-2 xl:text-[12px] lg:justify-start lg:text-[12px] md:px-0 md:text-[16px] sm:mx-auto sm:w-full">
                  <p className="text-[#858584]">Total Sales:</p>

                  <p className="font-space-mono">{value.userTitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TopCreators;
