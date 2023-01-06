// Get all Questions
export const getQuestions = () => {
  return fetch("/api/study", {
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(questionData),
  });
};

// Get Single Question
export const getSingleQuestion = (questionId) => {
  console.log()
  return fetch(`/api/study/${questionId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(questionData)
  });
};

export const getRandomQuestion = () => {
  return fetch(`api/study/random`, {
    headers: {
      "Content-Type": "applications/json",
    },
  });
}
// Add Single Question
export const createQuestion = ({ newquestion }) => {
  return fetch("/api/study", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newquestion }),
  });
};

// Update Single Question
export const updateQuestion = (questionId, questionData) => {
  return fetch(`/api/study/${questionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      questionId,
      questionData,
    }),
  });
};

// Delete Single Question
export const deleteQuestion = (questionId) => {
  return fetch(`/api/study/${questionId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

