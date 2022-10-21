import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Mapa from "../../components/Mapa/Mapa";
import Menu from "../../components/Menu/Menu";
import { footerSanAntonio, fotosSanAntonio, heroSanAntonio, infoSanAntonio, mapaSanAntonio, menuComunidad } from "../../Informacion/informacion";
import GaleriaComunidad from "../GaleriaComunidad";
import InfoComunidad from "../InfoComunidad";

class SanAntonio extends Component {
    render() {
        return (
            <div className="SanAntonio">
                <Hero hero={heroSanAntonio}/>
                <Menu menu={menuComunidad}/>
                <InfoComunidad info={infoSanAntonio}/>
                <GaleriaComunidad actual={fotosSanAntonio} />
                <Mapa mapa={mapaSanAntonio}/>
                <Footer footer={footerSanAntonio}/>
            </div>
            );
    }
}

export default SanAntonio;