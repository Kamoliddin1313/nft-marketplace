import React from "react";
import { discoverMoreNFTs } from "../../contents/index";
const DiscoverMoreNFTs = () => {
  return (
    <div>
      <section className="py-[80px] md:py-[30px]">
        <div className="flex items-center justify-between font-work-sans capitalize sm:grid sm:grid-cols-1">
          <div>
            <h2 className="text-[38px] font-semibold leading-[45px] lg:text-[32px]">
              Discover More NFTs
            </h2>

            <p className="mt-[10px] text-[22px] font-semibold leading-[35px] lg:text-[16px]">
              Explore new trending NFTs
            </p>
          </div>

          <button className="my-[30px] mb-0 flex items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] px-[50px] py-[15px] text-[16px] font-semibold leading-[22px] lg:px-[30px] lg:py-[10px] md:mt-[20px] md:w-2/5 sm:mx-auto sm:h-[60px] sm:w-full">
            <img src="./src/assets/icons/eye.svg" alt="eyeImg" />
            See All
          </button>
        </div>

        <div className="mt-[60px] grid w-full grid-cols-3 gap-[30px] not-italic lg:gap-[15px] md:grid-cols-2 md:gap-[30px] sm:grid-cols-1">
          {discoverMoreNFTs.map((value) => (
            <div key={value.id} className="">
              <img src={value.bigImg} alt="bigImg" className="w-full" />
              <div className="rounded-b-[20px] bg-[#3B3B3B] px-[30px] py-[20px] capitalize xl:px-[20px] lg:p-5 md:p-[20px] sm:p-[30px]">
                <p className="font-work-sans text-[22px] font-semibold leading-8 xl:text-[20px]">
                  {value.titleName}
                </p>

                <div className="mt-[10px] flex items-center gap-3">
                  <img
                    src={value.smallImg}
                    alt="smallImg"
                    className="w-[30px]"
                  />
                  <p className="font-space-mono text-[16px] font-normal leading-[22px]">
                    {value.smallImgName}
                  </p>
                </div>

                <div className="mt-[25px] flex items-center justify-between font-space-mono text-[12px] font-normal leading-[13px] text-[#858584] sm:text-[16px]">
                  <p>price</p>
                  <p>Highest Bid</p>
                </div>

                <div className="mt-[8px] flex items-center justify-between font-space-mono font-normal leading-[22px]">
                  <p>{value.price}</p>
                  <p>{value.bigPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DiscoverMoreNFTs;
