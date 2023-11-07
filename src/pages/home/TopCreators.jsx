import React from "react";
import { topCreators } from "../../contents/index";
const TopCreators = () => {
  return (
    <div>
      <section className="mb-0 flex items-center justify-between font-work-sans sm:grid sm:grid-cols-1">
        <div className="mb-0">
          <h2 className="font-work-sans text-[38px] font-semibold leading-[45px] lg:text-[32px]">
            Top creators
          </h2>

          <p className="mb-0 mt-[10px] font-work-sans text-[22px] font-semibold capitalize leading-[35px] lg:text-[18px]">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>

        <button className="mt-[30px] flex items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] px-[50px] py-[15px] text-[16px] font-semibold leading-[22px] xl:px-[25px] lg:w-[28%] lg:px-[20px] lg:py-[10px] md:w-2/5 sm:mx-auto sm:h-[60px] sm:w-full">
          <img
            src="./src/assets/icons/rocket_launch_blue_icon.svg"
            alt="btnImg"
          />
          View Rankings
        </button>
      </section>

      <section className="mt-[60px] grid grid-cols-4 gap-[30px] capitalize lg:gap-4 md:grid-cols-2 md:gap-[30px] sm:grid-cols-1">
        {topCreators.map((value) => (
          <div
            key={value.id}
            className="relative rounded-[20px] bg-[#3B3B3B] p-[20px] font-work-sans xl:p-[15px] lg:p-[15px] md:p-4"
          >
            <span className="absolute flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#2B2B2B] font-space-mono text-[16px] font-normal text-[#858584] xl:h-[25px] xl:w-[25px] xl:text-[14px] lg:h-[20px] lg:w-[20px] lg:p-[12px] lg:text-[15px] sm:ml-[-5px] sm:mt-[-5px]">
              {value.id}
            </span>

            <div className="grid items-center font-work-sans md:flex md:gap-4">
              <img
                src={value.img}
                alt="user img"
                className="mx-auto w-1/2 md:ml-0 md:w-[30%] sm:w-[60px]"
              />

              <div className="mt-[20px] text-center md:m-0 md:w-[70%] md:gap-4 sm:w-full">
                <p className="text-[22px] font-semibold leading-[31px] xl:text-[18px] lg:text-[18px] md:text-left">
                  {value.name}
                </p>

                <div className="mt-[5px] flex justify-center gap-3 text-center text-[16px] font-normal leading-[22px] xl:grid-cols-1 xl:gap-2 xl:text-[12px] lg:text-[12px] md:justify-start md:px-0 sm:mx-auto sm:w-full">
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
