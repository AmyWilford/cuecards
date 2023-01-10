import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getSingleQuestion } from "../utils/API";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #FFE477;
  border-radius: 5px;
  min-height: 400px;
  box-shadow: 5px 7px 5px #888888;
  padding: 1rem;
`;

export default function Update() {
  const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const id = params.id.toString();
  const getQuestionToEdit = async () => {
    try {
      const response = await getSingleQuestion(id);
      if (!response.ok) {
        throw new Error("could not get question ");
      }
      let data = await response.json();
      setForm(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = { ...form };
    console.log(response);
    await fetch(`/api/study/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    }).catch((err) => {
      console.log(err);
      return;
    });
    navigate("/");
  };

  const routeChangeStudy = () => {
    let path = `/study`;
    navigate(path);
  };
  useEffect(() => {
    getQuestionToEdit();
  }, []);

  return (
    <div className="container">
      <StyledContainer>
        <form className="p-2" onSubmit={handleFormSubmit} autoComplete="off">
          <p>Did you see a mistake? Update your study card to keep your studying on track.</p>
          <div >
            <div className="form-group">
              <label htmlFor="updatequestionInput">Question</label>
              <input
                type="text"
                id="updatequestionInput"
                className="form-control input-sm custom-input-size"
                name="question"
                value={form.question}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="answerInput">Answer</label>
              <textarea
                type="text"
                className="form-control custom-input-size"
                name="answer"
                id="answerInput"
                value={form.answer}
                required
                rows="4"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
          <button type="submit" className="btn custom-button m-2 text-white">
            ✓
          </button>
          <button className="btn custom-button m-2" onClick={routeChangeStudy}>
            keep studying
          </button>
          </div>
          
        </form>
      </StyledContainer>
    </div>
  );
}
