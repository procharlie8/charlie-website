function addDiv() {
  var testElement = document.getElementById("test-element");
  console.log(testElement);
  var div = document.createElement("div");
  div.textContent = "Charlie Div";
  testElement.appendChild(div);
  // variables are places to store values
  var sillyPussy1 = "Cats";
  var sillyPussy2 = "Meowing";
  logc(sillyPussy1, sillyPussy2);
  logc(sillyPussy1, sillyPussy2);
}

// a function is a place for code to run.
function logc(paramter1, paramter2) {
  var space = " ";
  console.log(paramter1 + space + paramter2);
}
