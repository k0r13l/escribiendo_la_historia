import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Mapa from "../../components/Mapa/Mapa";
import Menu from "../../components/Menu/Menu";
import { footerSantaCruz, fotosSantaCruz, heroSantaCruz, infoSantaCruz, mapaSantaCruz, menuComunidad } from "../../Informacion/informacion";
import GaleriaComunidad from "../GaleriaComunidad";
import InfoComunidad from "../InfoComunidad";

class SantaCruz extends Component {
    render() {
        return (
            <div className="SantaCruz">
                <Hero hero={heroSantaCruz}/>
                <Menu menu={menuComunidad}/>
                <InfoComunidad info={infoSantaCruz}/>
                <GaleriaComunidad actual={fotosSantaCruz} />
                <Mapa mapa={mapaSantaCruz}/>
                <Footer footer={footerSantaCruz}/>
            </div>
            );
    }
}

export default SantaCruz;