import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Mapa from "../../components/Mapa/Mapa";
import Menu from "../../components/Menu/Menu";
import { footerPeralta, fotosPeralta, heroPeralta, infoPeralta, mapaPeralta, menuComunidad } from "../../Informacion/informacion";
import GaleriaComunidad from "../GaleriaComunidad";
import InfoComunidad from "../InfoComunidad";

class Peralta extends Component {
    render() {
        return (
            <div className="Peralta">
                <Hero hero={heroPeralta}/>
                <Menu menu={menuComunidad}/>
                <InfoComunidad info={infoPeralta}/>
                <GaleriaComunidad actual={fotosPeralta} />
                <Mapa mapa={mapaPeralta}/>
                <Footer footer={footerPeralta}/>
            </div>
            );
    }
}

export default Peralta;