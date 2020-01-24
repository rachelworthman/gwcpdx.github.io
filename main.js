// disable registration button at specific date and time
// note that month is zero-indexed, BAD DESIGN DECISION from the JS team
const close = new Date(2020, 0, 25, 0, 0, 0)
const now = new Date()
const register = document.querySelector(".button")

if (close < now) {
  register.classList.add("disabled")
  register.addEventListener("click", function (event) {
    alert("Registration for the 2020 Spring Term has closed.")
    // stop going to the page on click
    event.preventDefault()
  })
}