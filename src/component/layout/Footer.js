import React, { Fragment } from "react";
import "../../App.css";

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <footer className="py-6 px-2 mx-auto border bg-black text-white align-center">
          <p className="text-center">&copy; Naija Vegas 2020 </p>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
