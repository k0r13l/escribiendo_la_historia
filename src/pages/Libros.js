import React, { Component } from "react";

class Libros extends Component {
  render() {
    return (
      <div className="Libros">
        <section class="section-padding" id="libros">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="mb-5 text-center">Libros</h2>
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
                      <th><input type="text" class="form-control" placeholder="#" disabled></input></th>
                      <th><input type="text" class="form-control" placeholder="Nombre" disabled></input></th>
                      <th><input type="text" class="form-control" placeholder="Resumen" disabled></input></th>
                      <th>Descargar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Libros;