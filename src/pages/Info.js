import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <section class="section-padding pb-0" id="infoTcu">
          <div class="container mb-5 pb-lg-5">
            <div class="row">
              <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">Misión</h2>
                <p class="me-4" data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
              </div>

              <div class="col-lg-6 col-12 mt-lg-3 mb-lg-5 feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">Visión</h2>
                <p data-aos="fade-up" data-aos-delay="500">This Bootstrap 5 layout is free to use for your business. You are allowed to edit it in any way you like. However, please do not redistribute this template ZIP file for a template download purpose on any other website such as Free CSS collections.</p>
              </div>
              <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">Objectivos</h2>
                <p class="me-4" data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Info;