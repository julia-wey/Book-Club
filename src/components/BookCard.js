import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function BookCard({id, image}) {
    return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Link to={`/book/${id}`} className="linkBtn">Details</Link>
              </Card.Body>
            </Card>
          );
}

export default BookCard;