import React, { Component } from "react";

import Menu from './Menu';
import Info from "./Info";
import Libros from "./Libros";
import Comunidades from "./Comunidades";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        < Menu />
        <Info />
        <Libros />
        <Comunidades />
      </div>
    );
  }
}

export default Home;