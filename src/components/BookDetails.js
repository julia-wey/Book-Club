import React, { useEffect, useState } from "react";
import DetailsCard from './DetailsCard';
import NavBar from './NavBar'

function BookDetails() {
    const [ booksDetails, setBookDetails ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/books")
            .then((resp) => resp.json())
            .then((data) => setBookDetails(data))
        }, [])

const bookInfo = booksDetails.map((book) => {
    return (
        <DetailsCard
            key={book.id}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            image={book.image}
            date={book.discussionDate}
        />
    )
})

    return (
        <div>
            <NavBar />
            <ul className="cards">{bookInfo}</ul>
        </div>
        );
}

export default BookDetails;
