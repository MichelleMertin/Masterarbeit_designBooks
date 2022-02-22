import React from "react";

import "./Knopf.css";

const NewChoices = (props) => {
  const newChoices = [
    {
      text: "Buch 1",
      handler: props.actionProvider.buyBook,
      id: 1
    },
    { text: "Buch 2", handler: props.actionProvider.buyBook, id: 2 },
    { text: "Buch 3", handler: props.actionProvider.buyBook, id: 3 }
  ];

  const buttonsMarkup = newChoices.map((choice) => (
    <button key={choice.id} onClick={choice.handler} className="knopf-button">
      {choice.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default NewChoices;
