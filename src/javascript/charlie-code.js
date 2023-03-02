function addDiv() {
  var testElement = document.getElementById("test-element");
  console.log(testElement);
  var div = document.createElement("div");
  div.textContent = "Charlie Div";
  testElement.appendChild(div);
}

function logc() {
  console.log("charlie");
}
