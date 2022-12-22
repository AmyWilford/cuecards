const { Question } = require("../models");

module.exports = {
  // get all questions
  getQuestions(req, res) {
    Question.find()
      .then((questions) => res.json(questions))
      .catch((err) => res.status(err));
  },
  //get single questions
  getSingleQuestion(req, res) {
    Question.findOne({ _id: req.params.questionId })
      .then((question) => {
        !question
          ? res.status(404).json({ message: "Could not find your question" })
          : res.json(question);
      })
      .catch((err) => res.status(500).json(err));
  },
  // create single question
  createQuestion(req, res) {
    console.log("working!");
    Question.create(req.body)
      .then((questionData) => res.json(questionData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Update a question
  updateQuestion(req, res) {
    Question.findOneAndUpdate(
      { _id: req.params.questionId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((question) => {
        !question
          ? res
              .status(404)
              .json({ message: "Invalid ID could not update question" })
          : res.json(question);
      })
      .catch((err) => res.status(500).json(err));
  },
  //   delete a question
  deleteQuestion(req, res) {
    Question.findByIdAndRemove({ _id: req.params.questionId })
      .then((question) =>
        !question
          ? res.status(404).json({ message: "Could not delete question" })
          : res.json({ message: "Thought has been deleted" })
      )
      .catch((err) => res.status(500).json(err));
  // deleteQuestion(req, res) {
  //   Question.findOneAndRemove({ _id: req.params.questionId })
  //     .then((question) =>
  //       !question
  //         ? res.status(404).json({ message: "Could not delete question" })
  //         : res.json({ message: "Thought has been deleted" })
  //     )
  //     .catch((err) => res.status(500).json(err));
  },
};
