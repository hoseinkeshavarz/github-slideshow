const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownIcon = document.querySelector(".dropdown-icon");
const li = document.querySelector(".login");
dropdown.addEventListener("click", function () {
  dropdownContent.classList.toggle("d-none");
  dropdownContent.classList.toggle("d-flex");
  dropdownIcon.classList.toggle("fa-caret-down");
  dropdownIcon.classList.toggle("fa-caret-up");
});
