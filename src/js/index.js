const logo = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  logo.src = "https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo.png"
  logo.style.width = "400px"
})