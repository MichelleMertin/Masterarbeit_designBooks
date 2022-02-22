import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import "./Book.css";

const Book = ({ recommendedBooks, indexBegin, indexEnd }) => {
  console.log(recommendedBooks);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bookMarkup[0].thumbnail}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{bookMarkup[0].title}</h3>
          <p>{bookMarkup[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bookMarkup[1].thumbnail}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{bookMarkup[1].title}</h3>
          <p>{bookMarkup[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bookMarkup[2].thumbnail}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{bookMarkup[2].title}</h3>
          <p>{bookMarkup[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Book;
