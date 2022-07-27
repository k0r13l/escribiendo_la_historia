import React, { Component } from "react";

import Menu from './../pages/Menu';

class Home extends Component {
  render() {
    return (
        <div className="Home">
          < Menu />
          <h5>Home</h5>
        </div>
    );
  }
}

export default Home;