import React, { Component } from "react";
class Mapa extends Component {
    render() {
        return (
            <div className="Mapa">
                <section class="google-map" id="contactos">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.39231162523!2d-83.67413988504319!3d9.901246577443095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d42417bc6851%3A0xd2ae13fcaa9ce072!2sUniversidad%20de%20Costa%20Rica%20(Sede%20del%20Atl%C3%A1ntico)!5e0!3m2!1ses!2scr!4v1654577240184!5m2!1ses!2scr" class="map-iframe" title="myFrame" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </section>
            </div>
        );
    }
}

export default Mapa;