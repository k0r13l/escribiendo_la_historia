import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Mapa from "../../components/Mapa/Mapa";
import Menu from "../../components/Menu/Menu";
import { footerSuiza, fotosSuiza, heroSuiza, infoSuiza, mapaSuiza, menuComunidad } from "../../Informacion/informacion";
import GaleriaComunidad from "../GaleriaComunidad";
import InfoComunidad from "../InfoComunidad";

class Suiza extends Component {
    render() {
        return (
            <div className="Suiza">
                <Hero hero={heroSuiza}/>
                <Menu menu={menuComunidad}/>
                <InfoComunidad info={infoSuiza}/>
                <GaleriaComunidad actual={fotosSuiza} />
                <Mapa mapa={mapaSuiza}/>
                <Footer footer={footerSuiza}/>
            </div>
            );
    }
}

export default Suiza;