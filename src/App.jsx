import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Info from "./components/Info/Informacion";
import Libros from "./components/Libros/TableLibros";
import Comunidades from "./components/Comunidades/Comunidades";
import Contactos from "./components/Contactos/Contactos";
import NotFound from "./components/NotFounds/NotFound";
import SantaTeresita from "./comunidadPages/SantaTeresitaComponents/SantaTeresita";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/libros" component={Libros} />
        <Route exact path="/comunidades" component={Comunidades} />
        <Route exact path="/contactos" component={Contactos} />
        <Route exact path="/santaTeresita" component={SantaTeresita} />
        <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;