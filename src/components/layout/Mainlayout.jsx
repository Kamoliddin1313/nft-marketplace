import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Mainlayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
