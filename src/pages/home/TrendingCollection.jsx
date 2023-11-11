import React from "react";
import { trendingCollection } from "../../contents/index";
const TrendingCollection = () => {
  return (
    <section className="lg-my-10 mx-auto my-[80px] max-w-[1280px] px-[115px] lg:px-[72px] md:my-[50px] md:px-[30px] sm:px-[60px]">
      <h2 className="font-work-sans text-[38px] font-semibold leading-[45px] xl:text-[36px] lg:text-[28px] lg:leading-[39px] md:text-[28px]">
        Trending Collection
      </h2>

      <p className="mt-[10px] font-work-sans text-[22px] font-semibold capitalize leading-[35px] xl:text-[20px] lg:text-[16px] lg:leading-[22px] md:text-[16px]">
        Checkout our weekly updated trending collection.
      </p>

      <div className="mt-[60px] grid w-full grid-cols-3 gap-[30px] lg:mt-10 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {trendingCollection.map((imag) => (
          <div
            key={imag.id}
            className="w-full md:[&:nth-child(n+2)]:hidden lg:[&:nth-child(n+3)]:hidden"
          >
            <div className="w-full">
              <img src={imag.mainImg} className="w-full rounded-[20px]" />
            </div>
            <div className="my-[15px] grid grid-cols-3 gap-[15px]">
              {imag.imgs.map((img) => (
                <img className="rounded-[20px]" src={img} />
              ))}

              <p className="flex items-center justify-center rounded-[20px] bg-[#A259FF] font-space-mono text-[22px] font-bold leading-[35px] xl:text-[18px] lg:text-[22px]">
                {imag.total}
              </p>
            </div>

            <div className="font-work-sans capitalize lg:mt-2.5">
              <p className="text-[22px] font-semibold leading-[31px] xl:text-[20px] lg:text-[22px]">
                {imag.title}
              </p>
              <div className="mt-2.5 flex items-center gap-3">
                <img
                  src={imag.creatorAvatar}
                  className="w-[30px]"
                  alt="avatar_img"
                />
                <span className="text-[16px] leading-[22px] md:text-[14px]">
                  {imag.creator}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCollection;
