import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/API";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  background-color: #d5edfa;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  min-width: 85%;
  max-width: 600px;
  min-height: 100px;
  max-height: fit-content;
`;

export default function DBQuestion() {
  const [allQuestions, setAllQuestions] = useState([]);

  let navigate = useNavigate();
  const routeChangeHome = () => {
    let path = `/`;
    navigate(path);
  };
  const routeChangeNewQuestion = () => {
    let path = `/api/study`;
    navigate(path);
  };

  const getTheQuestions = async () => {
    try {
      const response = await getQuestions();
      if (!response.ok) {
        throw new Error("could not fetch your questions");
      }
      let data = await response.json();
      setAllQuestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteButton = async (_id) => {
    await fetch(`/api/study/${_id}`, {
      method: "DELETE",
    });
    const newQuestionList = allQuestions.filter((el) => el._id !== _id);
    setAllQuestions(newQuestionList);
  };

  useEffect(() => {
    getTheQuestions();
  }, []);

  return (
    <div className="container custom-margin question-container">
      {allQuestions.map((question, index) => (
        <StyledCard className=" m-2" id="questionId" key={index}>
          <div className="d-flex justify-content-end">
            <button
              id="delete-button"
              className="btn btn-link m-0 custom-color "
              onClick={() => deleteButton(question._id)}
            >
              &#x2715;
            </button>
          </div>
          <div className="d-none">
            <input
              colSpan="0"
              type="hidden"
              name="questionId"
              value={question._id}
            />
          </div>

          <p className="font-weight-bold">{question.question}</p>
          <p className="font-italic">
            <span className="font-weight-bold">answer: </span>
            {question.answer}
          </p>
          <div className="d-flex justify-content-end">
            <Link to={`/api/study/${question._id}`}>
              <button
                className="btn btn-link custom-color text-left p-0"
                value={question._id}
                id="something"
              >
                ✎
              </button>
            </Link>
          </div>
        </StyledCard>
      ))}
    </div>
  );
}
