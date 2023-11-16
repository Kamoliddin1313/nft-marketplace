import React from "react";
import { SeeImgIcon } from "../../assets/icons/Icons";

const BgImg = () => {
  return (
    <section className="mx-auto h-[640px] bg-[linear-gradient(rgba(162,89,255,0.00)0%,#A259FF_100%),url('./src/assets/images/bg-img.png')] bg-cover bg-center bg-no-repeat lg:h-[500px]">
      <div className="mb-auto flex h-[100%] w-full items-end justify-between px-[115px] py-[60px] lg:px-[72px] md:grid md:grid-cols-1 md:px-[30px] sm:grid sm:grid-cols-1">
        <div className="sm:ml-0">
          <button className="flex items-center gap-3 rounded-[20px] bg-[#3B3B3B] px-[20px] py-[10px] sm:mx-auto">
            <img
              src="./src/assets/images/top_creators/shroomie.png"
              alt="shroomie"
              className="h-[24px] w-[24px]"
            />

            <span className="font-work-sans text-[16px] font-normal leading-[22px] md:text-[14px]">
              Shroomie
            </span>
          </button>

          <h1 className="my-[30px] font-work-sans text-[51px] font-semibold capitalize leading-[56px] xl:text-[46px] lg:text-[38px] lg:leading-[45px] md:text-[38px] sm:text-center">
            Magic Mashrooms
          </h1>

          <button className="flex items-center justify-center gap-3 rounded-[20px] bg-white px-[50px] py-[22px] font-work-sans text-[16px] font-semibold text-[#2B2B2B] md:mb-[30px] md:w-full sm:mx-auto">
            <SeeImgIcon />
            See All
          </button>
        </div>

        <div className="rounded-[20px] bg-[#b6b6b348] p-[30px] font-space-mono md:mx-auto sm:mx-auto sm:mt-[30px] sm:w-4/5 sm:text-center">
          <p className="text-[12px] font-normal leading-[13px]">
            Auction ends in:
          </p>

          <div className="mt-[10px] flex items-center gap-[10px] not-italic">
            <div className="sm:mx-auto">
              <p className="mb-[5px] flex gap-[10px] text-[38px] font-bold capitalize leading-[45px] md:text-[32px] ">
                <span>59</span>
                <span>:</span>
              </p>

              <p className="text-[12px] font-normal leading-[13px]">Hours</p>
            </div>

            <div className="sm:mx-auto">
              <p className="mb-[5px] flex gap-[10px] text-[38px] font-bold capitalize leading-[45px] md:text-[32px]">
                <span>59</span>
                <span>:</span>
              </p>

              <p className="text-[12px] font-normal leading-[13px]">Minutes</p>
            </div>

            <div className="sm:mx-auto">
              <p className="mb-[5px] flex gap-[10px] text-[38px] font-bold capitalize leading-[45px] md:text-[32px]">
                <span>59</span>
              </p>

              <p className="text-[12px] font-normal leading-[13px]">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BgImg;
