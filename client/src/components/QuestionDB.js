import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/API";

export default function DBQuestion() {
  const [allQuestions, setAllQuestions] = useState([]);

  const getTheQuestions = async () => {
    try {
      const response = await getQuestions();
      console.log(response);
      if (!response.ok) {
        throw new Error("could not fetch the gords");
      }
      let data = await response.json();
      setAllQuestions(data);
      console.log(allQuestions);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTheQuestions();
  }, []);

  return (
    <div>
      <div className="row d-flex flex-wrap">
        {allQuestions.map((question) => (
          <div key={question._id} className="col-md-3 p-2">
            <p className="text-center">{question.question}</p>
            <input id="gordRating" type="number"></input>
          </div>
        ))}
      </div>
    </div>
  );
}
