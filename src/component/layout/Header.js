import React, { Fragment } from "react";
import TopNav from "./TopNav";
import Logo from "./NaijaVegasLogoRectSmall.png";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <TopNav></TopNav>
        <div className="Header">
          <header className="main-header bg-white shadow-sm">
            <nav className="flex items-center justify-between flex-wrap p-4 container w-3/5 mx-auto">
              <div className="flex items-center flex-grow text-white mr-6">
                <img
                  className=""
                  style={{ width: "100px" }}
                  src={Logo}
                  alt=""
                />
              </div>
              <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div className="w-full block flex-grow lg:flex lg:flex-end justify-end lg:w-auto">
                <a
                  href="#ppp"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Menu
                </a>
                <a
                  href="#ppp"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Menu
                </a>
                <a
                  href="#ppp"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Menu
                </a>
                <a
                  href="#ppp"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Menu
                </a>
              </div>
            </nav>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default Header;
