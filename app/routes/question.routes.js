module.exports = app => {
    const questions = require("../controllers/question.controller.js");
  
    // Create a new Question
    app.post("/API/v1/questions", questions.create);
  
    // Retrieve all Questions
    app.get("/API/v1/questions", questions.findAll);
  
    // Update a Question with QuestionContent
    app.put("/API/v1/questions", questions.update);
};