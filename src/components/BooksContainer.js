import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BooksContainer() {
    const [ books, setBooks ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/books")
            .then((resp) => resp.json())
            .then((data) => setBooks(data))
    }, [])

    const bookCards = books.map((book) => {
        return (
            <BookCard 
                key={book.id}
                title={book.title}
                image={book.image}
            />
        )
    })
    return (
        <ul className="cards">{bookCards}</ul>
      );
}

export default BooksContainer;