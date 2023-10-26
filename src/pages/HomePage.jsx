import React from "react";
import {
  dataUserImg,
  dataUserTitle,
  dataimg,
  imgsTitle,
  userImg,
} from "../data";
const HomePage = () => {
  console.log("salom");
  return (
    <div>
      <div className="px-[120px] py-[80px] not-italic text-white">
        <div className="grid grid-cols-2 gap-[30px]">
          <div>
            <h1 className="grid gap-[30px] pr-32 font-work-sans text-[67px] font-semibold	capitalize">
              Discover digital art & Collect NFTs
            </h1>
            <p className="mt-[20px] pr-32 font-work-sans text-[16px] font-semibold capitalize">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <button className="my-[30px] flex h-[60px] items-center justify-center gap-3 rounded-[20px] bg-[#A259FF] px-[50px]">
              <img src="./src/assets/img/rocketLaunch.png" alt="btnImg" /> Get
              Started
            </button>
            <div className="grid grid-cols-3">
              <div>
                <p className="font-space-mono text-[28px] font-bold	">240k+ </p>
                <p className="font-work-sans text-[24px] font-normal">
                  Total Sale
                </p>
              </div>
              <div>
                <p className="font-space-mono text-[28px] font-bold	">100k+</p>
                <p className="font-work-sans text-[24px] font-normal">
                  Auctions
                </p>
              </div>
              <div>
                <p className="font-space-mono text-[28px] font-bold	">240k+</p>
                <p className="font-work-sans text-[24px] font-normal">
                  Artists
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#3B3B3B]">
            <img
              src="./src/assets/img/imagePlaceholder.png"
              alt="img"
              className="w-full"
            />
            <p className="pl-[20px] pt-[20px]">Space Walking</p>
            <div className="flex gap-3 p-[20px]">
              <img src="./src/assets/img/avatar.png" alt="img" />
              <p>Animakid</p>
            </div>
          </div>
        </div>

        <div className="my-[80px]">
          <h2 className="font-work-sans text-[38px] font-semibold	leading-[45px]">
            Trending Collection
          </h2>
          <p className="mt-[20px] font-work-sans text-[16px]  font-semibold capitalize">
            Checkout our weekly updated trending collection.
          </p>
          <div className="mt-[60px] grid w-full grid-cols-3 gap-[30px]">
            {dataimg.map((imag) => (
              <div key={imag.id} className="w-full">
                <div className="w-full">
                  <img src={imag.img} className="w-full rounded-[20px]" />
                </div>
                <div className="mt-[15px] grid grid-cols-3 gap-[15px]">
                  <img src={imag.imgsBig} className="rounded-[20px]" />
                  <img src={imag.imgsBig1} className="rounded-[20px]" />
                  <p className="flex items-center justify-center	 rounded-[20px] bg-[#A259FF] font-space-mono text-[22px] font-bold leading-[35px]">
                    {imag.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-[80px]">
          <div>
            <h2 className="font-work-sans text-[38px] font-semibold	leading-[45px]">
              Trending Collection
            </h2>
            <p className="mt-[20px] font-work-sans text-[16px]  font-semibold capitalize">
              Checkout our weekly updated trending collection.
            </p>
          </div>

          <div>
            <button className="my-[30px] flex h-[60px] items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] px-[50px]">
              <img src="./src/assets/img/rocketLaunch.png" alt="btnImg" /> Get
              View Rankings
            </button>
          </div>
        </div>

        <div className="my-[60px] grid grid-cols-4 gap-[30px] pb-[60px]">
          {dataUserImg.map((value) => (
            <div
              key={value.id}
              className="flex-col rounded-[20px] bg-[#3B3B3B] p-[20px] capitalize"
            >
              <img src={value.img} alt="user img" className="mx-auto" />
              <p className="mb-[5px] mt-[20px] text-center font-work-sans text-[22px] font-semibold">
                {value.name}
              </p>
              <div className="flex justify-center gap-[10px] text-[16px] font-normal">
                <p className="font-work-sans text-[#858584]">Total Sales:</p>
                <p className="font-space-mono">{value.userTitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[80px]">
          <h2 className="font-work-sans text-[38px] font-semibold	leading-[45px]">
            Trending Collection
          </h2>
          <div className="mb-[80px] mt-[60px] grid grid-cols-4 gap-[30px]">
            {userImg.map((value) => (
              <div key={value.id} className="rounded-[24px] bg-[#3B3B3B]">
                <img src={value.img} className="w-full" />
                <p className="px-[30px] pb-[25px] pt-[20px] font-work-sans text-[22px] font-semibold capitalize leading-[31px]">
                  {value.titleName}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-work-sans text-[38px] font-semibold	leading-[45px]">
                Trending Collection
              </h2>
              <p className="mt-[20px] font-work-sans text-[16px]  font-semibold capitalize">
                Checkout our weekly updated trending collection.
              </p>
            </div>

            <div>
              <button className="my-[30px] flex h-[60px] items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] px-[50px] text-white">
                <img src="./src/assets/icons/eye.png" alt="eyeImg" />
                See All
              </button>
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-[30px] not-italic">
            {dataUserTitle.map((value) => (
              <div key={value.id}>
                <img src={value.bigImg} alt="bigImg" className="w-full" />
                <div className="rounded-b-[20px] bg-[#3B3B3B] px-[30px] py-[20px] capitalize">
                  <p className="font-work-sans text-[22px] font-semibold leading-8">
                    {value.titleName}
                  </p>
                  <div className="mt-[10px] flex  gap-3">
                    <img src={value.smallImg} alt="smallImg" />
                    <p className="font-space-mono text-[16px] font-normal leading-[22px]">
                      {value.smallImgName}
                    </p>
                  </div>

                  <div className="mt-[25px] flex items-center justify-between font-space-mono text-[12px] leading-[13px] text-[#858584]">
                    <p>price</p>
                    <p>Highest Bid</p>
                  </div>

                  <div className="my-[6px] flex items-center justify-between font-space-mono text-[16px] font-normal leading-[22px]">
                    <p>{value.price}</p>
                    <p>{value.bigPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bg-img */}
      <div></div>
      {/* bg-img */}

      <div className="px-[120px] py-[80px] not-italic text-white">
        <div className="my-[80px]">

          <h2 className="font-work-sans text-[38px] font-semibold	leading-[45px]">
            How it works
          </h2>

          <p className="mt-[20px] font-work-sans text-[16px]  font-semibold capitalize">
            Find out how to get started
          </p>

          <div className="mt-[48px] grid w-full grid-cols-3 gap-[30px] font-work-sans not-italic">
            {imgsTitle.map((value) => (
              <div
                key={value.id}
                className="rounded-[20px] bg-[#3B3B3B] px-[30px] pb-[30px] text-center"
              >
                <img
                  src={value.img}
                  alt="img"
                  className="w-full p-[10px] text-[22px]"
                />
                <p className="mt-[20px] text-[22px] font-semibold capitalize leading-[31px]">
                  {value.titleName}
                </p>
                <p className="mt-[10px]	text-[16px] font-normal leading-[22px]">
                  {value.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] gap-[80px] bg-[#85858428] grid grid-cols-2 p-[60px]">
          <div>
            <img src="./src/assets/img/kosmosUserImg.png" alt="kosmosUserImg" className="w-full"/>
          </div>
          <div className="w-full font-work-sans my-[30px]">
            <h2 className="text-[38px] font-semibold capitalize leading-[45px]">Join our weekly digest</h2>
            <p className="capitalize mt-[10px] text-[22px] font-normal">Get exclusive promotions & updates straight to your inbox.</p>
            <form action="/" className="grid grid-cols-2 mt-[40px]">
              <input type="text" placeholder="Enter your email here" className="outline-0 text-[#2B2B2B] rounded-l-[20px] px-[20px] py-[16px]"/>
              <button className="flex px-[50px] bg-[#A259FF] rounded-[20px] justify-between items-center gap-3">
                <img src="./src/assets/icons/envelopeSimple.png" alt="envelopeSimple" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
