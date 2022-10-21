import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import Hero from "../../components/Hero/Hero";
import GaleriaComunidad from "../GaleriaComunidad";
import {footerTuis, fotosTuis, heroTuis, infoTuis, mapaTuis, menuComunidad} from "../../Informacion/informacion";
import Mapa from "../../components/Mapa/Mapa";
import Footer from "../../components/Footer/Footer";
import InfoComunidad from "../InfoComunidad";

class Tuis extends Component {
    render() {
        return (
            <div className="Tuis">
                <Hero hero={heroTuis}/>
                <Menu menu={menuComunidad}/>
                <InfoComunidad info={infoTuis}/>
                <GaleriaComunidad actual={fotosTuis} />
                <Mapa mapa={mapaTuis}/>
                <Footer footer={footerTuis}/>
            </div>
        );
    }
}

export default Tuis;