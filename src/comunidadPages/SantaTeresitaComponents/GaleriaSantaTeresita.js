import React, { Component } from 'react';

class GaleriaSantaTeresita extends Component {
    render() {
        return (
            <div>
                <section class="portfolio news section-padding" id="galeria">
                    <div class="container container-fluid">
                        <div class="row">
                            <div class="gallery col-12">
                                <h2 class="mb-5 text-center gallery-title" data-aos="fade-up">Galeria</h2>
                            </div>
                            <div align="center">
                                <button class="filter-button" data-filter="all">Todos</button>
                                <button class="filter-button" data-filter="actual">Actual</button>
                                <button class="filter-button" data-filter="antiguas">Antiguas</button>
                                <button class="filter-button" data-filter="museo">Museo</button>
                                <br />
                            </div>
                            <div class="gallery_product col-sm-3 col-xs-6 filter actual">
                                <a class="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=122">
                                    <img class="img-responsive" alt="" src="https://picsum.photos/400/250?image=122" />
                                    <div class='img-info'>
                                        <h4>Image Title 1</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </a>
                            </div>
                            <div class="gallery_product col-sm-3 col-xs-6 filter category2">
                                <a class="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=526">
                                    <img class="img-responsive" alt="" src="https://picsum.photos/400/250?image=526" />
                                    <div class='img-info'>
                                        <h4>Image Title 2</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </a>
                            </div>

                            <div class="gallery_product col-sm-3 col-xs-6 filter category3">
                                <a class="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=626">
                                    <img class="img-responsive" alt="" src="https://picsum.photos/400/250?image=626" />
                                    <div class='img-info'>
                                        <h4>Image Title 3</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </a>
                            </div>

                            <div class="gallery_product col-sm-3 col-xs-6 filter category2">
                                <a class="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=486">
                                    <img class="img-responsive" alt="" src="https://picsum.photos/400/250?image=486" />
                                    <div class='img-info'>
                                        <h4>Image Title 5</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default GaleriaSantaTeresita;

