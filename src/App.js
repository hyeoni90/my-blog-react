import React from 'react';
import './App.css';
import Board from "./components/board/Board";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Board} />
        </Router>
    </div>
  );
}

export default App;
