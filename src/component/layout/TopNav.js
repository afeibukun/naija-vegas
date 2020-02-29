import React, { Fragment } from "react";

class TopNav extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="TopNav">
          <nav className="flex items-center justify-between flex-wrap bg-green-700 p-1">
            <div className="container mx-auto px-4">
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
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                  <a
                    href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  >
                    Menu 1
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  >
                    Menu 2
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                  >
                    Menu 3
                  </a>
                </div>
                <div>
                  <a
                    href="#create-account"
                    className="inline-block text-sm text-white-100 hover:text-green-100 hover:bg-green-800 px-4 py-1 mr-2 rounded"
                  >
                    Create Account
                  </a>
                  <a
                    href="#ppp"
                    className="inline-block text-sm px-4 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Fragment>
    );
  }
}

export default TopNav;
