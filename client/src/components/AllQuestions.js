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
  min-width: 90%;
  max-width: 600px;
  min-height: 100px;
  max-height: fit-content;
`;

const StyledContainer = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDeleteButton = styled.button`
  background-color: white;
  opacity: 0.5;
  padding: 2px 6px !important;
  border-radius: 50%;
  font-size: 0.75rem;
  color: #373636;

  &:hover {
    background-color: white;

    opacity: 1;
  }
`;

const StyledEditButton = styled.button`
  color: #373636;
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
    <StyledContainer className="container">
      {allQuestions.map((question, index) => (
        <StyledCard className=" m-2" id="questionId" key={index}>
          <div className="d-flex justify-content-end">
            <StyledDeleteButton
              // id="delete-button"
              className="btn btn-link m-0"
              onClick={() => deleteButton(question._id)}
            >
              &#x2715;
            </StyledDeleteButton>
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
              <StyledEditButton
                className="btn btn-link custom-color text-left p-0"
                value={question._id}
              >
                ✎
              </StyledEditButton>
            </Link>
          </div>
        </StyledCard>
      ))}
    </StyledContainer>
  );
}
