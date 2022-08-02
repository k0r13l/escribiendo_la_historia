import React, { Component } from "react";

import Menu from './../pages/Menu';
import Info from "./../pages/Info";
import Libros from "./../pages/Libros";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        < Menu />
        <Info />
        <Libros />
      </div>
    );
  }
}

export default Home;