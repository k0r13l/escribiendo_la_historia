import React, { Component } from "react";
class MapaTuis extends Component {
    render() {
        return (
            <div className="MapaTuis">
                <section class="google-map" id="contactos">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.5603899879222!2d-83.582012041932!3d9.840222140990566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa6d5581027a9c3%3A0xfdb8fa4250a319bd!2s414%2C%20Tuis%2C%20Provincia%20de%20Cartago%2C%20Turrialba!5e0!3m2!1ses-419!2scr!4v1659652515199!5m2!1ses-419!2scr" class="map-iframe" title="myFrame" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </section>
            </div>
        );
    }
}

export default MapaTuis;