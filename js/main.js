//1. make randomize numbers with a function
function randomNumbers(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

//2. turn the random function into a variable
var min = 1;
var max = 100;
//3. make a cicle to create 5 randomize numbers for the utent
var arrayNumbers = [];
var i = 1
while (arrayNumbers.length < 5) {
  computerNumbers = randomNumbers(min, max);
  if (arrayNumbers.includes(computerNumbers) == false) {
    arrayNumbers.push(computerNumbers);
  }
};
console.log(computerNumbers);
//4. An alert appears to show 5 numbers to the utent
alert(computerNumbers);

//5.
