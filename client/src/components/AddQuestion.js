import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #FFE477;
  border-radius: 5px;
  min-height: 400px;
  box-shadow: 5px 7px 5px #888888;
  padding: 1rem; 
`;

export default function AddQuestion() {
  const [newquestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  });
  const navigate = useNavigate();

  const routeChangeAllQuestions = () => {
    let path = `/`;
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
    // let questionInput = document.getElementById("questionInput");
    // let answerInput = document.getElementById("answerInput");
    // questionInput.value = "";
    // answerInput.value = "";
    navigate("/");
  };
  return (
    <div className="container">
      <StyledContainer>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-link m-1"
            type="submit"
            onClick={routeChangeAllQuestions}
          >
            <small> ← back to questions</small>
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="question">New Question:</label>
            <input
              className="form-control custom-input-size"
              id="questionInput"
              type="text"
              name="question"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="question">New Answer:</label>

            <textarea
              className="form-control custom-input-size"
              id="answerInput"
              type="text"
              name="answer"
              rows="4"
              required
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-end align-bottom">
            <button className="btn custom-button m-1" type="submit">
              submit question
            </button>
          </div>
        </form>
      </StyledContainer>
    </div>
  );
}
