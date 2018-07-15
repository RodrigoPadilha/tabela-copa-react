import React, { Component } from "react";
import "./App.css";

import "./country-list/component";
import CountryList from "./country-list/component";

class App extends Component {
  render() {

    return (
      <div>
        <CountryList />

      </div>
    );
  }
}

export default App;
