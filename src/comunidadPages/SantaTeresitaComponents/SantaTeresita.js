import React, { Component } from "react";
import MenuComunidad from "../MenuComunidad";
import FooterSantaTeresita from "./FooterSantaTeresita";
import GaleriaSantaTeresita from "./GaleriaSantaTeresita";
import HeroSantaTeresita from "./HeroSantaTeresita";
import MapaSantaTeresita from "./MapaSantaTeresita";

class SantaTeresita extends Component{
    render(){
        return(
            <div className="SantaTeresita">
                <HeroSantaTeresita />
                <MenuComunidad />
                <GaleriaSantaTeresita />
                <MapaSantaTeresita />
                <FooterSantaTeresita />
            </div>
        );
    }
}

export default SantaTeresita;