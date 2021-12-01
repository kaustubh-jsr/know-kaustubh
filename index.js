var readline = require('readline-sync');

let username = readline.question('What should I call you? ');

console.log(`Hello there ${username}. Welcome to 'Who is Kaustubh?'!!`);
let score = 0;
let scoreComment;
let quesAns = {
  q1: ['What is my favorite Superhero?','Spiderman'],
  q2 : ['Am I a Coffee/Chai/Bournvita person ?','Bournvita'],
  q3 : ['What country do I live in?', 'India']
}

for(let q in quesAns){
  a = readline.question(quesAns[q][0]);
  if(a===quesAns[q][1]){
    console.log('Correct');
    score += 1;
  }else{
    console.log('Incorrect');
  }
  console.log(`Your Score : ${score}`);
}

if(score===0){
  scoreComment = "You actually don't know Kaustubh";
}else if(score === 1){
  scoreComment = "You actually know something about Kaustubh";
}else{
  scoreComment = "You actually know Kaustubh";
}
console.log(scoreComment);