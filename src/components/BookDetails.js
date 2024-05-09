import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from './DetailsCard';
import NavBar from './NavBar'

function BookDetails() {
    const [ bookDetails, setBookDetails ] = useState([])
    const params = useParams();
    const bookId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3001/books/${bookId}`)
            .then((resp) => resp.json())
            .then((data) => setBookDetails([data]))
        }, [bookId])

    const bookInfo = bookDetails.map((book) => (
        <DetailsCard 
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            image={book.image}
            date={book.discussionDate}
             />));
    
    return (
      <>
        <header>
            <NavBar />
        </header>
        <main className="detailsPage">
            {bookInfo}
        </main>
          </>
          );
}

export default BookDetails;
