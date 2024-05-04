import React from "react";
import Card from 'react-bootstrap/Card';

function DetailsCard({title, author, publisher, image, date}) {
    return (
        <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{`by ${author}`}</Card.Text>
                <Card.Text>{`published by ${publisher}`}</Card.Text>
                <Card.Text>{`for ${date} meeting`}</Card.Text>
              </Card.Body>
            </Card>
          );

}


export default DetailsCard;
