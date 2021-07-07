import { React } from "react";
import Header from "./components/Header.jsx";
import Countries from "./components/Countries.jsx";
import Filter from "./components/Filter.jsx";
import Country from "./components/Country";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/">
        <Filter />
        <Countries />
      </Route>

      <Route path="/countries/:name">
        <Country />
      </Route>
    </Router>
  );
}

export default App;
