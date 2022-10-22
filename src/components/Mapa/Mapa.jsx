const Mapa = (props) => {
    return (
        <div className="Mapa">
            <section class="google-map" id="contactos">
                <iframe src={props.mapa.opcion.mapa} class="map-iframe" title="myFrame" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </section>
        </div>
    );
}

export default Mapa;