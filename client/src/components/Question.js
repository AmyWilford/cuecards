import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";

// import { getQuestions } from "../utils/API";
import { getRandomQuestion } from "../utils/API";

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
  // Set State for all questions (Fetched from database)

  // const [allQuestions, setAllQuestions] = useState([]);
  // Set state for randomly generated question and answer
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayClass, setdisplayClass] = useState("d-none");
  let navigate = useNavigate();

  // Establish navigation route for study break button
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

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
      console.log(question)
      // setQuestion(
      //   allQuestions[Math.floor(Math.random() * allQuestions.length)]
      // );
      setdisplayClass("d-block");
    } catch (err) {
      console.error(err);
    }
  };

  // From the list of all questions, get
  // const getQuestion = async () => {
  //   console.log(allQuestions);
  //   setQuestion(allQuestions[Math.floor(Math.random() * allQuestions.length)]);
  //   let questionId = question._id;
  //   console.log(questionId);
  //   // setAnswer(question.answer);
  //   // setdisplayClass("d-block");
  //   // return question;
  // };

  // Get answer
  const getAnswer = (event) => {
    setdisplayClass("d-block");
    setAnswer(question.answer);
    console.log(answer);
  };

  // Get a new question on new question button press
  // const newQuestion = () => {
  //   setQuestion("");
  //   setAnswer("");
  //   // setQuestion(allQuestions[Math.floor(Math.random() * allQuestions.length)]);
  // };
  // UseEffect to get all questions on initial page load
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
            <div className="col-sm-6 custom-alignment">
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

            <div className="col-sm-6 text-right">
              <div className={displayClass}>
                <StyledButton
                  className="btn m-2 custom-shadow"
                  id="newQbtn"
                  onClick={getQuestion}
                >
                  New Question
                </StyledButton>
              </div>
            </div>
          </div>

          <div className=" p-5">
            <p className="font-weight-bold">
              QUESTION: <span id="question">{question.question}</span>
            </p>
            <hr></hr>
            <p className="font-italic">{answer}</p>
          </div>
        </StyledCard>
      </div>
    </div>
  );
}
