import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";

import { getRandomQuestion } from "../utils/API";

const StyledCard = styled.div`
  background-color: #d5edfa;
  border-radius: 5px;
  max-width: 600px;
  min-width: 90%;
  max-height: fit-content;
  min-height: 400px;
  box-shadow: 5px 7px 5px #888888;
  position: relative;
  justify-self: center;
`;

const StyledQuestion = styled.p`
  font-size: 1.1rem;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;
const StyledEditDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.75rem;
`;

const StyledQuestionText = styled.span``;
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

      <StyledContainer>
        <StyledCard className="img-fluid" id="styledCard">
          <div className="p-3">
            <StyledQuestion className="font-weight-bold">
              <StyledQuestionText id="question">
                {" "}
                {question.question}
              </StyledQuestionText>
            </StyledQuestion>
            <hr></hr>
            <div className="custom-card-spacing">
              <p className={answerDisplay}>{answer}</p>
            </div>
          </div>
          <StyledEditDiv>
            <Link to={`/api/study/${question._id}`}>
              <button
                className="p-2 btn btn-link"
                value={question._id}
                id="edit-question"
              >
                edit ✎
              </button>
            </Link>
          </StyledEditDiv>
        </StyledCard>
        <div className="row pt-3">
          <div className="col-sm-6 custom-alignment">
            <div className={displayClass}>
              <button
                className="btn custom-button mt-2"
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
                className="btn custom-button mt-2"
                id="newQbtn"
                onClick={getQuestion}
              >
                new question →
              </button>
            </div>
          </div>
        </div>
      </StyledContainer>
    </div>
  );
}
