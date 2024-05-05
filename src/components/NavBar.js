import React from "react";

function NavBar() {

    function handleClick() {
        
    }

    return (
    <header>
      <h1>
        Book Club
        <span className="logo" role="img" alt="stack of three books emoji">
          📚 
        </span>
        </h1>
        {/* <nav>
            <NavLink to="/books">
                Our Books
            </NavLink>
            <NavLink to="/new">
                Add New Book
            </NavLink>
        </nav> */}
        <button className="nav-btn">Add New Book</button>
        <button className="nav-btn">Our Books</button>
    </header>
    );
}

export default NavBar;