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
//5. make the utent number variable
var utentNumber = parseInt(prompt("insert a number which you remember for the previous ones"));
//6. after 30 seconds 5 prompt will appear on the screen asking for the 5 numbers which the utent had seen
setTimeout(function(){
  while (utentNumber.lenght < 5) {
    if (utentNumber < min || utentNumber > max || isNaN(utentNumber)) {
      alert("insert a valid number")
    }
  }
},30000);

function myFunction() { alert('Hello'); }
