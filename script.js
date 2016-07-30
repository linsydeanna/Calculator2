
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
});

eightbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "8";
});

ninebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "9";
});

fourbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "4";
});

fivebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "5";
});

sixbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "6";
});

onebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "1";
});

twobutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "2";
});

threebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "3";
});

zerobutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "0";
});

addbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "+";
});

subtractbutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "-";
});

dividebutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "/";
});

multiplybutton.addEventListener("click", function(event){
  document.getElementById("screen").value += "*";
});

equalbutton.addEventListener("click", function(event){
  allnumbers = eval(document.getElementById("screen").value);
  document.getElementById("screen").value = allnumbers
  console.log(allnumbers);
});

clearbutton.addEventListener("click", function(event){
  document.getElementById("screen").value = "";
  allnumbers = [];
});
