var chalk = require("chalk");
console.log(`------------${chalk.yellow("Himanshu's QUIZ")}------------`);
console.log("Hey !!! DO YOU REALLY know Himanshu Rana");
var readLineSync = require("readline-sync");

var user = readLineSync.question("What Is Your Name ? ");
console.log(" ");

console.log("WELCOME ",user,"to the QUIZ");
var score =0;

var questions = [
  {
    question:"Where does he live? ",
    answer:"ghaziabad"
  },
  {
    question:"Which sport he likes most? ",
    answer:"football"
  },
  {
    question:"What is his favourite food ? ",
    answer:"butter chicken"
  },
  {
    question:"Which is his favourite song ? ",
    answer:"teri hogaiyaan"
  },
  {
    question:"what was his last outing for adventure ? ",
    answer:"mussorie"
  },
  {
    question:"Does he workout?",
    answer:"yes"
  },
  
]
function play(question,answer)
{
  var currentAnswer = readLineSync.question(question);
  if(currentAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.green.inverse.bold("right"));
    score += 1;
    console.log(`${chalk.greenBright("score")}:`,chalk.greenBright(score));
  }
  else
  {
    console.log(chalk.inverse.red.bold("wrong"))
    console.log(`${chalk.greenBright("score")}:`,chalk.greenBright(score));
  }

  console.log("--------------------")

}

for(var i=0;i<questions.length;i++)
{
  currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("<<<<<----------End Quiz---------->>>>>");
console.log("");
console.log(`Hey ${chalk.bgGreen.black.bold(user)} you scored : ${score} out of 6 !!!! YOU ARE AMAZING !`);