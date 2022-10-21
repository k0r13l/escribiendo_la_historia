import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Mapa from "../../components/Mapa/Mapa";
import Menu from "../../components/Menu/Menu";
import { footerAquiares, fotosAquiares, heroAquiares, infoAquiares, mapaAquiares, menuComunidad } from "../../Informacion/informacion";
import GaleriaComunidad from "../GaleriaComunidad";
import InfoComunidad from "../InfoComunidad";

class Aquiares extends Component {
    render() {
        return (
            <div className="Aquiares">
                <Hero hero={heroAquiares}/>
                <Menu menu={menuComunidad}/>
                <InfoComunidad info={infoAquiares}/>
                <GaleriaComunidad actual={fotosAquiares} />
                <Mapa mapa={mapaAquiares}/>
                <Footer footer={footerAquiares}/>
            </div>
            );
    }
}

export default Aquiares;