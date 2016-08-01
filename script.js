
var sevenbutton = document.getElementById("sevenbutton");
var eightbutton = document.getElementById("eightbutton");
var ninebutton = document.getElementById("ninebutton");
var fourbutton = document.getElementById("fourbutton");
var fivebutton = document.getElementById("fivebutton");
var sixbutton = document.getElementById("sixbutton");
var onebutton = document.getElementById("onebutton");
var twobutton = document.getElementById("twobutton");
var threebutton = document.getElementById("threebutton");
var zerobutton = document.getElementById("zerobutton");
var equalbutton = document.getElementById("equalbutton");
var addbutton = document.getElementById("addbutton");
var subtractbutton = document.getElementById("subtractbutton");
var dividebutton = document.getElementById("dividebutton");
var multiplybutton = document.getElementById("multiplybutton");
var clearbutton = document.getElementById("clearbutton");

var allnumbers = [];

sevenbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "7";
  allnumbers.push(7);
});

eightbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "8";
  allnumbers.push(8);
});

ninebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "9";
  allnumbers.push(9);
});

fourbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "4";
  allnumbers.push(4);
});

fivebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "5";
  allnumbers.push(5);
});

sixbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "6";
  allnumbers.push(6);
});

onebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "1";
  allnumbers.push(1);
});

twobutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "2";
  allnumbers.push(2);
});

threebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "3";
  allnumbers.push(3);
});

zerobutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "0";
});

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
  document.getElementById("screen").value = result;
});

clearbutton.addEventListener("click", function(event){
  document.getElementById("screen").value = "";
  allnumbers = [];
});
