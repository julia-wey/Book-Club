import React, { useState } from "react";
import NavBar from "./NavBar";
import Form from 'react-bootstrap/Form';

function NewBookForm({setBooks}) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newBook = {
      title: title,
      author: author,
      publisher: publisher,
      image: image,
      discussionDate: date,
    }
    
    fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newBook)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBooks((books) => [...books, data])
      })
  }
      
  return (
        <>
          <NavBar />
          <br />
          <h3 className="heading">Add a new book in the form below.</h3>
          <form className="form" onSubmit={handleSubmit}>
          <Form.Control 
            type="text" 
            name="title" 
            placeholder="title" 
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <Form.Control 
            type="text" 
            name="author" 
            placeholder="author" 
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <Form.Control 
            type="text" 
            name="publisher" 
            placeholder="publisher" 
            onChange={(e) => setPublisher(e.target.value)}
          />
          <br />
          <Form.Control 
            type="text" 
            name="image" 
            placeholder="book cover image URL" 
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <Form.Control 
            type="text" 
            name="date" 
            placeholder="discussion date" 
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <button type="submit">Add Book</button> 
          </form>
        </>
      );
    }

export default NewBookForm;