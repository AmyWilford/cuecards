const db = require("../config/connection");
const { Question } = require("../models");

const questionData = require("./questionData.json");

db.once("open", async () => {
  await Question.deleteMany({});
  await Question.collection.insertMany(questionData);

  console.log("all done!");
  console.table(questionData);
  process.exit(0);
});
