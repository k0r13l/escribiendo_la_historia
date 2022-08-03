import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Libros from "./pages/Libros";
import Comunidades from "./pages/Comunidades";
import Contactos from "./pages/Contactos";
import NotFound from "./pages/NotFound";
import Tuis from "./comunidadPages/TuisComponents/Tuis";

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
        <Route exact path="/tuis" component={Tuis} />
        <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;