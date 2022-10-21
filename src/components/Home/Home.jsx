import React, { Component } from "react";

import Menu from '../Menu/Menu';
import Info from "../Info/Informacion";
import Libros from "../Libros/TableLibros";
import Comunidades from "../Comunidades/Comunidades";

import Mapa from "../Mapa/Mapa";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import {footer, hero, info, mapaPrincipal, menuPrincipal} from "../../Informacion/informacion"


class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <Hero hero={hero}/>
        <Menu menu={menuPrincipal}/>
        <br/>
        <Info info={info}/>
        <Libros />
        <Comunidades />
        <br/>
        <Mapa mapa={mapaPrincipal}/>
        <Footer footer={footer}/>
      </div>
    );
  }
}

export default Home;