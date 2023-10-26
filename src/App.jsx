import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import ArtistPage from "./pages/ArtistPage";
import Mainlayout from "./layout/Mainlayout";
import MarketPlacePage from "./pages/MarketPlacePage";
import NFTPage from "./pages/NFTPage";
import RankingsPage from "./pages/RankingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="/marketplacepage" element={<MarketPlacePage />} />
        <Route path="/nftpage" element={<NFTPage />} />
        <Route path="/rankingspage" element={<RankingsPage />} />
        <Route path="/createaccountpage" element={<CreateAccountPage />} />
        <Route path="/connectwalletpage" element={<ConnectWalletPage />} />
        <Route path="/artistpage" element={<ArtistPage />} />
        <Route path="*" element={<h1>no data</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
