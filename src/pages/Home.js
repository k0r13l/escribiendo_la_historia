import React, { Component } from "react";

import Menu from './Menu';
import Info from "./Info";
import Libros from "./Libros";
import Comunidades from "./Comunidades";
import Hero from "./hero";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <Menu />
        <Info />
        <Libros />
        <Comunidades />
      </div>
    );
  }
}

export default Home;