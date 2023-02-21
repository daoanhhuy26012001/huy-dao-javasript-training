// Lesson 1
const button = document.getElementById("jsstyle");

button.addEventListener("click", () => {
  text.style.fontSize = "15px";
  text.style.fontFamily = "Roboto, sans-serif;";
  text.style.color = "green";
});

// Lesson 2
function getFormValue() {
  
  var form = document.getElementById('form1')
  for (var i = 0; i < form.length; i++) {
    if (form.elements[i].value != 'Submit') {
      alert(form.elements[i].value);
    }
  }
}