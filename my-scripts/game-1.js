//vabibles

function updateHTML() {
  document.getElementById('locationForHTML').innerHTML = Date()
}

console.log("Hello");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, -2, 1 * Math.PI);
ctx.stroke();

function clickMe() {
  console.log("Me");
  saveStuff("Hello");
}

// Retrieve your data from locaStorage
var saveData = JSON.parse(localStorage.saveData || null) || {};

// Store your data.
function saveStuff(obj) {
  saveData.obj = obj;
  // saveData.foo = foo;
  saveData.time = new Date().getTime();
  localStorage.saveData = JSON.stringify(saveData);
}

// Do something with your data.
function loadStuff() {
  return saveData.obj || "default";
}
