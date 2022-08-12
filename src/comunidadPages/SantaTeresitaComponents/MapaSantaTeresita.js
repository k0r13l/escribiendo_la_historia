import React, { Component } from "react";
class MapaSantaTeresita extends Component {
    render() {
        return (
            <div className="MapaSantaTeresita">
                <section class="google-map" id="contactos">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5557.152837100145!2d-83.65156731556873!3d9.975454928085224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d3ad493af923%3A0x739b7283d378000d!2sSalon%20de%20Catequesis%20Parroquia%20de%20Santa%20Teresita%20del%20Nino%20Jesus%2C%20Provincia%20de%20Cartago%2C%20Santa%20Teresita!5e0!3m2!1ses!2scr!4v1660257514103!5m2!1ses!2scr" class="map-iframe" title="myFrame" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </section>
            </div>
        );
    }
}

export default MapaSantaTeresita;