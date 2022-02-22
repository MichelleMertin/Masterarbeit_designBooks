import React, { useState, useRef } from "react";
import { Card, Overlay, Tooltip } from "react-bootstrap";

import "./Book.css";

const BookNew = ({ recommendedBooks, indexBegin, indexEnd }) => {
  console.log(recommendedBooks);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const bookMarkup = recommendedBooks
    .slice(indexBegin, indexEnd)
    .map((book) => (
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={book.thumbnail}
            ref={target}
            onClick={() => setShow(!show)}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.author}, {book.genre}, {book.publishedDate}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {book.price}€, {book.rating} Sterne
            </small>
          </Card.Footer>
        </Card>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {book.description}
            </Tooltip>
          )}
        </Overlay>
      </div>
    ));

  return <div>{bookMarkup}</div>;
};

export default BookNew;
