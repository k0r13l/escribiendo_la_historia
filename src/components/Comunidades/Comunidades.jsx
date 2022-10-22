import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
class Comunidades extends Component {
  render() {
    AOS.init()
    AOS.refresh();
    return (
      <div className="Comunidades">
        <section class="news section-padding" id="comunidades">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="mb-5 text-center" data-aos="fade-up">Comunidades</h2>
              </div>
              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="/aquiares">
                      <img class="img img-raised" src="img/comunidadesImg/Aquiares/1.png"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">Aquiares</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="/laSuiza">
                      <img class="img img-raised" src="img/comunidadesImg/Suiza/1.png"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">La Suiza</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="/peralta">
                      <img class="img img-raised" src="img/comunidadesImg/Peralta/1.jpg"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">Peralta</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="/sanAntonio">
                      <img class="img img-raised" src="img/comunidadesImg/SanAntonio/1.png"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">San Antonio</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="/santaCruz">
                      <img class="img img-raised" src="img/comunidadesImg/SantaCruz/1.png"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">Santa Cruz</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="/santaRosa">
                      <img class="img img-raised" src="img/comunidadesImg/SantaRosa/1.png"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">Santa Rosa</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="/santaTeresita">
                      <img class="img img-raised" src="img/comunidadesImg/SantaTeresita/1.png"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">Santa Teresita</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="/tuis">
                      <img class="img img-raised" src="img/comunidadesImg/Tuis/1.png"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">Tuis</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Comunidades;