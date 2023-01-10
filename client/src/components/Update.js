import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getSingleQuestion } from "../utils/API";

export default function NewUpdate() {
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
    if(!response.ok) {
        throw new Error('could not get question ')
    }
    let data = await response.json();
    setForm(data);

} catch(err) {
    console.error(err);
}
}

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


  const routeChangeHome = () => {
    let path = `/`;
    navigate(path);
  };
useEffect(() => {
    getQuestionToEdit();
  }, []);

    return(
        <div>
            <h1>edits</h1>
            <form onSubmit={handleFormSubmit} autoComplete="off">
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label htmlFor="questionInput">Question</label>
                    <input
                      type="text"
                      id="questionInput"
                      className="form-control"
                      name="question"
                      value={form.question}
                      required
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
                      value={form.answer}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn custom-button m-2">
                  Save changes
                </button>
                <button className="btn custom-button m-2" onClick={routeChangeHome}>
          all questions
        </button>

              </form>
        </div>
    )
}