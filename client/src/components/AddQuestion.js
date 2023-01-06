import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #fff1e1;
  width: 75%;
  border-radius: 5px;
  min-height: 400px;
`;

export default function AddQuestion() {
  const [newquestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  });
  const navigate = useNavigate();

  const routeChangeAllQuestions = () => {
    let path = `/allquestions`;
    navigate(path);
  };
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
    event.preventDefault();
  
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
      <StyledContainer className="container mt-5">
        <p>Add your new question and correct answer.</p>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="question">Enter Your Question:</label>
            <input
              className="form-control"
              id="questionInput"
              type="text"
              name="question"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="question">Enter Your Answer:</label>

            <textarea
              className="form-control"
              id="answerInput"
              type="text"
              name="answer"
              required
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn custom-button m-1" type="submit">
              submit question
            </button>
            <button className="btn custom-button m-1" type="submit" onClick={routeChangeAllQuestions}>
              see all questions
            </button>
          </div>
        </form>
      </StyledContainer>
    </div>
  );
}
