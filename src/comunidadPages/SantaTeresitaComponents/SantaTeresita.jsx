import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import Hero from "../../components/Hero/Hero";
import GaleriaComunidad from "../GaleriaComunidad";
import { footerSantaTeresita, fotosSantaTeresita, heroSantaTeresita, infoSantaTeresita, mapaSantaTeresita, menuComunidad} from "../../Informacion/informacion";
import Mapa from "../../components/Mapa/Mapa";
import Footer from "../../components/Footer/Footer";
import InfoComunidad from "../InfoComunidad";


class SantaTeresita extends Component{
    render(){
        return(
            <div className="SantaTeresita">
                <Hero hero={heroSantaTeresita}/>
                <Menu menu={menuComunidad}/>
                <InfoComunidad info={infoSantaTeresita}/>
                <GaleriaComunidad actual={fotosSantaTeresita} />
                <Mapa mapa={mapaSantaTeresita}/>
                <Footer footer={footerSantaTeresita}/>
            </div>
        );
    }
}

export default SantaTeresita;