import React from "react";
import { discoverMoreNFTs } from "../../contents/index";
import { SeeImg } from "../../assets/icons/Icons";
const DiscoverMoreNFTs = () => {
  return (
    <section className=" mx-auto max-w-[1280px] p-0 px-[115px] py-[80px] lg:m-0 lg:px-[72px] md:p-[30px] md:px-[30px] sm:px-[60px]">
      <div className="flex items-center justify-between font-work-sans capitalize md:grid md:grid-cols-1 sm:grid sm:grid-cols-1">
        <div>
          <h2 className="text-[38px] font-semibold leading-[45px] xl:text-[36px] lg:text-[28px] lg:leading-[39px]">
            Discover More NFTs
          </h2>

          <p className="mt-[10px] text-[22px] leading-[35px] xl:text-[20px] lg:text-[16px] lg:leading-[22px]">
            Explore new trending NFTs
          </p>
        </div>

        <button className="my-[30px] mb-0 flex h-[60px] items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] px-[50px] text-[16px] font-semibold leading-[22px] xl:px-[30px] lg:px-[50px] md:mt-[20px] md:w-full sm:mx-auto sm:h-[60px] sm:w-full">
          <SeeImg />
          See All
        </button>
      </div>

      <div className="mt-[60px] grid w-full grid-cols-3 gap-[30px] lg:mt-10 lg:grid-cols-2 md:grid-cols-1 md:gap-[30px] sm:grid-cols-1">
        {discoverMoreNFTs.map((value) => (
          <div key={value.id}>
            <img src={value.bigImg} alt="bigImg" className="w-full" />
            <div className="rounded-b-[20px] bg-[#3B3B3B] px-[30px] py-[20px] capitalize xl:px-[20px] lg:p-5 md:p-[20px] sm:p-[30px]">
              <p className="font-work-sans text-[22px] font-semibold leading-8 xl:text-[20px]">
                {value.titleName}
              </p>

              <div className="mt-[10px] flex items-center gap-3">
                <img src={value.smallImg} alt="smallImg" className="w-[30px]" />
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
  );
};

export default DiscoverMoreNFTs;
