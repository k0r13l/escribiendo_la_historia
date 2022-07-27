import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Libros from "./pages/Libros";
import Comunidades from "./pages/Comunidades";
import Contactos from "./pages/Contactos";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/libros" component={Libros} />
        <Route exact path="/comunidades" component={Comunidades} />
        <Route exact path="/contactos" component={Contactos} />
        <Route path="*" component={Home} />
      </Router>
    );
  }
}
export default App;