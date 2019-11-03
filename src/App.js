import React from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>REACT COLLECTORS</h1>
            <p className="lead">
              How good are you with Pokemon Alphabets? Let's find out!
            </p>
          </div>
        </div>
      </header>
      <Main />
    </div>
  );
}

export default App;
