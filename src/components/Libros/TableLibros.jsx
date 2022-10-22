import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
class TableLibros extends Component {
  render() {
    AOS.init()
    AOS.refresh();
    return (
      <div className="Libros">
        <section class="section-padding" id="libros">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="mb-5 text-center" data-aos="fade-up">Libros</h2>
              </div>
              <div class="panel panel-primary filterable">
                <div class="panel-heading">
                  <h3 class="panel-title">Libros TCU</h3>
                  <div class="pull-right">
                    <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filtrar</button>
                  </div>
                </div>
                <table class="table table-hover table-bordered">
                  <thead class="tabla">
                    <tr class="filters">
                      <th><input type="text" class="form-control" placeholder="#" disabled /></th>
                      <th><input type="text" class="form-control" placeholder="Comunidad" disabled /></th>
                      <th><input type="text" class="form-control" placeholder="Resumen" disabled /></th>
                      <th>Descargar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Santa Teresita</td>
                      <td>Santa Teresita o Lajas</td>
                      <td>Libro</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Tuis</td>
                      <td>Una comunidad</td>
                      <td>Libro</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>La Suiza</td>
                      <td>Una comunidad</td>
                      <td>Libro</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <br/>
      </div>
      
    );
  }
}

export default TableLibros;