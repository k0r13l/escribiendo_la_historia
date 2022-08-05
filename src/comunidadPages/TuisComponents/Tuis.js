import React, { Component } from "react";
import MenuComunidad from "../MenuComunidad";
import FooterTuis from "./FooterTuis";
import HeroTuis from "./HeroTuis";
import MapaTuis from "./MapaTuis";

class Tuis extends Component {
    render() {
        return (
            <div className="Tuis">
                <HeroTuis />
                <MenuComunidad />
                <MapaTuis />
                <FooterTuis />
            </div>
            
        );
    }
}

export default Tuis;