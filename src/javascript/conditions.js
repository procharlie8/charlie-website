var charlie = true;
if (charlie) {
  console.log("hello charlie");
}

var number = 0;
var isNumberGreaterThan5 = number > 5;
if (isNumberGreaterThan5) {
  console.log("number is greater than 5");
} else if (number > 0) {
  console.log("number is less than 5 and more than 0");
} else {
  console.log("number is 0 or less than 0");
}

console.log("The value of number is:", number);
