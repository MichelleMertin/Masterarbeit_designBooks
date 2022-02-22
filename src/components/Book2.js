import React, { useState, useRef } from "react";
import { Card, Overlay, Tooltip } from "react-bootstrap";

import "./Book.css";

const Book2 = ({ recommendedBooks, indexBegin, indexEnd }) => {
  console.log(recommendedBooks);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(null);
  const target = useRef(null);

  const bookMarkup = recommendedBooks
    .slice(indexBegin, indexEnd)
    .map((book) => {
      return {
        id: book.id,
        title: book.title,
        author: book.author,
        genre: book.genre,
        date: book.publishedDate,
        description: book.description,
        thumbnail: book.thumbnail,
        rating: book.rating,
        price: book.price
      };
    });

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={bookMarkup[0].thumbnail}
          ref={target}
          onClick={() => setShow(!show) && setIndex(0)}
        />
        <Card.Body>
          <Card.Title>{bookMarkup[0].title}</Card.Title>
          <Card.Text>
            {bookMarkup[0].author}, {bookMarkup[0].date}{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Genre: {bookMarkup[0].genre}</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={bookMarkup[1].thumbnail}
          ref={target}
          onClick={() => setShow(!show) && setIndex(1)}
        />
        <Card.Body>
          <Card.Title>{bookMarkup[1].title}</Card.Title>
          <Card.Text>{bookMarkup[1].author}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Genre: {bookMarkup[1].genre}</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={bookMarkup[2].thumbnail}
          ref={target}
          onClick={() => setShow(!show) && setIndex(2)}
        />
        <Card.Body>
          <Card.Title>{bookMarkup[2].title}</Card.Title>
          <Card.Text>{bookMarkup[2].author}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Genre: {bookMarkup[2].genre}</small>
        </Card.Footer>
      </Card>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {bookMarkup[index].description}
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default Book2;
