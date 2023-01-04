import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/API";
import styled from "styled-components";

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

  const getTheQuestions = async () => {
    try {
      const response = await getQuestions();
      if (!response.ok) {
        throw new Error("could not fetch the gords");
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
      <div>
        {allQuestions.map((question) => (
          <div key={question._id}>
            <div className="d-flex justify-content-around align-items-center m-2">
              <input type="hidden" name="questionID" value={question._id} />
              <p className="text-center">{question.question}</p>
              <button
                className="btn p-1"
                onClick={() => deleteButton(question._id)}
              >
                <small>x</small>
              </button>
              <Link to={question._id}>
                <button className="btn">Update question</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <StyledButton className="btn" onClick={routeChangeHome}>
        Go Home
      </StyledButton>
    </div>
  );
}
