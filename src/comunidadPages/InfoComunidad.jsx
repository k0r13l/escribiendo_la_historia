import AOS from "aos";
import "aos/dist/aos.css";
const InfoComunidad = (props) => {
    AOS.init()
    AOS.refresh();
    return (
        <div className="Info">
            <section class="section-padding pb-0" id="infoTcu">
                <div class="container mb-5 pb-lg-5">
                    <div class="row">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="mb-5 text-center" data-aos="fade-up">{props.info.name}</h2>
                                </div>
                            </div>
                        </div>
                        {props.info.info.map(info => (
                            <div class="col-lg-6 col-12 mt-3 mb-lg-5 feature-box-1">
                                <p class="me-4" data-aos="fade-up">{info.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default InfoComunidad;