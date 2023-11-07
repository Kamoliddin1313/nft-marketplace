import React from "react";
import { trendingCollection } from "../../contents/index";
const TrendingCollection = () => {
  return (
    <section className="my-[80px] lg:my-[50px] md:my-[50px]">
      <h2 className="font-work-sans text-[38px] font-semibold leading-[45px] lg:text-[32px]">
        Trending Collection
      </h2>

      <p className="mt-[10px] font-work-sans  text-[22px] font-semibold capitalize leading-[35px] lg:text-[18px]">
        Checkout our weekly updated trending collection.
      </p>

      <div className="mt-[60px] grid w-full grid-cols-3 gap-[30px] lg:mt-[45px] lg:gap-4 md:grid-cols-2 sm:grid-cols-1">
        {trendingCollection.map((imag) => (
          <div key={imag.id} className="w-full">
            <div className="w-full">
              <img src={imag.mainImg} className="w-full rounded-[20px]" />
            </div>
            <div className="mt-[15px] grid grid-cols-3 gap-[15px]">
              {imag.imgs.map((img) => (
                <img className="rounded-[20px]" src={img} />
              ))}

              <p className="flex items-center justify-center rounded-[20px] bg-[#A259FF] font-space-mono text-[22px] font-bold leading-[35px] xl:text-[18px] lg:text-[15px]">
                {imag.total}
              </p>
            </div>

            <div className="mt-[15px] font-work-sans capitalize lg:mt-2.5">
              <p className="text-[22px] font-semibold leading-[31px] xl:text-[20px] lg:text-[18px]">
                {imag.title}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <img
                  src={imag.avatar_img}
                  className="w-[30px]"
                  alt="avatar_img"
                />
                <span className="font-normal leading-[22px] md:text-[14px]">
                  {imag.creator_img}
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
