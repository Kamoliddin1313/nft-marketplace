import BgImg from "./BgImg.jsx";
import BrowseCategorse from "./BrowseCategorse.jsx";
import DiscoverMoreNFTs from "./DiscoverMoreNFTs.jsx";
import HomeHeader from "./HomeHeader.jsx";
import HowItWorks from "./HowItWorks.jsx";
import TopCreators from "./TopCreators.jsx";
import TrendingCollection from "./TrendingCollection.jsx";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategorse />
      <DiscoverMoreNFTs />
      <BgImg />
      <HowItWorks />
    </>
  );
};

export default Home;
