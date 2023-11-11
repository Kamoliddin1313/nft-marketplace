import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CreateAccount from "./pages/createAccount/CreateAccount";
import ConnectWallet from "./pages/connectWallet/ConnectWallet";
import Artist from "./pages/artist/Artist";
import Mainlayout from "./components/layout/Mainlayout";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import NFT from "./pages/nft/NFT";
import Rankings from "./pages/rankings/Rankings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/artist" element={<Artist />} />
        <Route
          path="*"
          element={
            <h1 className="mx-auto text-center font-work-sans text-[198px] text-red-700">
              X
            </h1>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
