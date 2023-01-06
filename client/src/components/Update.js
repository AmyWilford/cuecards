import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Update(props) {
    // console.log(props)
  const [formState, setFormState] = useState({
    questionId: `${props.questionId}`,
    question: `${props.question}`,
    answer: `${props.answer}`,
  });

 
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    const response = { ...formState };
    console.log(response);
    await fetch("/api/study/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    }).catch((err) => {
      console.log(err);
      return;
    });
    navigate("/allquestions");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState.question);
    console.log(formState.answer);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmit} autoComplete="off">
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <input
                      type="hidden"
                      className="form-control"
                      name="questionId"
                      id="inputFirstName"
                      value={formState.questionId}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label htmlFor="questionInput">Question</label>
                    <input
                      type="text"
                      id="questionInput"
                      className="form-control"
                      name="question"
                      value={formState.question}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label htmlFor="answerInput">Answer</label>
                    <input
                      type="text"
                      className="form-control"
                      name="answer"
                      id="answerInput"
                      value={formState.answer}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
              {/* <button type="submit" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
