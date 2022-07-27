import React, { Component } from "react";
import { Link } from "react-router-dom";
class Menu extends Component {
  render() {
    return (
    <nav class="navbar navbar-expand-lg bg-light shadow-lg">
        <div class="container">
            <Link class="navbar-brand" to="/">
                <strong>TC-688 Turrialba</strong>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/info">Información TCU</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/libros">Libros</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/comunidades">Comunidades</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contactos">Contactos</Link>
                    </li>    
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Menu;