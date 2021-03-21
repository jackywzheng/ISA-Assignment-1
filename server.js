const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(cors())
app.use(express.static("app"))

app.get('/', (req, res) => {
    res.json({
        message: "Assignment 1."
    })
});

require("./app/routes/question.routes.js")(app);

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})
