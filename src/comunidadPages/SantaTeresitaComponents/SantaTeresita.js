import React, { Component } from "react";
import MenuComunidad from "../MenuComunidad";
import FooterSantaTeresita from "./FooterSantaTeresita";
import HeroSantaTeresita from "./HeroSantaTeresita";
import MapaSantaTeresita from "./MapaSantaTeresita";

class SantaTeresita extends Component{
    render(){
        return(
            <div className="SantaTeresita">
                <HeroSantaTeresita />
                <MenuComunidad />
                <MapaSantaTeresita />
                <FooterSantaTeresita />
            </div>
        );
    }
}

export default SantaTeresita;