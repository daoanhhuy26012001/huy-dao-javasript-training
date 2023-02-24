// Lesson 1 & 3
const button = document.getElementById("jsstyle");

button.addEventListener("click", () => {
  text.style.fontSize = "15px";
  text.style.fontFamily = "Roboto, sans-serif;";
  text.style.color = "green";
  text.style.background = "black";
});

// Lesson 2
function getFormValue() {
  var form = document.getElementById("form1");
  for (var i = 0; i < form.length; i++) {
    if (form.elements[i].value != "Submit") {
      alert(form.elements[i].value);
    }
  }
}

// Lesson 4
const btn = document.getElementById("getAttributes");

btn.addEventListener("click", () => {
  var h = document.getElementById("w3r").href;
  alert("href : " + h);
  var t = document.getElementById("w3r").target;
  alert("target : " + t);
  var r = document.getElementById("w3r").rel;
  alert("rel : " + r);
  var hl = document.getElementById("w3r").hreflang;
  alert("hreflang : " + hl);
  var tp = document.getElementById("w3r").type;
  alert("type : " + tp);
});

//lesson 5
function insert() {
  var table = document.getElementById("sampleTable").insertRow(0);
  var cellOne = table.insertCell(0);
  var cellTwo = table.insertCell(1);
  cellOne.innerHTML = "new cell1"
  cellTwo.innerHTML = "new cell2"
}
