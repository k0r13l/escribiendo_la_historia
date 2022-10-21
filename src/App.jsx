import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Info from "./components/Info/Informacion";
import Libros from "./components/Libros/TableLibros";
import Comunidades from "./components/Comunidades/Comunidades";
import Contactos from "./components/Contactos/Contactos";
import NotFound from "./components/NotFounds/NotFound";
import Aquiares from "./comunidadPages/AquiaresComponents/Aquiares";
import LaSuiza from "./comunidadPages/SuizaComponents/Suiza";
import Peralta from "./comunidadPages/PeraltaComponents/Peralta";
import SanAntonio from "./comunidadPages/SanAntonioComponents/SanAntonio";
import SantaCruz from "./comunidadPages/SantaCruzComponents/SantaCruz";
import SantaRosa from "./comunidadPages/SantaRosaComponents/SantaRosa";
import SantaTeresita from "./comunidadPages/SantaTeresitaComponents/SantaTeresita";
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
        <Route exact path="/aquiares" component={Aquiares} />
        <Route exact path="/laSuiza" component={LaSuiza} />
        <Route exact path="/peralta" component={Peralta} />
        <Route exact path="/sanAntonio" component={SanAntonio} />
        <Route exact path="/santaCruz" component={SantaCruz} />
        <Route exact path="/santaRosa" component={SantaRosa} />
        <Route exact path="/santaTeresita" component={SantaTeresita} />
        <Route exact path="/tuis" component={Tuis} />
        <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;