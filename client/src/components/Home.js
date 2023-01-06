import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lightbulb from "../assets/lightbulb.png";

// const StyledDiv = styled.div`
//   margin-top: 50vh;

// `
const StyledButton = styled.button`
  background-color: #ff7134;
  color: #fff1e1;
  border: none;
  margin: 0 5rem 1rem 5rem;
`;

export default function Home() {
  let navigate = useNavigate();
  const routeChangeStudy = () => {
    let path = `/study`;
    navigate(path);
  };

  const routeChangeAllQuestions = () => {
    let path = `/allquestions`;
    navigate(path);
  };

  const routeChangeNewQuestion = () => {
    let path = `/api/study`;
    navigate(path);
  };

  return (
    <div className="row d-flex flex-column align-content-center mt-5">
      <div className="my-5">
        <img src={lightbulb} alt="lighbulb graphic"></img>
      </div>

      <button className="btn custom-button m-2" onClick={routeChangeStudy}>
        start studying
      </button>
      <button className="btn custom-button m-2"  onClick={routeChangeAllQuestions}>
        view all questions
      </button>
      <button className="btn custom-button m-2" onClick={routeChangeNewQuestion}>
        add new question
      </button>
    </div>
  );
}
