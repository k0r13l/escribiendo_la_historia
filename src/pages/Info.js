import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
class Info extends Component {
  render() {
    AOS.init()
    AOS.refresh();
    return (
      <div className="Info">
        <section class="section-padding pb-0" id="infoTcu">
          <div class="container mb-5 pb-lg-5">
            <div class="row">
              <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">Descripción</h2>
                <p class="me-4" data-aos="fade-up">Este proyecto pretende recopilar el pasado histórico de distintas comunidades del cantón de Turrialba, a partir del rescate de la
                  memoria oral de sus habitantes y que, al no encontrarse de forma escrita, corre el riesgo de que con el paso del tiempo se pierda. Busca
                  empoderar a los actores comunitarios en el conocimiento y transmisión de su identidad histórica y cultural, además de divulgar,
                  a través de diferentes medios impresos y digitales, toda la información que se recupere; de tal manera que se preserve la
                  identidad histórica de cada comunidad, que sus habitantes conozcan mejor sus raíces y que haya un mejor y mayor acceso a
                  dicha información.</p>
              </div>

              <div class="col-lg-6 col-12 mt-lg-3 mb-lg-5 feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">Justificación del proyecto</h2>
                <p class="me-4" data-aos="fade-up">No hay duda de que el patrimonio arquitectónico en las comunidades del cantón de Turrialba tiene una gigantesca riqueza que debe ser
                  estudiada, valorada y en diferentes casos rescatada; sin embargo lo cierto es que también resulta inminente prestar atención a otros espacios de identidad cultural unidos
                  al origen histórico de todos los pueblos y comunidades, dígase economía, religión, deporte, educación, festividades, así como tradiciones ligadas a la melodía, escritura, leyendas,
                  tradiciones, comidas, personajes sobresalientes e historia local principalmente; lo que se enmarca dentro del patrimonio cultural inmaterial, el cual define la UNESCO como "un importante
                  elemento del mantenimiento de la diversidad cultural frente a la creciente globalización.</p>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <h2 class="mb-5 text-center" data-aos="fade-up">Objectivos</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                <p class="me-4" data-aos="fade-up">Recuperar información acerca del pasado histórico de las comunidades del cantón de Turrialba, para preservar el conocimiento que poseen sus habitantes.</p>
              </div>
              <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                <p class="me-4" data-aos="fade-up">Sistematizar la información acerca del origen, pasado y presente de las comunidades del cantón de Turrialba, con el fin de crear fuentes de consulta de la información histórica de recopilada.</p>
              </div>
              <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                <p class="me-4" data-aos="fade-up">Empoderar actores comunitarios para contribuir con el fortalecimiento de la identidad histórica y el sentido de pertenencia a su comunidad.</p>
              </div>
              <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                <p class="me-4" data-aos="fade-up">Divulgar la información histórica de las comunidades estudiadas, por medio de la publicación de un documento escrito, un material audiovisual, así como el uso de medios digitales que permitan el acceso de todo público a la información recabada.</p>
              </div>
              <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                <h2 class="mb-3" data-aos="fade-up">Beneficios para la población</h2>
                <p class="me-4" data-aos="fade-up">La información histórica que se logre recabar de cada una de las comunidades del cantón de Turrialba se presentará en cada comunidad 
                estudiada por medio de diferentes estrategias. El objetivo es que las futuras generaciones conozcan el pasado histórico de su comunidad y se fortalezca la identidad histórica. 
                La comunidad en la que se desarrolle el proyecto recibirá apoyo en la organización de actividades, asesoramiento en iniciativas para preservar su memoria histórica, divulgación 
                de información y acompañamiento en labores de recuperación y preservación de su identidad histórica. </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Info;
