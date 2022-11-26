
import AOS from "aos";
import "aos/dist/aos.css";
const Informacion = (props) => {

  AOS.init()
  AOS.refresh();
  return (
    <div className="Info">
      <section class="section-padding pb-0" id="infoTcu">
        <div class="container mb-5 pb-lg-5">
          <div class="row">
            <div class="col-12">
              <h2 class="mb-5 text-center" data-aos="fade-up">Información del TCU</h2>
            </div>
            <div class="col-lg-6 col-12 mt-3 mb-lg-3">
              <div class="feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">{props.info.descripcion.name}</h2>
                <p class="me-4" data-aos="fade-up">{props.info.descripcion.text}</p>
              </div>

            </div>

            <div class="col-lg-6 col-12 mt-lg-3 mb-lg-3">
              <div class="feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">{props.info.justificacion.name}</h2>
                <p class="me-4" data-aos="fade-up">{props.info.justificacion.text}</p>
              </div>

            </div>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="mb-5 text-center" data-aos="fade-up">{props.info.objectivos.name}</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12 mt-3 mb-lg-3">
              <div class="feature-box-1">
                <p class="me-4" data-aos="fade-up">{props.info.objectivos.obj1}</p>
              </div>

            </div>
            <div class="col-lg-6 col-12 mt-3 mb-lg-3">
              <div class="feature-box-1">
                <p class="me-4" data-aos="fade-up">{props.info.objectivos.obj2}</p>
              </div>

            </div>
            <div class="col-lg-6 col-12 mt-3 mb-lg-3">
              <div class="feature-box-1">
                <p class="me-4" data-aos="fade-up">{props.info.objectivos.obj3}</p>
              </div>

            </div>
            <div class="col-lg-6 col-12 mt-3 mb-lg-3">
              <div class="feature-box-1">
                <p class="me-4" data-aos="fade-up">{props.info.objectivos.obj4}</p>
              </div>

            </div>
            <div class="col-lg-6 col-12 mt-3 mb-lg-3">
              <div class="feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">{props.info.beneficio.name}</h2>
                <p class="me-4" data-aos="fade-up">{props.info.beneficio.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Informacion;