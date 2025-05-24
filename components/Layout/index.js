import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import NavBar from "@components/Navbar";


function Layout({ children }) {



  return (
    <Fragment>
      <NavBar />
      {children}

    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
