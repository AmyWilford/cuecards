import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/API";
import NewQuestion from "./NewQuestion";

export default function Container() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [randomID, setrandomID] = useState([]);

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

  useEffect(() => {
    getTheQuestions();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <NewQuestion allQuestions={allQuestions} />
    </div>
  );
}
