

var equalbutton = document.getElementById("equalbutton");
var addbutton = document.getElementById("addbutton");
var subtractbutton = document.getElementById("subtractbutton");
var dividebutton = document.getElementById("dividebutton");
var multiplybutton = document.getElementById("multiplybutton");
var clearbutton = document.getElementById("clearbutton");

var allnumbers = [];

var numbers = document.querySelectorAll(".number");

for (var i = 0;i < numbers.length;i++) {
  numbers[i].addEventListener("click", function(event){
    var valueAsInteger = parseInt(event.target.value);
    allnumbers.push(valueAsInteger);
    document.getElementById("screen").value += event.target.value;
  })
};

addbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "+";
  allnumbers.push("+");
});

subtractbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "-";
  allnumbers.push("-");
});

dividebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "/";
  allnumbers.push("/");
});

multiplybutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "*";
  allnumbers.push("*");
});

equalbutton.addEventListener("click", function(event){
  var a = allnumbers[0];
  var b = allnumbers[2];
  if (allnumbers[1] === "+") {
    var result = a + b;
  } else if (allnumbers[1] === "-") {
    var result = a - b;
  } else if (allnumbers[1] === "/") {
    var result = a / b;
  } else if (allnumbers[1] === "*") {
    var result = a * b;
  }
  console.log(allnumbers);
  document.getElementById("screen").value = result;
});

clearbutton.addEventListener("click", function(event){
  document.getElementById("screen").value = "";
  allnumbers = [];
});
