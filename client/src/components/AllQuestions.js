import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/API";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  background-color: #ffe477;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
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
    <div className="container custom-margin">
      {/* <div className="">
        <table className="table borderless table-responsive-sm">
          <thead>
            <tr className="borderless">
              <th scope="col" className="custom-col-width-delete text-uppercase">
              </th>
              <th scope="col" className="custom-col-width-question text-uppercase">
              Study Cards
              </th>
              <th
                scope="col"
                className="custom-col-width-edit text-uppercase"
              >Edit</th>
            </tr>
          </thead>
          <tbody> */}
      {allQuestions.map((question, index) => (
        <StyledCard className="row m-2" id="questionId" key={index}>
          <div className="col-sm-2 d-flex flex-column ">
            <button
              className=" btn btn-link p-0 m-0 custom-color text-left"
              onClick={() => deleteButton(question._id)}
            >
              ✖
            </button>
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
          {/* <div className="col-sm-2">
                 
                </div> */}
          <div className="d-none">
            <input
              colSpan="0"
              type="hidden"
              name="questionId"
              value={question._id}
            />
          </div>
          <div className="col-sm-9">
            <p>
              <span className="font-weight-bold">question: </span>
              {question.question}
            </p>
            <p className="font-italic">
              <span className="font-weight-bold">answer: </span>
              {question.answer}
            </p>
          </div>
        </StyledCard>
      ))}
      {/* </tbody>
        </table>
      </div> */}
      {/* <div className="d-flex justify-content-end">
        <button
          className="btn custom-button m-2sm"
          onClick={routeChangeNewQuestion}
        >
          Add Question
        </button>
      </div> */}
    </div>
  );
}
