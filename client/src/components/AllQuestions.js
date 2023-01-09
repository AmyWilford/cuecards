import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/API";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  background-img: #ff7134;
  color: #fff1e1;
  border: none;
  margin: 0 5rem 1rem 5rem;
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
    <div className="container mt-5 custom-margin">
      <h3 className="display-5 text-center">Question Index</h3>
      <div className="d-flex justify-content-end">
      <button
          className="btn custom-button m-2 "
          onClick={routeChangeHome}
        >
          Go Home
        </button>
      </div>
      
      <div className="table-responsive-sm">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="custom-col-width-delete text-uppercase">
              </th>
              <th scope="col" className="custom-col-width-question text-uppercase">
              Question
              </th>
              <th
                scope="col"
                className="custom-col-width-edit text-uppercase"
              >Edit</th>
            </tr>
          </thead>
          <tbody>
            {allQuestions.map((question, index) => (
              <tr id="questionId" key={index}>
              <td>
                  <button
                    className="btn btn-link p-1 text-danger" 
                    onClick={() => deleteButton(question._id)}
                  >
                    <small>x</small>
                  </button>
                </td>
                <td className="d-none">
                  <input
                    colSpan="0"
                    type="hidden"
                    name="questionId"
                    value={question._id}
                  />
                </td>
                <td>{question.question}</td>
                <td>
                  <Link to={`/api/study/${question._id}`}>
                    <button
                      className="btn editButton"
                      value={question._id}
                      id="something"
                    >edit
                    </button>
                  </Link>
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end">
        <button
          className="btn custom-button m-2sm"
          onClick={routeChangeNewQuestion}
        >
          Add Question
        </button>
      </div>
    </div>
  );
}
