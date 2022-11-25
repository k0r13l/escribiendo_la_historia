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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1SE1_FDNXWenBWu4gbkAMM_ulDKdyK0lt"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=16siSQAY6YELvaFcRSUW0fi95fnml0R1j"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1mrEZt6NJdBjzIljObDyGkif4CfAKShu4"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1EnQRNcULi81OZH2Jhoy1FSaB1qCBCabx"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1iiquyc8_w6o4WuqYfSrON4GM5Lfra4og"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1mUHu2YIJAF73dUmumxVIlJ-12dRL519H"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1TC3BKWR7XwieS-EqaTki5t--QLqELukB"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1peH5jU8RxAsH1bU4W_aEfp_z7q8NH7FB"  alt="#"/>
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