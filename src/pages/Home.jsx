import {
  dataUserImg,
  dataUserTitle,
  dataimg,
  imgsTitle,
  userImg,
} from "../data";
const Home = () => {
  return (
    <div className="not-italic text-white">
      <div className="mx-auto max-w-[1400px] xl:px-[115px] mv:p-[60px] md:p-[105px] md:px-[50px] lg:py-[80px]">
        <div className="flex justify-between gap-[60px] mv:grid mv:grid-cols-1 sm:gap-[30px] md:grid-cols-2 md:gap-[20px] xl:gap-[50px]">
          <div className="mv:text-center md:text-left xl:w-full">
            <h1 className="grid font-work-sans font-semibold capitalize lg:text-[52px] mv:text-[28px] md:text-[38px]	xl:text-[52px]">
              Discover digital art & Collect NFTs
            </h1>

            <p className="font-work-sans text-[16px] font-semibold capitalize mv:text-[16px] sm:my-[20px] sm:text-[12px] md:my-[10px] md:text-[14px] lg:text-[16px] xl:text-[22px]">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>

            <button className="my-[20px] flex h-[60px] items-center justify-center gap-3 rounded-[20px] bg-[#A259FF] px-[50px] mv:mx-auto mv:my-[45px] mv:h-[38px] mv:px-[25px] sm:h-[45px] md:my-[15px] md:ml-0 lg:text-[16px] md:text-[14px] lg:px-[30px] xl:px-[35px]">
              <img src="./src/assets/img/rocketLaunch.png" alt="btnImg" /> Get
              Started
            </button>

            <div className="grid grid-cols-3 gap-[20px] md:mt-[20px]">
              <div>
                <p className="font-space-mono text-[28px] font-bold mv:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                  240k+
                </p>
                <p className="font-work-sans text-[24px] font-normal mv:text-[14px] sm:my-[5px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                  Total Sale
                </p>
              </div>

              <div>
                <p className="font-space-mono text-[28px] font-bold mv:text-[18px] md:text-[20px]  lg:text-[22px]	xl:text-[24px]">
                  100k+
                </p>
                <p className="font-work-sans text-[24px] font-normal  mv:text-[14px] sm:my-[5px]  md:text-[16px] lg:text-[18px] xl:text-[20px]">
                  Auctions
                </p>
              </div>

              <div>
                <p className="font-space-mono text-[28px] font-bold mv:text-[18px] md:text-[20px]  lg:text-[22px]	xl:text-[24px]">
                  240k+
                </p>
                <p className="font-work-sans text-[24px] font-normal  mv:text-[14px] sm:my-[5px]  md:text-[16px] lg:text-[18px] xl:text-[20px]">
                  Artists
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-full rounded-[24px] bg-[#3B3B3B] sm:mx-auto sm:w-4/5 md:w-full">
            <img
              src="./src/assets/img/imagePlaceholder.png"
              alt="img"
              className="w-full"
            />

              <p className="pl-[20px] pt-[20px] sm:pt-[10px] xl:pt-[10px]">
                Space Walking
              </p>

              <div className="flex gap-3 p-[20px] sm:pt-[10px] lg:pb-[20px]">
                <img src="./src/assets/img/avatar.png" alt="img" />
                <p>Animakid</p>
              </div>
          </div>
        </div>

        <div className="my-[80px] mv:text-center md:text-left">
          <h2 className="font-work-sans text-[38px] font-semibold leading-[45px] lg:text-[38px] mv:text-[28px]	md:text-[28px]">
            Trending Collection
          </h2>

          <p className="mt-[20px] font-work-sans font-semibold capitalize mv:text-[16px]">
            Checkout our weekly updated trending collection.
          </p>

          <div className="mt-[60px] grid w-full lg:grid-cols-3 gap-[30px] mv:grid-cols-1 sm:grid-cols-2 xl:gap-[50px]">
            {dataimg.map((imag) => (
              <div key={imag.id} className="w-full">
                <div className="w-full">
                  <img src={imag.img} className="w-full rounded-[20px]" />
                </div>
                <div className="mt-[15px] grid grid-cols-3 gap-[15px] xl:mt-[25px] xl:gap-[20px]">
                  <img src={imag.imgsBig} className="rounded-[20px]" />
                  <img src={imag.imgsBig1} className="rounded-[20px]" />
                  <p className="flex items-center justify-center rounded-[20px] bg-[#A259FF] font-space-mono text-[22px] font-bold leading-[35px] sm:text-[16px] md:text-[22px] lg:text-[16px]">
                    {imag.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mv:grid mv:grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="font-work-sans font-semibold leading-[45px] mv:text-center mv:text-[28px] md:text-left	lg:text-[38px]">
              Trending Collection
            </h2>

            <p className="mt-[20px] font-work-sans font-semibold capitalize mv:text-center  mv:text-[16px] md:text-left">
              Checkout our weekly updated trending collection.
            </p>
          </div>

          <div>
            <button className="my-[30px] flex items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] mv:mx-auto mv:h-[42px] sm:px-[25px] md:mr-0 md:h-[48px] md:px-[50px] lg:px-[25px] xl:h-[60px] xl:px-[30px]">
              <img src="./src/assets/img/rocketLaunch.png" alt="btnImg" /> Get
              View Rankings
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-[30px] mv:grid-cols-2 sm:my-[40px] sm:pb-[30px] md:my-[60px] md:pb-[60px]">
          {dataUserImg.map((value) => (
            <div
              key={value.id}
              className="relative rounded-[20px] bg-[#3B3B3B] capitalize mv:p-[15px] sm:p-[25px] md:p-[20px] xl:p-[20px]"
            >
              <p className="absolute flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#2B2B2B] font-space-mono text-[16px] font-normal text-[#858584] mv:text-[13px] xl:text-[14px]">
                {value.id}
              </p>

              <div className="md:flex md:items-center lg:grid lg:gap-1 lg:grid-rows-2 md:gap-[20px]">
                <img
                  src={value.img}
                  alt="user img"
                  className="mx-auto mv:w-[70px] md:m-0 lg:mx-auto"
                />

                <div>
                  <p className="mb-[5px] lg:text-center text-center font-work-sans text-[22px] font-semibold mv:text-[16px] md:text-left md:text-[22px] xl:text-[20px]">
                    {value.name}
                  </p>

                  <div className="text-[16px] lg:text-center flex:md grid items-center justify-center font-normal mv:text-center sm:grid-cols-2 sm:text-center md:justify-between md:gap-0 lg:gap-[10px]">
                    <p className="font-work-sans lg:text-[13px] text-[#858584] mv:text-[14px] md:text-[15px] xl:text-[15px]">
                      Total Sales:
                    </p>

                    <p className="font-space-mono lg:text-[13px] mv:text-[14px] md:text-[15px] lg:mt-0 xl:text-[15px]">
                      {value.userTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[80px] sm:mt-[20px] lg:px-0 md:px-[50px] xl:mt-[40px]">
          <h2 className="font-work-sans font-semibold leading-[45px] mv:text-center mv:text-[28px] md:text-left md:text-[32px]	lg:text-[38px]">
            Browse Categories
          </h2>

          <div className="mb-[80px] grid gap-[30px] lg:grid-cols-4 mv:mt-[15px] mv:grid-cols-2 sm:mt-[40px] md:mt-[60px] md:grid md:grid-cols-2">
            {userImg.map((value) => (
              <div key={value.id} className="rounded-[24px] bg-[#3B3B3B]">
                <div className="relative overflow-hidden rounded-t-[24px]">
                  <img
                    src={value.top_img}
                    alt="imgtop"
                    className="absolute inset-[30%] z-30 mv:w-[80px] sm:inset-[33%] sm:w-[100px] md:w-[90px] lg:w-[75px]"
                  />

                  <img
                    src={value.img}
                    className="blur-[7px] sm:w-full md:w-full"
                  />
                </div>

                <p className="font-work-sans lg:text-left capitalize leading-[31px] mv:px-[15px] mv:py-[10px] mv:text-center sm:py-[10px] sm:text-center md:px-[20px] md:text-left lg:p-[15px] lg:text-[16px] xl:px-[20px] xl:pb-[12px] xl:pt-[18px] xl:text-[18px]">
                  {value.titleName}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mv:grid mv:grid-cols-1 md:grid-cols-2 lg:px-0 md:px-[50px]">
            <div className="mv:text-center md:text-left">
              <h2 className="font-work-sans font-semibold leading-[45px] sm:text-[28px]	lg:text-[38px]">
                Discover More NFTs
              </h2>

              <p className="mt-[20px] font-work-sans font-semibold capitalize sm:text-[16px] lg:text-[16px]">
                Explore new trending NFTs
              </p>
            </div>

            <div>
              <button className="my-[30px] flex items-center justify-center lg:mr-0 gap-3 rounded-[20px] border-[2px] border-solid border-[#A259FF] text-white mv:mx-auto mv:h-[42px] mv:px-[30px] md:h-[48px] md:px-[35px] xl:h-[60px] xl:px-[50px]">
                <img src="./src/assets/icons/eye.png" alt="eyeImg" />
                See All
              </button>
            </div>
          </div>

          <div className="mt-[60px] grid w-full grid-cols-3 not-italic lg:px-0 lg:grid-cols-3 mv:grid-cols-1 sm:gap-[20px] sm:px-[60px] md:mt-[30px] md:grid-cols-2 md:gap-[30px]">
            {dataUserTitle.map((value) => (
              <div key={value.id} className="mv:mb-[30px] md:mb-0">
                <img src={value.bigImg} alt="bigImg" className="w-full" />
                <div className="rounded-b-[20px] bg-[#3B3B3B] capitalize  mv:px-[20px] mv:py-[10px] sm:p-[30px] md:py-[15px] xl:px-[30px] xl:py-[20px]">
                  <p className="font-work-sans font-semibold leading-8  mv:text-[18px] lg:text-[18px] xl:text-[22px]">
                    {value.titleName}
                  </p>

                  <div className="mt-[10px] flex gap-3">
                    <img src={value.smallImg} alt="smallImg" />

                    <p className="font-space-mono font-normal leading-[22px] mv:text-[14px] xl:text-[16px]">
                      {value.smallImgName}
                    </p>
                  </div>

                  <div className="flex items-center justify-between font-space-mono leading-[13px] text-[#858584] mv:my-[15px] mv:text-[16px] sm:my-[10px] lg:mt-[15px] xl:mt-[25px]">
                    <p>price</p>
                    <p>Highest Bid</p>
                  </div>

                  <div className="my-[6px] flex items-center justify-between font-space-mono font-normal leading-[22px] sm:text-[14px] md:text-[14px] xl:text-[16px]">
                    <p>{value.price}</p>
                    <p>{value.bigPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-[640px] max-w-[1400px] bg-[url('./src/assets/img/bg-img.png')]">
        <div className="absolute bottom-0 flex w-full items-end justify-between xl:px-[115px] py-[60px] not-italic mv:grid mv:grid-cols-1 mv:p-[50px] sm:grid-cols-2 sm:p-[60px] md:p-[50px]">
          <div className="mv:mx-auto mv:text-center">
            <button className="flex gap-[10px] rounded-[20px] bg-[#3B3B3B] px-[20px] py-[10px]">
              <img
                src="./src/assets/img/shroomie.png"
                alt="shroomie"
                className="h-[24px] w-[24px]"
              />

              <span className="sm:text-[14px] md:text-[14px] xl:text-[16px]">
                Shroomie
              </span>
            </button>

            <h1 className="font-work-sans lg:text-[51px] font-semibold capitalize leading-[56px] mv:my-[15px] sm:my-[30px] sm:text-[26px] md:text-[32px] xl:text-[51px]">
              Magic Mashrooms
            </h1>

            <button className="flex items-center justify-center gap-3 rounded-[20px] border-[2px] border-solid border-[#fff] bg-white font-semibold text-[#2B2B2B] mv:h-[38px] mv:px-[30px] md:h-[48px] md:px-[35px] xl:h-[60px] xl:px-[50px]">
              <img src="./src/assets/icons/eye.png" alt="eyeImg" />
              See All
            </button>
          </div>

          <div className="rounded-[20px] lg:p-[30px] bg-[#b6b6b348] font-space-mono mv:mx-auto mv:mt-[30px] mv:p-[30px] mv:text-center sm:p-[30px] md:py-[20px]">
            <p className="font-normal leading-[13px] mv:text-[20px]	lg:text-[12px]">
              Auction ends in:
            </p>

            <div className="flex gap-[15px]">
              <div>
                <p className="mb-[5px] lg:text-[38px] mt-[10px] flex gap-[10px] font-bold capitalize leading-[45px] mv:justify-center mv:text-[26px] xl:text-[38px]">
                  <span>59</span>
                  <span>:</span>
                </p>

                <p className="font-normal leading-[13px] md:text-[16px]	lg:text-[12px]">
                  Hours
                </p>
              </div>

              <div>
                <p className="mb-[5px] lg:text-[38px] mt-[10px] flex gap-[10px] font-bold capitalize leading-[45px] mv:justify-center mv:text-[26px] xl:text-[38px]">
                  <span>59</span>
                  <span>:</span>
                </p>

                <p className="font-normal leading-[13px] md:text-[16px]	lg:text-[12px]">
                  Minutes
                </p>
              </div>

              <div>
                <p className="mb-[5px] mt-[10px] lg:text-[38px] flex gap-[10px] font-bold capitalize leading-[45px] mv:justify-center mv:text-[26px] xl:text-[38px]">
                  <span>59</span>
                </p>

                <p className="font-normal leading-[13px] md:text-[16px]	lg:text-[12px]">
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] xl:px-[115px] py-[80px] mv:p-[50px] sm:p-[60px] md:p-[50px]">
        <div className="mb-[80px]">
          <h2 className="font-work-sans font-semibold leading-[45px] mv:text-center mv:text-[26px] sm:text-[28px] md:text-left	lg:text-[38px]">
            How it works
          </h2>

          <p className="mt-[20px] font-work-sans font-semibold capitalize  mv:text-center mv:text-[16px] md:text-left">
            Find out how to get started
          </p>

          <div className="grid w-full font-work-sans not-italic mv:mt-[30px] mv:grid-cols-1 sm:mt-[30px] sm:gap-[20px] sm:px-[60px] md:mt-[40px] md:grid-cols-3 md:gap-[20px] md:px-0">
            {imgsTitle.map((value) => (
              <div
                key={value.id}
                className="rounded-[20px] bg-[#3B3B3B] text-center mv:my-[20px] mv:p-[25px] sm:my-[10px] sm:px-[35px] md:px-[20px] md:py-[6px] md:pb-[20px] xl:px-[30px] xl:pb-[30px]"
              >
                <img
                  src={value.img}
                  alt="img"
                  className="mv:p-[15px] mv:px-[55px] sm:mx-auto sm:px-[100px] sm:py-0 md:p-0 md:px-[14px] xl:w-full xl:p-[10px]"
                />

                <p className="font-semibold capitalize leading-[31px] mv:text-[18px] md:text-[16px] xl:mt-[20px] xl:text-[22px]">
                  {value.titleName}
                </p>

                <p className="mt-[10px] text-[16px] font-normal leading-[22px] mv:text-[14px] md:text-[12px]">
                  {value.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 rounded-[20px] bg-[#3B3B3B] mv:grid-cols-1 sm:p-[60px] md:grid-cols-2 md:gap-[15px] md:px-[20px] md:py-[30px] xl:gap-[80px] xl:p-[60px]">
          <div className="w-full">
            <img
              src="./src/assets/img/kosmosUserImg.png"
              alt="kosmosUserImg"
              className="h-full w-full"
            />
          </div>

          <div className="w-full font-work-sans mv:p-[30px] md:p-[15px]">
            <h2 className="font-semibold capitalize leading-[45px] mv:text-[24px] sm:text-[28px] md:text-[28px] lg:text-[32px] xl:text-[38px]">
              Join our weekly digest
            </h2>

            <p className="mt-[10px] font-normal capitalize xl:mt-[10px] mv:text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[22px]">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <form
              action="/"
              className="flex justify-between rounded-[20px] lg:grid-cols-2 lg:bg-white mv:mt-[20px] sm:mt-[30px] md:grid md:grid-cols-1 md:bg-transparent xl:mt-[40px] lg:mt-[80px]"
            >
              <input
                type="text"
                placeholder="Enter your email here"
                className="rounded-l-[20px] xl:m-0 text-[#2B2B2B] outline-0 mv:px-[20px] mv:py-[8px] sm:py-[10px] sm:text-[14px] md:mb-[16px] lg:m-[5px] md:w-full md:rounded-[20px] md:py-[10px] md:text-[16px] lg:py-[12px] xl:py-[10px]"
              />

              <button className="flex items-center justify-center rounded-[20px] bg-[#A259FF] mv:gap-2 xl:py-0 sm:text-[14px] md:w-full md:gap-3 lg:py-0 md:py-[10px] md:text-[16px] ">
                <img
                  src="./src/assets/icons/envelopeSimple.png"
                  alt="envelopeSimple"
                  className="sm:w-[18px] xl:w-[22px]"
                />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
