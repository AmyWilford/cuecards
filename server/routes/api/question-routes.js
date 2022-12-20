const router = require("express").Router();
const {
  getQuestions,
  getSingleQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../../controllers/questionController");

router.route("/").get(getQuestions).post(createQuestion);
router.route('/:questionId').get(getSingleQuestion).delete(deleteQuestion).put(updateQuestion);

module.exports = router;
