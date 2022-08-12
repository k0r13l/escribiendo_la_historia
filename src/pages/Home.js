import React, { Component } from "react";

import Menu from './Menu';
import Info from "./Info";
import Libros from "./Libros";
import Comunidades from "./Comunidades";

import Mapa from "./Mapa";
import Footer from "./Footer";
import Hero from "./Hero";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <Menu />
        <br/>
        <Info />
        <Libros />
        <Comunidades />
        <Mapa />
        <Footer />
      </div>
    );
  }
}

export default Home;