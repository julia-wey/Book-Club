import React, { useEffect, useState } from "react";
import DetailsCard from './DetailsCard';

function BookDetails() {
    const [ booksDetails, setBookDetails ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/books")
            .then((resp) => resp.json())
            .then((data) => setBookDetails(data))
    console.log("this is the book details comp")
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
    <ul className="cards">{bookInfo}</ul>
  );
}


export default BookDetails;
