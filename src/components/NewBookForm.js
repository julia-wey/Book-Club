import React from "react";
import NavBar from "./NavBar"
import Form from 'react-bootstrap/Form';


//this needs a POST

function NewBookForm() {
    return (
        <>
          <NavBar />
          {/* <Form.Control size="lg" type="text" placeholder="Large text" /> */}
          <br />
          <Form.Control type="text" placeholder="title" />
          <br />
          <Form.Control type="text" placeholder="author" />
          <br />
          <Form.Control type="text" placeholder="publisher" />
          <br />
          <Form.Control type="text" placeholder="book cover image" />
          <br />
          <Form.Control type="text" placeholder="Discussion Date" />
          <br />
         
        </>
      );
    }

export default NewBookForm;