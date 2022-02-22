import React from "react";

import "./Knopf.css";

const AuthorKrimi = (props) => {
  const authors = [
    {
      text: "Steve Cavanagh",
      handler: props.actionProvider.recommendAuthor,
      id: 1
    },
    {
      text: "Ethan Cross",
      handler: props.actionProvider.recommendAuthor,
      id: 2
    },
    {
      text: "Sebastian Fitzek",
      handler: props.actionProvider.recommendAuthor,
      id: 3
    },
    {
      text: "Nele Neuhaus",
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

export default AuthorKrimi;
