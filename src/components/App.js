import React from "react";
//import { Outlet } from "react-router-dom";
import BooksContainer from "./BooksContainer";
import NavBar from "./NavBar";
import Home from "./Home";
import BookDetails from "./BookDetails"

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Outlet /> */}
      {/* <Home GREAT QUOTES ABOUT READING HERE /> */}
      {/* <BooksContainer /> */}
      <Home />
      <BooksContainer />
      <BookDetails />
    </div>
  );
}

export default App;
