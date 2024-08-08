import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <div className="app_wrapper">
      <Header />
      
        <div className="app_wrapper_content">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout;