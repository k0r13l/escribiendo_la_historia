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
                    <a href="/santaTeresita">
                      <img class="img img-raised" src="img/santaTeresita.jpeg"  alt="#"/>
                        <i class="fas fa-search"></i>
                    </a>
                  </div>
                  <div class="table">
                    <h4 class="card-caption">Santa Teresita</h4>
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