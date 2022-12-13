import React, { useState } from "react";
import QuestionList from "./QuestionList";
import "./styles.css";

export default function Question() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayClass, setdisplayClass] = useState("d-none");

  const getQuestion = (event) => {
    setQuestion(QuestionList[Math.floor(Math.random() * QuestionList.length)]);
    const startBtn = document.getElementById("startbtn");
    startBtn.classList.add("d-none");
    setdisplayClass("d-block");
    return question;
  };

  const getAnswer = (event) => {
    setdisplayClass("d-block");
    setAnswer(question.answer);
  };

  const newQuestion = () => {
    setQuestion("");
    setAnswer("");
    setQuestion(QuestionList[Math.floor(Math.random() * QuestionList.length)]);

  };

  return (
    <div>
      <div className="container m-5">
        <button id="startbtn" onClick={getQuestion}>
          start studying
        </button>
        <p>{question.question}</p>
        <p>{answer}</p>
      </div>
      <div className="row d-flex justify-content-end">
        <div className={displayClass}>
          <button
            className="btn btn-warning m-1"
            id="answerbtn"
            onClick={getAnswer}
          >
            Answer
          </button>
        </div>

        <div className={displayClass}>
          <button
            className="btn btn-warning m-1"
            id="newQbtn"
            onClick={newQuestion}
          >
            New Question
          </button>
        </div>
      </div>
    </div>
  );
}
