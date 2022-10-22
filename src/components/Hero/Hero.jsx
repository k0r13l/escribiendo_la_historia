
const Hero = (props) => {
        return (
            <div className="Hero">
                <section class="hero" id="hero">
                    <div class="heroText">
                        <h1 class="text-white mt-5 mb-lg-4">
                            {props.hero.opcion.name}
                        </h1>

                    </div>

                    <div class="videoWrapper">
                        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" class="custom-video">
                            <source src="https://drive.google.com/uc?export=view&id=1JQDBMteJCyDCqs8owikkXuOIlvoAfuOq" type="video/mp4" />
                        </video>
                    </div>

                    <div class="overlay"></div>
                </section>
            </div>
        );
    
}

export default Hero;
