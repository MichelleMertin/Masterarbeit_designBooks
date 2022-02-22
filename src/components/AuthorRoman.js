import React from "react";

import "./Knopf.css";

const AuthorRoman = (props) => {
  const authors = [
    {
      text: "Sarah Sprinz",
      handler: props.actionProvider.recommendAuthor,
      id: 1
    },
    {
      text: "Colleen Hoover",
      handler: props.actionProvider.recommendAuthor,
      id: 2
    },
    {
      text: "Mona Kasten",
      handler: props.actionProvider.recommendAuthor,
      id: 3
    },
    {
      text: "Julia Quinn",
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

export default AuthorRoman;
