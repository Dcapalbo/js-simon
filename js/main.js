//1. make randomize numbers with a function
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//2. make variable for the random numbers
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
console.log(computerNumbers);
//4. An alert appears to show 5 numbers to the utent
alert(computerNumbers);
//5.
