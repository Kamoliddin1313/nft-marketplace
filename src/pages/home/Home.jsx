import BgImg from "./BgImg.jsx";
import BrowseCategorse from "./BrowseCategorse.jsx";
import DiscoverMoreNFTs from "./DiscoverMoreNFTs.jsx";
import HomeHeader from "./HomeHeader.jsx";
import HowItWorks from "./HowItWorks.jsx";
import TopCreators from "./TopCreators.jsx";
import TrendingCollection from "./TrendingCollection.jsx";
const Home = () => {
  return (
    <div className="not-italic text-white">
      <section className="mx-auto max-w-[1280px] px-[95px] lg:px-[30px] md:px-[30px] sm:px-[60px]">
        <HomeHeader />

        <TrendingCollection />

        <TopCreators />

        <BrowseCategorse />

        <DiscoverMoreNFTs />
      </section>

      <BgImg />
      <HowItWorks />
    </div>
  );
};

export default Home;
