import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";


const Layout = () => {
  return (
    <>
      <div className="app-wrapper">
        <div className="app-wrapper-content">
          <Header />
          <Navbar />
        </div>
        <main>
          <Outlet />
        </main>
        <footer>My social networking site</footer>
      </div>
    </>
  )
}

export default Layout;