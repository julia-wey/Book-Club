import React from "react";

function BookCard({title, image}) {
    return (
        <li className="card">
            <img src={image} alt={title} />
            <h4>{title}</h4>
        </li>
    );
}

export default BookCard;