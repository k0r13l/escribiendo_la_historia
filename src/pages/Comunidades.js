import React, { Component } from "react";

class Comunidades extends Component {
  render() {
    return (
      <div className="Comunidades">
        <section class="news section-padding" id="comunidades">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="mb-5 text-center">Comunidades</h2>
              </div>

              <div class="col-md-4">
                <div class="card lugar card-blog">
                  <div class="card-image image">
                    <a href="#hero">
                      <img class="img img-raised" src="img/f0f6d7da-1c03-4535-8d38-4b9174b66295.jpg"  alt="#"/>
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