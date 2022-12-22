import React, { useState } from "react";
import { createQuestion } from "../utils/API";

export default function NewQuestion() {
  const [newquestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  });

  //  const createQuestion = ({ newquestion }) => {
  //   return fetch("/api/study", {
  //     method: "POST",
  //     body: JSON.stringify({ newquestion }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "question") {
      setNewQuestion({ ...newquestion, [name]: value });
    } else if (name === "answer") {
      setNewQuestion({ ...newquestion, [name]: value });
    }
    console.log(newquestion);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(newquestion);

    try {
      const response = await createQuestion({ newquestion });
      if (!response.ok) {
        throw new Error("something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
    // if (newquestion) {
    //   const response = fetch(`/api/study`, {
    //     method: "POST",
    //     body: JSON.stringify({ newquestion }),
    //     headers: {
    //       "Content-type": "applications/json",
    //     },
    //   });
    //   if (response.ok) {
    //     console.log("this is ok");
    //     document.location.replace(`/`);
    //   } else {
    //     alert("failed to create question");
    //   }
    // }
    // try {
    //   const response = createQuestion(newquestion);
    //   if (!response.ok) {
    //     throw new Error("could not add your question");
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <div>
      <h1>add question</h1>
      <input type="text" name="question" onChange={handleChange}></input>
      <br></br>
      <input type="text" name="answer" onChange={handleChange}></input>
      <button
        type="submit"
        className="btn custom-btn px-3"
        onClick={handleFormSubmit}
      >
        submit question
      </button>
    </div>
  );
}
