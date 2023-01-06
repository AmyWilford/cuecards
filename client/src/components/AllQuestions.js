import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/API";
import styled from "styled-components";
import Update from "./Update";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  background-color: #ff7134;
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
    <div>
      <h3 className="display-5 text-center">Your Study Questions</h3>
      <div className="table-responsive-sm">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="w-25">
                Remove
              </th>
              <th scope="col" className="w-50">
                Question
              </th>
              <th scope="col" className="w-25">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {allQuestions.map((question, index) => (
              <tr id="questionId" key={index}>
                <td>
                  <button
                    className="btn p-1 btn-sm"
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
                  {/* <Link to="/update">
                    <button className="btn btn-sm" id="something" data-id = {question._id}>
                      <small>Edit</small>
                    </button>
                  </Link> */}
                  <Link to={`/api/study/${question._id}`} >
                    <button className="btn btn-sm editButton" value={question._id}id="something">
                      <small>Edit</small>
                    </button>
                  </Link>
                
                  {/* <button
                    type="button"
                    className="btn btn-sm"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    edit
                  </button> */}
                  <Update
                    questionId={question._id}
                    question={question.question}
                    answer={question.answer}
                    index = {index}
                  />
                </td>          
              </tr>

            ))}

          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end">
        <StyledButton className="btn" onClick={routeChangeNewQuestion}>
          Add Question
        </StyledButton>
      </div>
      <div className="d-flex justify-content-end">
        <StyledButton className="btn" onClick={routeChangeHome}>
          Go Home
        </StyledButton>
      </div>
    </div>
  );
}
