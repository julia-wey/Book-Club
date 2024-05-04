import React from "react";

function NavBar() {
    return (
    <header>
      <h1>
        Book Club
        <span className="logo" role="img" alt="stack of three books emoji">
          📚 
        </span>
        <button className="nav-btn">Add New Book</button>
        <button className="nav-btn">Books</button>
      </h1>
    </header>
    );
}

export default NavBar;