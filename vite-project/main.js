import "./style.css";

const points = [];

document.getElementById("response").innerHTML = points;

function myFunction() {
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("response").innerHTML = points[0];
  document.getElementById("response").style.fontSize = "18px";
  setTimeout(timeup, 4000);
}

function timeup() {
  document.getElementById("response").innerHTML = "8";
  document.getElementById("response").style.fontSize = "120px";
  document.getElementById("clear").value = "";
}
