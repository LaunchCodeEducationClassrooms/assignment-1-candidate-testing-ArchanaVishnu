const input = require('readline-sync');
let i;
let nCorrect=0;
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American women in space?"; 
let correctAnswer="Sally Ride";
let candidateAnswer="";
let questions=["Who was the first American women in space?",
"True or false: 5000 meters = 5 kilometers.",
"(5 + 3)/2 * 10 = ?",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
"What is the minimum crew size for the ISS?"];
let correctAnswers=["Sally Ride",
"True","40","Trajectory","3"];
let candidateAnswers=[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName=input.question("Enter your name :");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i=0;i<questions.length;i++)
  {
    candidateAnswers[i]=input.question(questions[i]);
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 /* if(candidateAnswer===correctAnswer)
  {
    console.log("Your answer is correct!!");
  }
  else
  {
    console.log("Your answer is wrong!!");
  }*/

  for(i=0;i<questions.length;i++)
  {
    let j=i+1;

    console.log(`${j}) ${questions[i]} 
    Your answer :${candidateAnswers[i]}
    Correct answer :${correctAnswers[i]}`);

    if(candidateAnswers[i].toUppercase==correctAnswers[i].toUppercase)
    {
      nCorrect= nCorrect+1;
    }
    
  }

  let grade;
  
  grade=(nCorrect/questions.length)*100;



  console.log(">>> Overall Grade : "+grade+"% ("+nCorrect+" out of"+candidateAnswers.length+" responses are correct)");
  if(grade>=80)
    console.log(">>> Status : Passed <<<");
  else  
    console.log(">>> Status : Failed <<<");
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hi "+candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};