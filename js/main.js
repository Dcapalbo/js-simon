//1. make randomize numbers with a function
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//2. make some variables for the randomize numbers
let min = 1;
let max = 100;
//3. make a cicle to create 5 randomize numbers for the utent
var arrayNumbers = [];
while (arrayNumbers.length < 5) {
  var computerNumbers = randomNumbers(min, max);
  if (arrayNumbers.includes(computerNumbers) == false) {
    arrayNumbers.push(computerNumbers)
  }
};
console.log(arrayNumbers);
//4. An alert appears to show 5 numbers to the utent
alert(arrayNumbers);
//5. make an array with the numbers inside
const arrayUtentNumbers = [];
//6. make a timefunction which waits 3 seconds before to show the prompt to the utent
setTimeout(function() {
  //7. make a while cicle to save into an array the utent numbers
  while (arrayUtentNumbers.length < 5) {
    var utentNumber = parseInt(prompt("insert one of the 5 precedent numbers"));
    if (utentNumber < min || utentNumber > max) {
      alert("insert a valid number");
    } else if (arrayUtentNumbers.includes(utentNumber)) {
      alert("number already inserted")
    } else {
      arrayUtentNumbers.push(utentNumber)
    }
  };
  console.log(arrayUtentNumbers);
  //8. make a variable for the utent score
  var score = 0;
  //9. make a for cicle to find the numbers which the utent had inserted correctly
  for (var i = 0; i < arrayUtentNumbers.length; i++) {
    if (arrayNumbers.includes(arrayUtentNumbers[i])) {
      score += arrayNumbers.includes(arrayUtentNumbers[i]);
    }
  };
  console.log(score);
  //10. if the numbers are inside of the array, send an alert which says the score of the utent
  alert("Your score is:" + score);
}, 3000);
