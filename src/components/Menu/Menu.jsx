import React, { Component } from "react";
class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav class="navbar navbar-expand-lg bg-light shadow-lg">
                    <div class="container">
                        <strong class="navbar-brand">TC-688 Turrialba</strong>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item ">
                                    <a class="nav-link active" href="#hero">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#infoTcu">Información TCU</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#libros">Libros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#comunidades">Comunidades</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contactos">Contactos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;