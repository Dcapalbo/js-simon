//1. make randomize numbers with a function
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//2. make some variables for the randomize numbers
var min = 1;
var max = 100;
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
// 5. make the utent number variable and an array with the numbers inside
var arrayUtentNumbers = [];
//6. 5 prompt will appear on the screen asking for the 5 numbers which the utent had seen
  while (arrayUtentNumbers.length < 5) {
    var utentNumber = parseInt(prompt("insert one of the 5 precedent numbers"));
    if (utentNumber < 1 || utentNumber > 100) {
      alert("insert a valid number");
    } else if (arrayUtentNumbers.includes(utentNumber)) {
      alert("number already inserted")
    } else {
      arrayUtentNumbers.push(utentNumber)
    }
  };
  console.log(arrayUtentNumbers);
