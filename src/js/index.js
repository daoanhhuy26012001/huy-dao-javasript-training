// The Logo Hijack
const logo = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  logo.src =
    "https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo.png";
  logo.style.width = "400px";
});

// About Me
const body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").innerHTML = "huydao";
document.getElementById("favorites").innerHTML = "football";
document.getElementById("hometown").innerHTML = "DaNang";
var items = document.getElementsByTagName("li");

for (var i = 0; i < items.length; i++) {
  items[i].className = "listitem";
}

var pic = document.createElement("img");
// pic.src =
//   "https://lh3.googleusercontent.com/a/AEdFTp7lgjT6X9QqKGleD672kH5F3xFpBfcP2I2uqJSFrw=s288-p-rw-no";
pic.style.width = "400";
document.body.appendChild(pic);

// My book list
var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    image:
      "https://designlab.ucsd.edu/wp-content/uploads/2018/03/Don-Norman_FOD.jpeg",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    image:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/arjdeeb8dciclv5i0grk3corjf.jpg",
    alreadyRead: true,
  },
];

for (var i = 0; i < books.length; i++) {
  var text = document.createElement("p");
  var description = document.createTextNode(
    books[i].title + " by " + books[i].author
  );
  text.appendChild(description);
  document.body.appendChild(text);
}

var list = document.createElement("ul");
for (var i = 0; i < books.length; i++) {
  var item = document.createElement("li");
  var photo = document.createElement("img");
  photo.src = books[i].image;
  photo.style.width = "100px"
  item.appendChild(photo);
  var bookDescription = document.createTextNode(
    books[i].title + " by " + books[i].author
  );
  item.appendChild(bookDescription);
  if (books[i].alreadyRead) {
    item.style.color = "#247130";
  }
  list.appendChild(item);
}
document.body.appendChild(list);
