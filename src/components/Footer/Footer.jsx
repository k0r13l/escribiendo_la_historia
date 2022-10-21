import AOS from "aos";
import "aos/dist/aos.css";
const Footer = (props) => {
    AOS.init()
    AOS.refresh();
    return (
        <div className="Footer">
            <footer class="footer-10" id="contactos">
                <section class="contact-section" id="contactos">
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5">
                            <div class="col-12">
                                <h2 class="mb-5 text-center conta" data-aos="fade-up">Contactos</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="container">
                    <div class="row mb-5 pb-3 no-gutters">
                        <div class="col-md-4 mb-md-0 mb-4 d-flex">
                            <div class="con con-1 w-100 py-5">
                                <div class="con-info w-100 text-center">
                                    <div class="icon d-flex align-item-center justify-content-center">
                                        <span class="glyphicon glyphicon-phone icono"></span>
                                    </div>
                                    <div class="text">
                                        <span>{props.footer.numero}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-4 d-flex">
                            <div class="con con-2 w-100 py-5">
                                <div class="con-info w-100 text-center">
                                    <div class="icon d-flex align-item-center justify-content-center">
                                        <span class="glyphicon glyphicon-envelope icono"></span>
                                    </div>
                                    <div class="text">
                                        <span>{props.footer.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-4 d-flex">
                            <div class="con con-3 w-100 py-5">
                                <div class="con-info w-100 text-center">
                                    <div class="icon d-flex align-item-center justify-content-center">
                                        <span class="glyphicon glyphicon-map-marker icono"></span>
                                    </div>
                                    <div class="text">
                                        <span>{props.footer.direccion}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5 pt-4 border-top">
                        <div class="col-md-4 mb-md-0 mb-4 col-sm-2 text-center">
                            <img class="img-fluid" src="img/1.jpg" alt="#" width="282" height="53" />
                        </div>
                        <div class="col-md-4 mb-md-0 mb-4">
                            <p class="copyright mb-0 text-center">
                                Copyright ©2022 All rights reserved.
                            </p>
                            <p class="copyright mb-0 text-center">
                                TC-688 Turrialba
                            </p>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-4 text-md-right">
                            <p class="copyright mb-0 text-center">
                                Otros links importantes
                            </p>
                            <ul class="ftco-footer-social p-0 text-center">
                                <li class="ftco-animate"><a
                                    href={props.footer.links.url1} target="_blank" rel="noopener noreferrer"><span
                                        class="tcu">TCU</span></a></li>

                                <li class="ftco-animate youtube"><a href={props.footer.links.url2} target="_blank" rel="noopener noreferrer"><span
                                    class="bi-youtube youtube"></span></a></li>

                                <li class="ftco-animate facebook"><a href={props.footer.links.url3} target="_blank" rel="noopener noreferrer"><span
                                    class="bi-facebook facebook"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;