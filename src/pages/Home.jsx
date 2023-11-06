import {
  dataUserImg,
  dataUserTitle,
  dataimg,
  imgsTitle,
  userImg,
} from "../contents/data";
const Home = () => {
  return (
    <div className="not-italic text-white">
      <section className="mx-auto max-w-[1280px] px-[115px] lg:px-[70px] md:px-[30px] sm:px-[60px]">
        <section className="grid grid-cols-2 gap-[30px]  py-[80px] lg:py-[40px] sm:grid-cols-1">
          <div className="sm:mx-auto sm:text-center">
            <h1 className="font-work-sans text-[67px] font-semibold capitalize leading-[73px] xl:text-[52px] xl:leading-[65px] lg:text-[38px] lg:leading-[50px] md:text-[32px] md:leading-[45px]">
              Discover digital art & Collect NFTs
            </h1>

            <p className="mt-4 font-work-sans text-[22px] font-normal capitalize leading-[35px] xl:mt-3 xl:text-[18px] xl:leading-[30px] lg:text-[14px] lg:leading-[25px] md:text-[14px]">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>

            <button className="my-[30px] flex items-center justify-center gap-3 rounded-[20px] border-2 border-[#A259FF] bg-[#A259FF] px-[50px] py-[15px] xl:my-[25px] xl:py-3 lg:my-[15px] lg:px-[30px] lg:py-[10px] md:py-[8px] sm:mx-auto">
              <img
                src="./src/assets/icons/rocket_launch_icon.svg"
                alt="btnImg"
              />
              Get Started
            </button>

            <div className="grid grid-cols-3 gap-[30px]">
              <div>
                <p className="font-space-mono text-[28px] font-bold leading-[39px] xl:text-[24px] xl:leading-[35px] lg:text-[20px]">
                  240k+
                </p>
                <p className="font-work-sans text-[24px] font-normal leading-[38px] xl:text-[20px] xl:leading-[35px] lg:text-[16px] md:text-[14px]">
                  Total Sale
                </p>
              </div>

              <div>
                <p className="font-space-mono text-[28px] font-bold leading-[39px] xl:text-[24px] xl:leading-[35px] lg:text-[20px]">
                  100k+
                </p>
                <p className="font-work-sans text-[24px] font-normal leading-[38px] xl:text-[20px] xl:leading-[35px] lg:text-[16px] md:text-[14px]">
                  Auctions
                </p>
              </div>

              <div>
                <p className="font-space-mono text-[28px] font-bold leading-[39px] xl:text-[24px] xl:leading-[35px] lg:text-[20px]">
                  240k+
                </p>
                <p className="font-work-sans text-[24px] font-normal leading-[38px] xl:text-[20px] xl:leading-[35px] lg:text-[16px] md:text-[14px]">
                  Artists
                </p>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-[24px] bg-[#3B3B3B] xl:h-[460px] lg:h-[360px]">
            <img
              src="./src/assets/images/imagePlaceholder.png"
              alt="img"
              className="h-[79%] w-full xl:h-[75%] lg:h-[70%]"
            />

            <div className="p-[20px] font-work-sans capitalize not-italic">
              <p className="text-[22px] font-semibold	leading-[31px]">
                Space Walking
              </p>

              <div className="mt-[10px] flex gap-3 font-normal">
                <img src="./src/assets/images/avatar.png" alt="img" />
                <p className="leading-[22px]">Animakid</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="my-[80px] lg:my-[50px] md:my-[50px]">
          <h2 className="font-work-sans text-[38px] font-semibold leading-[45px] lg:text-[32px] sm:text-center">
            Trending Collection
          </h2>

          <p className="mt-[10px] font-work-sans  text-[22px] font-semibold capitalize leading-[35px] lg:text-[18px] sm:text-center">
            Checkout our weekly updated trending collection.
          </p>

          <div className="mt-[60px] grid w-full grid-cols-3 gap-[30px] lg:mt-[45px] lg:grid-cols-2 sm:grid-cols-1">
            {dataimg.map((imag) => (
              <div key={imag.id} className="w-full">
                <div className="w-full">
                  <img src={imag.img} className="w-full rounded-[20px]" />
                </div>
                <div className="mt-[15px] grid grid-cols-3 gap-[15px]">
                  <img src={imag.imgsBig} className="rounded-[20px]" />
                  <img src={imag.imgsBig1} className="rounded-[20px]" />
                  <p className="flex items-center justify-center rounded-[20px] bg-[#A259FF] font-space-mono text-[22px] font-bold leading-[35px] xl:text-[18px]">
                    {imag.title}
                  </p>
                </div>

                <div className="mt-[15px] font-work-sans capitalize lg:mt-2.5">
                  <p className="text-[22px] font-semibold leading-[31px] xl:text-[20px] lg:text-[18px]">
                    {imag.name}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <img
                      src={imag.smoll_img}
                      className="w-[30px]"
                      alt="smoll_img"
                    />
                    <span className="font-normal leading-[22px] md:text-[14px]">
                      {imag.smoll_img_name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-between font-work-sans capitalize md:grid md:grid-cols-1">
          <div>
            <h2 className="text-[38px] font-semibold leading-[45px] lg:text-[32px] sm:text-center">
              Trending Collection
            </h2>

            <p className="mt-[10px] font-semibold lg:text-[16px] sm:text-center">
              Checkout our weekly updated trending collection.
            </p>
          </div>

          <button className="my-[30px] mb-0 flex items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] px-[50px] py-[15px] text-[16px] font-semibold leading-[22px] lg:px-[20px] lg:py-[10px] md:w-2/5 sm:mx-auto sm:w-3/5">
            <img
              src="./src/assets/icons/rocket_launch_blue_icon.svg"
              alt="btnImg"
            />
            View Rankings
          </button>
        </section>

        <section className="mt-[60px] grid grid-cols-4 gap-[30px] capitalize lg:grid-cols-2 sm:grid-cols-1">
          {dataUserImg.map((value) => (
            <div
              key={value.id}
              className="relative rounded-[20px] bg-[#3B3B3B] p-[20px] font-work-sans xl:p-[15px] lg:p-[25px]"
            >
              <p className="absolute flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#2B2B2B] font-space-mono text-[16px] font-normal text-[#858584] xl:h-[25px] xl:w-[25px] xl:text-[14px] lg:p-[15px] lg:text-[16px] mv:text-[13px]">
                {value.id}
              </p>

              <div className="font-work-sans">
                <img src={value.img} alt="user img" className="mx-auto w-1/2" />

                <div className="mt-[20px] text-center">
                  <p className="text-[22px] font-semibold leading-[31px] xl:text-[18px] lg:text-[20px]">
                    {value.name}
                  </p>

                  <div className="mt-[5px] grid items-center justify-between gap-[10px] text-[16px] font-normal leading-[22px] xl:grid-cols-1 xl:gap-0 xl:text-[12px] lg:grid-cols-2 lg:text-[16px] sm:mx-auto sm:w-2/3">
                    <p className="text-[#858584]">Total Sales:</p>

                    <p className="font-space-mono">{value.userTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="my-[80px] capitalize">
          <h2 className="font-work-sans text-[38px] font-semibold leading-[45px] lg:text-[32px] sm:text-center">
            Browse Categories
          </h2>

          <div className="grid grid-cols-4 gap-[30px] pt-[60px] lg:grid-cols-2 sm:grid-cols-1">
            {userImg.map((value) => (
              <div key={value.id} className="rounded-[24px] bg-[#3B3B3B]">
                <div className="relative overflow-hidden rounded-t-[24px]">
                  <img
                    src={value.top_img}
                    alt="imgtop"
                    className="absolute inset-[30%] z-30 xl:w-2/5"
                  />

                  <img src={value.img} className="w-full blur-[7px]" />
                </div>

                <p className="px-[30px] py-[20px] font-work-sans text-[22px] font-semibold capitalize leading-[31px] xl:px-[20px] xl:py-[15px] xl:text-[18px] lg:text-center">
                  {value.titleName}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-[80px] md:py-[30px]">
          <div className="flex items-center justify-between font-work-sans capitalize md:grid md:grid-cols-1">
            <div className="sm:text-center">
              <h2 className="text-[38px] font-semibold leading-[45px] lg:text-[32px]">
                Discover More NFTs
              </h2>

              <p className="mt-[10px] font-semibold leading-[35px] lg:text-[16px]">
                Explore new trending NFTs
              </p>
            </div>

            <button className="my-[30px] mb-0 flex items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] px-[50px] py-[15px] text-[16px] font-semibold leading-[22px] lg:px-[30px] lg:py-[10px] md:mt-[20px] md:w-2/5 sm:mx-auto sm:w-3/5">
              <img src="./src/assets/icons/eye.svg" alt="eyeImg" />
              See All
            </button>
          </div>

          <div className="mt-[60px] grid w-full grid-cols-3 gap-[30px] not-italic lg:grid-cols-2 sm:grid-cols-1">
            {dataUserTitle.map((value) => (
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
      </section>

      <section className="relative mx-auto h-[640px] max-w-[1280px] bg-[url('./src/assets/images/bg-img.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute bottom-0 flex w-full items-end justify-between px-[115px] py-[60px] not-italic lg:px-[70px] md:px-[30px] sm:grid sm:grid-cols-1">
          <>
            <button className="flex items-center gap-3 rounded-[20px] bg-[#3B3B3B] px-[20px] py-[10px] sm:mx-auto">
              <img
                src="./src/assets/images/shroomie.png"
                alt="shroomie"
                className="h-[24px] w-[24px]"
              />

              <span className="font-work-sans text-[16px] font-normal leading-[22px] md:text-[14px]">
                Shroomie
              </span>
            </button>

            <h1 className="my-[30px] font-work-sans text-[51px] font-semibold capitalize leading-[56px] lg:text-[32px] md:text-[28px] sm:text-center">
              Magic Mashrooms
            </h1>

            <button className="flex items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#fff] bg-white px-[50px] py-[22px] font-work-sans text-[16px] font-semibold text-[#2B2B2B] lg:px-[30px] lg:py-[10px] sm:mx-auto">
              <img src="./src/assets/icons/eye.svg" alt="eyeImg" />
              See All
            </button>
          </>

          <div className="rounded-[20px] bg-[#b6b6b348] p-[30px] font-space-mono sm:mx-auto sm:mt-[30px] sm:w-4/5 sm:text-center">
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

                <p className="text-[12px] font-normal leading-[13px]">
                  Minutes
                </p>
              </div>

              <div className="sm:mx-auto">
                <p className="mb-[5px] flex gap-[10px] text-[38px] font-bold capitalize leading-[45px] md:text-[32px]">
                  <span>59</span>
                </p>

                <p className="text-[12px] font-normal leading-[13px]">
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-[115px] py-[80px] lg:px-[70px] md:px-[30px]">
        <div className="mb-[80px] font-work-sans not-italic sm:text-center">
          <h2 className=" text-[38px] font-semibold capitalize leading-[45px] lg:text-[32px]">
            How it works
          </h2>

          <p className="mt-[10px] text-[22px] font-normal capitalize lg:text-[16px]">
            Find out how to get started
          </p>

          <div className="grid w-full grid-cols-3 gap-[30px] py-[48px] lg:grid-cols-2 sm:grid-cols-1">
            {imgsTitle.map((value) => (
              <div
                key={value.id}
                className="rounded-[20px] bg-[#3B3B3B] px-[30px] pb-[30px] pt-[10px] text-center font-work-sans"
              >
                <img
                  src={value.img}
                  alt="img"
                  className="mx-auto px-[20px] xl:px-[30px]"
                />

                <p className="mt-[20px] text-[22px] font-semibold capitalize leading-[31px]">
                  {value.titleName}
                </p>

                <p className="mt-[10px] text-[16px] font-normal leading-[22px] xl:text-[14px]">
                  {value.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-[80px] rounded-[20px] bg-[#3B3B3B] p-[60px] xl:gap-[50px] xl:p-[45px] lg:gap-[30px] lg:p-[35px] md:px-[25px] sm:grid-cols-1 sm:p-[45px]">
          <div className="h-full w-full">
            <img
              src="./src/assets/images/kosmosUserImg.png"
              alt="kosmosUserImg"
              className="h-full w-full"
            />
          </div>

          <div className="w-full font-work-sans capitalize">
            <h2 className="text-[38px] font-semibold leading-[45px] xl:text-[32px] lg:text-[28px] lg:leading-[40px]">
              Join our weekly digest
            </h2>

            <p className="mt-[10px] text-[22px] font-normal xl:text-[18px] lg:text-[16px] lg:leading-[22px]">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <form
              action="/"
              className="relative mt-[40px] flex justify-between rounded-[20px] bg-white lg:mt-7 lg:grid-cols-1 md:mt-[30px] md:grid sm:grid"
            >
              <input
                type="text"
                placeholder="Enter your email here"
                className="rounded-[20px] px-[30px] py-[16px] text-[#2B2B2B] outline-0 xl:py-[12px] xl:pl-[15px] lg:py-[10px] lg:text-[14px]"
              />

              <button className="absolute right-0 flex items-center justify-center gap-3  rounded-[20px] bg-[#A259FF] px-[30px] py-[16px] xl:px-[20px] xl:py-[12px] lg:px-[10px] lg:py-[10px] lg:text-[14px] sm:px-[20px]">
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

export default Home;
