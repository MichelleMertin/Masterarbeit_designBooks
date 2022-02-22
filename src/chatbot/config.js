import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import NewChoices from "../components/NewChoices";
import Choices from "../components/Choices";
import Genre from "../components/Genre";
import Book from "../components/Book";
import Help from "../components/Help";
import Author from "../components/Author";
import AuthorComic from "../components/AuthorComic";
import AuthorKrimi from "../components/AuthorKrimi";
import AuthorSciFi from "../components/AuthorSciFi";
import AuthorRoman from "../components/AuthorRoman";
import Book2 from "../components/Book2";
import BookNew from "../components/BookNew";

const botName = "Luca";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hallo, ich bin ${botName}, dein Empfehlungssystem. Ich würde dir gerne bei deiner Suche behilflich sein und dir Bücher empfehlen.`
    ),
    createChatBotMessage(`Wonach möchtest du suchen?`, {
      widget: "help"
    })
  ],
  state: {
    recommendedBooks: [
      { id: 1, title: "Du" },
      { id: 2, title: "bist" },
      { id: 3, title: "doof" }
    ],
    indexBegin: 0,
    indexEnd: 3
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E"
    },
    chatButton: {
      backgroundColor: "#376B7E"
    }
  },
  widgets: [
    {
      widgetName: "help",
      widgetFunc: (props) => <Help {...props} />
    },
    {
      widgetName: "genre",
      widgetFunc: (props) => <Genre {...props} />
    },
    {
      widgetName: "author",
      widgetFunc: (props) => <Author {...props} />
    },
    {
      widgetName: "authorComic",
      widgetFunc: (props) => <AuthorComic {...props} />
    },
    {
      widgetName: "authorKrimi",
      widgetFunc: (props) => <AuthorKrimi {...props} />
    },
    {
      widgetName: "authorRoman",
      widgetFunc: (props) => <AuthorRoman {...props} />
    },
    {
      widgetName: "authorSciFi",
      widgetFunc: (props) => <AuthorSciFi {...props} />
    },
    {
      widgetName: "book",
      widgetFunc: (props) => <Book {...props} />,
      mapStateToProps: ["recommendedBooks", "indexBegin", "indexEnd"]
    },
    {
      widgetName: "book2",
      widgetFunc: (props) => <Book2 {...props} />,
      mapStateToProps: ["recommendedBooks", "indexBegin", "indexEnd"]
    },
    {
      widgetName: "bookNew",
      widgetFunc: (props) => <BookNew {...props} />,
      mapStateToProps: ["recommendedBooks", "indexBegin", "indexEnd"]
    },
    {
      widgetName: "choices",
      widgetFunc: (props) => <Choices {...props} />
    },
    {
      widgetName: "newChoices",
      widgetFunc: (props) => <NewChoices {...props} />
    }
  ]
};

export default config;
