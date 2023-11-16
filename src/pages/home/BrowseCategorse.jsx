import React from "react";
import { browseCategories } from "../../contents/index";
const BrowseCategorse = () => {
  return (
    <section className="mx-auto my-[80px] max-w-[1280px] px-[115px] capitalize xl:my-16 lg:my-10 lg:px-[72px] md:m-0 md:px-[30px] sm:px-[60px]">
      <h2 className="font-work-sans text-[38px] font-semibold leading-[45px] xl:text-[36px] lg:text-[28px]">
        Browse Categories
      </h2>

      <div className="grid grid-cols-4 gap-[30px] pt-[60px] lg:pt-10 md:grid-cols-2 md:gap-[30px] sm:grid-cols-2">
        {browseCategories.map((value) => (
          <div key={value.id} className="rounded-[24px] bg-[#3B3B3B]">
            <div className="relative overflow-hidden rounded-t-[24px]">
              {/* <img
                src={value.top_img}
                alt="imgtop"
                className="absolute inset-[30%] z-30 xl:w-2/5 md:inset-[20%] md:w-3/5"
              /> */}

              <value.top_img className="absolute xl:w-2/5 md:inset-[20%] md:w-3/5" />

              <img src={value.img} className="w-full blur-[7px]" />
            </div>

            <p className="px-[30px] py-[20px] font-work-sans text-[22px] font-semibold capitalize leading-[31px] xl:px-5 xl:py-[15px] xl:text-[18px] lg:p-5 lg:text-[16px] md:text-[16px]">
              {value.titleName}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategorse;
