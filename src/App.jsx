import NavbarPage from "./components/NavbarPage";
import FooterPage from "./components/FooterPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import ArtistPage from "./pages/ArtistPage";
function App() {
  return (
    <div className="bg-body-color">
      <NavbarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bb" element={<CreateAccountPage />} />
        <Route path="/cc" element={<ConnectWalletPage />} />
        <Route path="/dd" element={<ArtistPage />} />
        <Route path="*" element={<h1>no data</h1>} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
