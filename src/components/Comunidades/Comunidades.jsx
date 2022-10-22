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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1ZNOTedCTAPEd7FDa_iQHAgrY3JlCmELk"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1WLTf8Kmo1RN08gTeVN0uPjqbFqW3Bj7_"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1MN_tYhmd4qt5TX29WqHUj50qik6bNWCP"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1nGORQu7byeU4BNtYj5vOWaeVidwDxcNh"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1_ENjsTr49s6Kv1GsVMJxwZXBRt7LPmnC"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1oDxK3ZmqWmp7asSBYsixuJrIKn5xSG__"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=1Oe-hIzIfTHBnuS-a4iUYQtHLMtAr4Pwu"  alt="#"/>
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
                      <img class="img img-raised" src="https://drive.google.com/uc?export=view&id=18Qkxetsn-GQtE1AZDDdu4uDR9gzN71Vb"  alt="#"/>
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