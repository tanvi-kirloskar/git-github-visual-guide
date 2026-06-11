const questions = [

{
question:"Which command initializes a Git repository?",
answers:[
"git push",
"git init",
"git commit",
"git clone"
],
correct:1
},

{
question:"Which command checks the current repository status?",
answers:[
"git status",
"git push",
"git merge",
"git add"
],
correct:0
},

{
question:"Which command stages files?",
answers:[
"git log",
"git add .",
"git pull",
"git fetch"
],
correct:1
},

{
question:"Which command creates a snapshot?",
answers:[
"git push",
"git commit -m 'msg'",
"git status",
"git checkout"
],
correct:1
},

{
question:"Which command uploads code to GitHub?",
answers:[
"git add",
"git clone",
"git push",
"git init"
],
correct:2
},

{
question:"Which command downloads changes from GitHub?",
answers:[
"git pull",
"git add",
"git branch",
"git log"
],
correct:0
},

{
question:"Which command copies a repository locally?",
answers:[
"git clone",
"git commit",
"git merge",
"git push"
],
correct:0
},

{
question:"Which command displays commit history?",
answers:[
"git add",
"git fetch",
"git log",
"git pull"
],
correct:2
},

{
question:"Which command shows all branches?",
answers:[
"git branch",
"git stash",
"git reset",
"git push"
],
correct:0
},

{
question:"Which command combines branches?",
answers:[
"git merge",
"git add",
"git log",
"git clone"
],
correct:0
}

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");

function loadQuestion(){

let q = questions[currentQuestion];

questionEl.innerText = q.question;

answersEl.innerHTML = "";

q.answers.forEach((answer,index)=>{

const btn = document.createElement("button");

btn.innerText = answer;

btn.classList.add("quiz-btn");

btn.onclick = ()=>checkAnswer(index);

answersEl.appendChild(btn);

});

}

function checkAnswer(selected){

let correct = questions[currentQuestion].correct;

const buttons =
document.querySelectorAll(".quiz-btn");

buttons.forEach((btn,index)=>{

btn.disabled = true;

if(index===correct){

btn.style.background="#238636";

}

else if(index===selected){

btn.style.background="#da3633";

}

});

if(selected===correct){

score++;

scoreEl.innerText = score;

}

}

document.getElementById("nextBtn")
.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion>=questions.length){

questionEl.innerHTML=
`🏆 Quiz Complete!<br><br>Your Score: ${score}/${questions.length}`;

answersEl.innerHTML="";

document.getElementById("nextBtn").style.display="none";

return;
}

loadQuestion();

});

loadQuestion();