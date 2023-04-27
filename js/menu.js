let btn = document.querySelector("#btnMenu");
let navLinks = document.querySelector("#navLinks");
btn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
