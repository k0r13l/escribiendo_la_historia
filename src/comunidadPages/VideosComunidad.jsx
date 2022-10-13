
const VideosComunidad = (props) => {
    return (
        <div>
            <section class="portfolio" id="videos">
                <div class="container-fluid">
                    <div class="row">
                        <div class="gallery col-12">
                            <h2 class="mb-5 text-center gallery-title" data-aos="fade-up">Videos</h2>
                        </div>
                        {props.videos.video.map(img => (
                            <div class="gallery_product col-sm-3 col-xs-6'">
                                <a href='3' data-bs-toggle="modal" data-bs-target={'#' + img.target}>
                                    <div class="card">
                                        <img class="zoom img-responsive" id="carousel1" alt="" src={img.img} />
                                    </div>
                                </a>
                            </div>))}
                    </div>
                </div>
            </section>
            {props.videos.video.map(img => (
                <div class="modal fade" id={img.target} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                            <div class="ratio ratio-16x9">
                                <iframe class="embed-responsive-item d-block w-100" id={img.id} title="modal" src={img.video} allowfullscreen></iframe>
                            </div>
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

export default VideosComunidad;

