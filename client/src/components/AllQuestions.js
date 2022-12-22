import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/API";

export default function DBQuestion() {
  const [allQuestions, setAllQuestions] = useState([]);

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
      <div className="row d-flex flex-wrap">
        {allQuestions.map((question) => (
          <div key={question._id} className="col-md-3 p-2">
            <input type="hidden" name="questionID" value={question._id} />
            <p className="text-center">{question.question}</p>
            <button onClick={() => deleteButton(question._id)}>
              remove questions
            </button>
            <button>Update question</button>
          </div>
        ))}
      </div>
    </div>
  );
}
