
const GaleriaComunidad = (props) => {
    return (
        <div>
            <section class="portfolio" id="galeria">
                <div class="container-fluid">
                    <div class="row">
                        <div class="gallery col-12">
                            <h2 class="mb-5 text-center" data-aos="fade-up">Galeria</h2>
                        </div>
                        <div align="center">
                            <button class="filter-button active" data-filter="all">Todos</button>
                            <button class="filter-button" data-filter="actual">Actual</button>
                            <button class="filter-button" data-filter="antiguas">Antiguas</button>
                            <button class="filter-button" data-filter="museo">Museo</button>
                            <button class="filter-button" data-filter="videos">Videos</button>
                            <br />
                        </div>
                        {props.actual.galeria.map(img => (
                            <div class={`gallery_product col-sm-3 col-xs-6 filter ${img.estado}`} >
                                <a href='3' data-bs-toggle="modal" data-bs-target={'#' + img.target}>
                                    <div class="card">
                                        <img class="zoom img-responsive" id="carousel1" alt="" src={img.img} />
                                    </div>
                                </a>
                            </div>))}
                    </div>
                </div>
            </section>
            {props.actual.galeria.map(img => (
                <div class="modal fade" id={img.target} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                {(() => {
                                    if (img.video != null) {
                                        return (
                                            <iframe class="embed-responsive-item d-block w-100" id={img.id} title="modal" src={img.video} allowfullscreen></iframe>
                                        )
                                    }
                                    return (
                                        <img src={img.img} class="d-block w-100" alt="1" />
                                    )

                                })()}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>))}
            <br />
        </div>
    );
}

export default GaleriaComunidad;

