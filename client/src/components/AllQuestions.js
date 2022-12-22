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
      <div>
        {allQuestions.map((question) => (
          <div key={question._id}>
            <div className="d-flex justify-content-around align-items-center m-2">
              <input type="hidden" name="questionID" value={question._id} />
              <p className="text-center">{question.question}</p>
              <button
                className="btn p-1"
                onClick={() => deleteButton(question._id)}
              ><small>x</small>
              </button>
              <button className="btn d-none">Update question</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
