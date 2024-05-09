import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
    <header className="header">
        <h1 className="app-name">Book Club</h1>
        <nav className="nav-btn">
            <NavLink className="nav-btn" to="/"><button className="btn">Home</button></NavLink>
            <NavLink className="nav-btn" to="/books"><button className="btn">Our Books</button></NavLink>
            <NavLink className="nav-btn" to="/new"><button className="btn">Add New Book</button></NavLink>
        </nav>
    </header>
    );
}

export default NavBar;