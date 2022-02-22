import React from "react";

import "./Knopf.css";

const Choices = (props) => {
  const choices = [
    {
      text: "Ein Buch kaufen",
      handler: props.actionProvider.buyWhichBook,
      id: 1
    },
    {
      text: "Kenne ich schon",
      handler: props.actionProvider.recommendSerendipity,
      id: 2
    },
    {
      text: "Anderer Autor",
      handler: props.actionProvider.chooseAuthor,
      id: 3
    },
    { text: "Anderes Genre", handler: props.actionProvider.chooseGenre, id: 4 },
    {
      text: "Beenden",
      handler: props.actionProvider.endConv,
      id: 6
    }
  ];

  const buttonsMarkup = choices.map((choice) => (
    <button key={choice.id} onClick={choice.handler} className="knopf-button">
      {choice.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Choices;
