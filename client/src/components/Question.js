import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";

import { getRandomQuestion } from "../utils/API";

const StyledCard = styled.div`
  border-radius: 5px;
  min-height: 400px;
  box-shadow: 5px 7px 5px #888888;
`;

export default function Question() {
  // Set State for all questions (Fetched from database)

  // Set state for randomly generated question and answer
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayClass, setdisplayClass] = useState("d-none");
  const [answerDisplay, setAnswerDisplay] = useState("d-none");
  // let navigate = useNavigate();

  // Establish navigation route for study break button
  // const routeChange = () => {
  //   let path = `/`;
  //   navigate(path);
  // };

  // Function to get question from the database (using imported getQuestions from utils)
  const getQuestion = async () => {
    try {
      const response = await getRandomQuestion();
      if (!response.ok) {
        throw new Error("could not fetch your questions");
      }
      let data = await response.json();
      // This will hold all questions from the database
      setQuestion(data[0]);
      setdisplayClass("d-block");
      setAnswerDisplay("d-none");
    } catch (err) {
      console.error(err);
    }
  };

  // Get answer
  const getAnswer = (event) => {
    setdisplayClass("d-block");
    setAnswerDisplay("d-block");
    setAnswer(question.answer);
    console.log(answer);
  };

  // UseEffect to get all questions on initial page load
  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="container custom-container-margin">
      {/* <div className="mb-3 d-flex justify-content-end">
        <button className="btn" onClick={routeChange}>
          study break
        </button>
      </div> */}

      <div>
        <StyledCard className="cuecard img-fluid">
          <div className="d-flex justify-content-end">
            <Link to={`/api/study/${question._id}`}>
              <span
                className="p-2"
                value={question._id}
                id="something"
              >
                edit
              </span>
            </Link>
          </div>

          <div className="pt-2">
            <p className="font-weight-bold">
              QUESTION: <span id="question">{question.question}</span>
            </p>
            <div className="custom-card-spacing">
              <p className={answerDisplay}>{answer}</p>
            </div>
          </div>
        </StyledCard>
      </div>

      <div className="row pt-3">
        <div className="col-sm-6 custom-alignment">
          <div className={displayClass}>
            <button
              className="btn custom-button btn-sm mt-2"
              id="answerbtn"
              onClick={getAnswer}
            >
              see answer
            </button>
          </div>
        </div>

        <div className="col-sm-6 text-right">
          <div className={displayClass}>
            <button
              className="btn custom-button btn-sm mt-2"
              id="newQbtn"
              onClick={getQuestion}
            >
              new question 〉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
