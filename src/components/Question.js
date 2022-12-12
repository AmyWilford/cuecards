import React, { useState } from "react";
import QuestionList from "./QuestionList";

export default function Question() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getQuestion = (event) => {
    setQuestion(QuestionList[Math.floor(Math.random() * QuestionList.length)]);
    return question;
  };

  const getAnswer = (event) => {
    setAnswer(question.answer);
  };
  return (
    <div>
      <button onClick={getQuestion}>hello</button>
      <p>{question.question}</p>
      <button onClick={getAnswer}></button>
      <p>{answer}</p>
    </div>
  );
}
