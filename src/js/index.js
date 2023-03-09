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
  const h = document.getElementById("w3r").href;
  alert("href : " + h);
  const t = document.getElementById("w3r").target;
  alert("target : " + t);
  const r = document.getElementById("w3r").rel;
  alert("rel : " + r);
  const hl = document.getElementById("w3r").hreflang;
  alert("hreflang : " + hl);
  const tp = document.getElementById("w3r").type;
  alert("type : " + tp);
});

//lesson 5 (create column)

function insert() {
  var table = document.getElementById("sampleTable");
  var newRow = table.insertRow(0);
  var cellOne = newRow.insertCell(0);
  var cellTwo = newRow.insertCell(1);
  cellOne.innerHTML = "new cell1";
  cellTwo.innerHTML = "new cell2";

  // lesson 6 (change text in column)
  positionRow = window.prompt("Row(0,1,2)", "0");
  positionColumn = window.prompt("Column(0,1)", "0");
  text = window.prompt("Input text");
  var change =
    document.getElementById("sampleTable").rows[parseInt(positionRow, 10)]
      .cells;
  change[parseInt(positionColumn, 10)].innerHTML = text;
}

// lesson 7
function createTable() {
  quantityRow = window.prompt("Row(1,2)", "1");
  quantityColumn = window.prompt("Column(1,2)", "1");
  for (let i = 0; i < parseInt(quantityRow, 10); i++) {
    const tab = document.getElementById("myTable");
    const row = myTable.insertRow(i);
    for (let x = 0; x < parseInt(quantityColumn, 10); x++) {
      const column = row.insertCell(x);
      column.innerHTML = "Row-" + i + " Column-" + x;
    }
  }
}

// lesson 8 (remove select)
function removeColor() {
  var select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
}

// lesson 9 (show options in select)
function getOptions() {
  var list = document.getElementById("colorSelect");
  var content = "Quantity Items: ";
  quantityItem = document.getElementById("colorSelect").length;
  content = content + quantityItem;
  for (var i = 0; i < list.length; i++) {
    content = content + "\n" + list.options[i].text;
  }
  alert(content);
}

// lesson 10
function volumeSphere() {
  var radius = document.getElementById("radius").value;
  // return absolute value
  radius = Math.abs(radius);

  //  calculate the volume of a sphere => V = 4/3 πr³.
  var volume = (4 / 3) * Math.PI * radius ** 3;
  // the number of values ​​after the sign ","
  volume = volume.toFixed(2);
  var result = document.getElementById("volume");
  result.value = volume;
}

// lesson 11 (random)
// json
var theImages = [{
  src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
  width: "300",
  height: "150"
}, {
  src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
  width: "300",
  height: "150"
}, {
  src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
  width: "300",
  height: "150"
}];

function display_random_image() {
  let random = Math.floor(Math.random() * theImages.length);

  const render = document.getElementById("demo");
  // create img
  const image = document.createElement("img");

  image.setAttribute("src", theImages[random].src);
  image.style.width = theImages[random].width + "px";
  image.style.height = theImages[random].height + "px";

    // remove the prev images
    const images = document.getElementsByTagName('img');
    const prev = images.length;
    for (let i = 0; i < prev; i++) {
      images[0].parentNode.removeChild(images[0]);
    }

  render.appendChild(image);
}

// lesson 12 (mouse over)
let strong = document.getElementsByTagName('b');

function highlight() {
  for(let i = 0 ; i < strong.length; i++) {
    strong[i].style.color = "red";
  }
}

function return_normal() {
  for(let i = 0 ; i < strong.length; i++) {
    strong[i].style.color = "white";
  }
}

// lesson 13
function getSize() {
  const test = document.getElementById("test");
  const width= window.innerWidth;
  const height= window.innerHeight;

  demo.innerHTML = `<h1> Width: ${width}px and Height: ${height}px`
}
