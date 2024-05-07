import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import NavBar from "./NavBar"

function BooksContainer() {
    const [ books, setBooks ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/books")
            .then((resp) => resp.json())
            .then((data) => setBooks(data))
    }, [])

    const bookCards = books.map((book) => {
        return (
            <div>
                <BookCard 
                    key={book.id}
                    title={book.title}
                    image={book.image}
                    id={book.id}
                />
            </div>)})
        return (
            <div>
                <NavBar />
                <ul className="cards">{bookCards}</ul>
            </div>
            );
}

export default BooksContainer;