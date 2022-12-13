import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";
import "./styles.css";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #efe9e4;
  border-radius: 5px;
  height: 400px;
  box-shadow: 5px 7px 5px #888888;
  width: 75%;
`;
const CustomButton = styled.button`
  ${"" /* background-color: #D49B72; */}
`;

export default function Question() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayClass, setdisplayClass] = useState("d-none");

  const getQuestion = () => {
    setQuestion(QuestionList[Math.floor(Math.random() * QuestionList.length)]);
    // const startBtn = document.getElementById("startbtn");
    // startBtn.classList.add("d-none");
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

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <StyledCard>
          <div className=" p-5">
            <p className="font-weight-bold">QUESTION: {question.question}</p>
            <hr></hr>
            <p className="font-italic">{answer}</p>
          </div>
        </StyledCard>
        <div className="row d-flex justify-content-end p-2">
          <div className={displayClass}>
            <CustomButton
              className="btn btn-info m-2 custom-shadow"
              id="answerbtn"
              onClick={getAnswer}
            >
              Answer
            </CustomButton>
          </div>

          <div className={displayClass}>
            <CustomButton
              className="btn btn-info m-2 custom-shadow"
              id="newQbtn"
              onClick={newQuestion}
            >
              New Question
            </CustomButton>
          </div>
        </div>
        <button className="btn" onClick={routeChange}>
          stop studying
        </button>
      </div>
    </div>
  );
}
