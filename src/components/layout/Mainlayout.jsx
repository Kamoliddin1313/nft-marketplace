import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Mainlayout = () => {
  return (
    <div className="bg-[#2B2B2B] max-w-[1280px] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
