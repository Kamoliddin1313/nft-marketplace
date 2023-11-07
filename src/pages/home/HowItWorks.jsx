import React from "react";
import { howItWorks } from "../../contents/index";
const HowItWorks = () => {
  return (
    <div>
      <section className="mx-auto max-w-[1280px] px-[115px] py-[80px] lg:px-[30px] md:px-[30px]">
        <div className="mb-[80px] font-work-sans not-italic sm:text-center">
          <h2 className=" text-[38px] font-semibold capitalize leading-[45px] lg:text-[32px]">
            How it works
          </h2>

          <p className="mt-[10px] text-[22px] font-normal capitalize lg:text-[16px]">
            Find out how to get started
          </p>

          <div className="grid w-full grid-cols-3 gap-[30px] py-[48px] lg:gap-[15px] sm:grid-cols-1">
            {howItWorks.map((value) => (
              <div
                key={value.id}
                className="rounded-[20px] bg-[#3B3B3B] px-[30px] pb-[30px] pt-[10px] text-center font-work-sans lg:px-[20px] lg:pb-[20px]"
              >
                <img
                  src={value.img}
                  alt="img"
                  className="mx-auto px-[20px] xl:px-[30px] md:w-full md:p-0"
                />
                <p className="mt-[20px] text-[22px] font-semibold capitalize leading-[31px] md:text-[16px]">
                  {value.titleName}
                </p>
                <p className="mt-[10px] text-[16px] font-normal leading-[22px] xl:text-[14px] md:text-[12px]">
                  {value.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[80px] rounded-[20px] bg-[#3B3B3B] p-[60px] xl:gap-[50px] xl:p-[45px] lg:gap-[30px] lg:p-[35px] md:px-[25px] sm:grid-cols-1 sm:p-[45px]">
          <div className="h-full w-full">
            <img
              src="./src/assets/images/kosmosUserImg.png"
              alt="kosmosUserImg"
              className="h-full w-full"
            />
          </div>

          <div className="w-full font-work-sans capitalize">
            <h2 className="mt-5 text-[38px] font-semibold leading-[45px] lg:mt-3 lg:text-[32px] lg:leading-[40px] md:text-[28px]">
              Join our weekly digest
            </h2>

            <p className="mt-[10px] text-[22px] font-normal lg:text-[16px] lg:leading-[22px]">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <form
              action="/"
              className="relative mt-[40px] flex justify-between rounded-[20px] bg-white xl:mt-[100px] lg:mt-10 lg:grid-cols-1 md:mt-[30px] md:grid md:bg-transparent sm:grid"
            >
              <input
                type="text"
                placeholder="Enter your email here"
                className="rounded-[20px] px-[30px] py-[16px] text-[#2B2B2B] outline-0 xl:py-[12px] xl:pl-[15px] lg:text-[14px] md:mb-4 md:w-full"
              />

              <button className="absolute right-0 flex items-center justify-center gap-3 rounded-[20px] bg-[#A259FF]  px-[30px] py-[16px] xl:px-[20px] xl:py-[12px] lg:px-[10px] lg:text-[14px] md:sticky md:w-full sm:px-[20px]">
                <img
                  src="./src/assets/icons/envelope_simple.svg"
                  alt="envelopeSimple"
                  className=""
                />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
