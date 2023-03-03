function addDiv() {
  var testElement = document.getElementById("test-element");
  console.log(testElement);
  var div = document.createElement("div");
  div.textContent = "Charlie Div";
  testElement.appendChild(div);
}

function logc(paramter1, paramter2) {
  var space = " ";
  console.log(paramter1 + space + paramter2);
}
