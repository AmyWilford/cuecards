import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";
import "./styles.css";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #fff1e1;
  border-radius: 5px;
  min-height: 400px;
`;
const StyledButton = styled.button`
  background-color: #ff7134;
  color: #fff1e1;
  border: none;
`;

export default function Question() {
  // Set State
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayClass, setdisplayClass] = useState("d-none");
  let navigate = useNavigate();

  // Establish navigation route for study break button
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  // Get a question on page load
  const getQuestion = () => {
    setQuestion(QuestionList[Math.floor(Math.random() * QuestionList.length)]);
    setAnswer(question.answer);
    setdisplayClass("d-block");
    return question;
  };

  // Get answer for question
  const getAnswer = (event) => {
    setdisplayClass("d-block");
    setAnswer(question.answer);
  };

  const newQuestion = () => {
    // setQuestion("");
    setAnswer("");
    setQuestion(QuestionList[Math.floor(Math.random() * QuestionList.length)]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="container mt-5">
      <div className="mb-3 d-flex justify-content-end">
        <button className="btn" onClick={routeChange}>
          study break
        </button>
      </div>


      <div>
        <StyledCard>
        <div className="row p-2">
          <div className = "col-sm-6 custom-alignment">
          <div className={displayClass}>
            <StyledButton
              className="btn m-2 custom-shadow"
              id="answerbtn"
              onClick={getAnswer}
            >
              Answer
            </StyledButton>
          </div>
          </div>

          <div className = "col-sm-6 text-right">
          <div className={displayClass}>
            <StyledButton
              className="btn m-2 custom-shadow"
              id="newQbtn"
              onClick={newQuestion}
            >
              New Question
            </StyledButton>
          </div>
          </div>
        </div>
 
          <div className=" p-5">
            <p className="font-weight-bold">QUESTION: <span id="question">{question.question}</span></p>
            <hr></hr>
            <p className="font-italic">{answer}</p>
          </div>
        </StyledCard>

      </div>
    </div>
  );
}
