import React from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col" />
          <div className="col-lg-7">
            <Nav />
            <NoteList />
          </div>
          <div className="col" />
        </div>
      </div>
    </div>
  );
}

export default App;
