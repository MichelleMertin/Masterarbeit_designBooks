import React from "react";

import "./Knopf.css";

const AuthorSciFi = (props) => {
  const authors = [
    {
      text: "Phillip P. Peterson",
      handler: props.actionProvider.recommendAuthor,
      id: 1
    },
    {
      text: "Neal Stephenson",
      handler: props.actionProvider.recommendAuthor,
      id: 2
    },
    {
      text: "Markus Heitz",
      handler: props.actionProvider.recommendAuthor,
      id: 3
    },
    {
      text: "Andy Weir",
      handler: props.actionProvider.recommendAuthor,
      id: 4
    }
  ];

  const authorHandler = (event) => {
    console.log(event.target.value);
    props.actionProvider.recommendAuthor(event.target.value);
  };

  const buttonsMarkup = authors.map((author) => (
    <button
      key={author.id}
      value={author.text}
      onClick={authorHandler}
      className="knopf-button"
    >
      {author.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default AuthorSciFi;
