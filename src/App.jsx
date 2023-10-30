import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import ConnectWallet from "./pages/ConnectWallet";
import Artist from "./pages/Artist";
import Mainlayout from "./layout/Mainlayout";
import MarketPlace from "./pages/MarketPlace";
import NFT from "./pages/NFT";
import Rankings from "./pages/Rankings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/connectwallet" element={<ConnectWallet />} />
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
