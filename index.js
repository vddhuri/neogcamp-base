var readlinesync = require('readline-sync')

var score =0
function checkAnswer(question,answer){
  if(question===answer){
    score+=1
  }
}

const highScores={
  Chirag:2,
  Yash:1
}

function CheckScore(score){
  var scoreCheck=false
  for (var key in highScores){
    if(highScores[key]>parseInt(score)){
      scoreCheck=true
    }
  
  }
   if(scoreCheck==false){
    console.log("Hurray youre the top scorer")
  } 
}


var myInfo={birthdayMonth:"may",favourate_colour:"blue",age:'22'}
for (var key in myInfo){
  checkAnswer(readlinesync.question(`what is my `+key),myInfo[key])
}

console.log(`your score is` +score)

CheckScore(score)