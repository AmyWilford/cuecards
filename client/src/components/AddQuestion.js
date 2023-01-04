import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createQuestion } from "../utils/API";

export default function NewQuestion() {
  const [newquestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  });
  // const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "question") {
      setNewQuestion({ ...newquestion, [name]: value });
    } else if (name === "answer") {
      setNewQuestion({ ...newquestion, [name]: value });
    }
    console.log(newquestion);
  };

  const handleFormSubmit = async (event) => {
    console.log("i am working");
    event.preventDefault();
    console.log(newquestion);
    const response = { ...newquestion };
    await fetch("/api/study", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    }).catch((err) => {
      console.error(err);
      return;
    });
    setNewQuestion({ question: " ", answer: "" });
    let questionInput = document.getElementById("questionInput");
    let answerInput = document.getElementById("answerInput");
    questionInput.value = "";
    answerInput.value = "";
  };
  return (
    <div>
      <h1>add question</h1>
      <form>
        <input
          id="questionInput"
          type="text"
          name="question"
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          id="answerInput"
          type="text"
          name="answer"
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleFormSubmit}>
          add question
        </button>
      </form>
    </div>
  );
}