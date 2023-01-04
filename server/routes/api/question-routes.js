const router = require("express").Router();
const {
  getQuestions,
  getSingleQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getRandomQuestion,
} = require("../../controllers/questionController");

router.route("/").get(getQuestions).post(createQuestion);
router.route("/random").get(getRandomQuestion);
router.route("/update").put(updateQuestion);

router
  .route("/:questionId")
  .get(getSingleQuestion)
  .delete(deleteQuestion)
  .put(updateQuestion);

module.exports = router;
