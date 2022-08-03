import React, { Component } from "react";

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <section class="hero" id="hero">
                    <div class="heroText">
                        <h1 class="text-white mt-5 mb-lg-4">
                            TC-688 Turrialba
                        </h1>

                    </div>

                    <div class="videoWrapper">
                        <video autoplay="" loop="" muted="" class="custom-video" poster="videos/792bd98f3e617786c850493560e11c45.jpg">
                            <source src="videos/814dc43e870597176cad645798825c03.mp4" type="video/mp4" />

                                Your browser does not support the video tag.
                        </video>
                    </div>

                    <div class="overlay"></div>
                </section>
            </div>
        );
    }
}

export default Hero;