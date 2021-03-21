
{/* <form name="questionform">
<input type="text" id="question" />
<p>Answers</p>
<input type="radio" checked="checked" name="choices" id="a"><input type="text" id="a_answer"><br>
<input type="radio" name="choices" id="b"><input type="text" id="b_answer"><br>
<input type="radio" name="choices" id="c"><input type="text" id="c_answer"><br>
<input type="radio" name="choices" id="d"><input type="text" id="d_answer"><br>
</form> */}

let all;

// XHTTP stuff
const xhttp = new XMLHttpRequest();
const endPointRoot = "http://localhost:3000/API/v1/"

async function get() {
  xhttp.open("GET", endPointRoot + "questions", true)
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        loadQuiz(this.responseText);
        all = JSON.parse(this.responseText);
    }
  }
}

function loadQuiz(all_questions) {
    all_questions = JSON.parse(all_questions)
    console.log(all_questions)
    for (let i = 0; i < all_questions.length; i++) {
        // Get and parse JSON

        let quizQuestion = all_questions[i];
        console.log(quizQuestion)

        // Get and create question element
        let question = document.createElement("p");
        question.innerHTML = quizQuestion.content;
        document.getElementById("quiz").appendChild(question);

        // Get and create answer elements
        // Should prob use another loop here, but we'll have to change our JSON schema to make it easy to loop (i.e. array or answers {1: answer1, 2: answer2, etc...})
        let break1 = document.createElement("br");
        let break2 = document.createElement("br");
        let break3 = document.createElement("br");
        let break4 = document.createElement("br");

        let a_span = document.createElement("span");
        a_span.id = "a_answer" + i.toString();
        a_span.className = "quizChoice";
        let a_answer = document.createElement("input");
        a_answer.type = "radio";
        a_answer.name = i.toString();
        a_answer.value = "a_answer"
        let answer_a_label = document.createElement("label");
        answer_a_label.innerHTML = quizQuestion.answer_1;
        a_span.appendChild(a_answer);
        a_span.appendChild(answer_a_label);
        document.getElementById("quiz").appendChild(a_span);
        document.getElementById("quiz").appendChild(break1);
        
        let b_span = document.createElement("span");
        b_span.id = "b_answer" + i.toString();
        b_span.className = "quizChoice";
        let b_answer = document.createElement("input");
        b_answer.type = "radio";
        b_answer.name = i.toString();
        b_answer.value = "b_answer"
        let answer_b_label = document.createElement("label");
        answer_b_label.innerHTML = quizQuestion.answer_2;
        b_span.appendChild(b_answer);
        b_span.appendChild(answer_b_label);
        document.getElementById("quiz").appendChild(b_span);
        document.getElementById("quiz").appendChild(break2);

        let c_span = document.createElement("span");
        c_span.id = "c_answer" + i.toString();
        c_span.className = "quizChoice";
        let c_answer = document.createElement("input");
        c_answer.type = "radio";
        c_answer.name = i.toString();
        c_answer.value = "c_answer"
        let answer_c_label = document.createElement("label");
        answer_c_label.innerHTML = quizQuestion.answer_3;
        c_span.appendChild(c_answer);
        c_span.appendChild(answer_c_label);
        document.getElementById("quiz").appendChild(c_span);
        document.getElementById("quiz").appendChild(break3);

        let d_span = document.createElement("span");
        d_span.id = "d_answer" + i.toString();
        d_span.className = "quizChoice";
        let d_answer = document.createElement("input");
        d_answer.type = "radio";
        d_answer.name = i.toString();
        d_answer.value = "d_answer"
        let answer_d_label = document.createElement("label");
        answer_d_label.innerHTML = quizQuestion.answer_4;
        d_span.appendChild(d_answer);
        d_span.appendChild(answer_d_label);
        document.getElementById("quiz").appendChild(d_span);
        document.getElementById("quiz").appendChild(break4);
    }
}

get();

function submit() {
    let answers;
    let correctAnswer;
    let score = 0;
    for (let i = 0; i < all.length; i++) {
        answers = document.getElementsByName(i.toString());
        correctAnswer = all[i].correct;
        for (let j = 0; j < answers.length; j++) {
            if (answers[j].checked && answers[j].value == correctAnswer) {
                score++;
            }
        }
        document.getElementById(correctAnswer + i.toString()).style.backgroundColor = "green";
        console.log(correctAnswer + i.toString());
    }
    document.getElementById("score").innerHTML = "Your results: " + score + " / " + all.length;
}