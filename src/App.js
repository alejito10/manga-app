import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Manga} from "./pages/manga/Manga";


function App() {
  return (
      <Router>


    <div className="App">

    </div>
        <Switch>
          <Route path="/">
            <Manga/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
