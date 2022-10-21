import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Mapa from "../../components/Mapa/Mapa";
import Menu from "../../components/Menu/Menu";
import { footerSantaRosa, fotosSantaRosa, heroSantaRosa, infoSantaRosa, mapaSantaRosa, menuComunidad } from "../../Informacion/informacion";
import GaleriaComunidad from "../GaleriaComunidad";
import InfoComunidad from "../InfoComunidad";

class SantaRosa extends Component {
    render() {
        return (
            <div className="SantaRosa">
                <Hero hero={heroSantaRosa}/>
                <Menu menu={menuComunidad}/>
                <InfoComunidad info={infoSantaRosa}/>
                <GaleriaComunidad actual={fotosSantaRosa} />
                <Mapa mapa={mapaSantaRosa}/>
                <Footer footer={footerSantaRosa}/>
            </div>
            );
    }
}

export default SantaRosa;