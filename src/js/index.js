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
pic.src =
  "https://lh3.googleusercontent.com/a/AEdFTp7lgjT6X9QqKGleD672kH5F3xFpBfcP2I2uqJSFrw=s288-p-rw-no";
pic.style.width = "400"
document.body.appendChild(pic);