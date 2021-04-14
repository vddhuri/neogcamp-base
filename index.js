var readlinesync = require('readline-sync')

var score =0
function checkAnswer(question,answer){
  if(question===answer){
    score+=1
  }
}
var myInfo={birthdayMonth:"may",favourate_colour:"blue",age:'22'}
for (var key in myInfo){
  checkAnswer(readlinesync.question(`what is my `+key),myInfo[key])
}

console.log(`your score is` +score)
