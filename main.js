const removableText = document.querySelectorAll(".sidebar-menu .nav li a");
const removableArrows = document.querySelectorAll(
  ".sidebar-menu .nav li i.fa-chevron-right"
);
const sizebutton = document.querySelector(".fa-bars");
const logoImage = document.getElementById("logo");
const mainContainer = document.querySelector(".container");

sizebutton.addEventListener("click", function () {
  removableText.forEach(function (removabletext) {
    removabletext.classList.toggle("hidden");
  });
  removableArrows.forEach(function (removablearrows) {
    removablearrows.classList.toggle("hidden");
  });
  mainContainer.classList.toggle("shorter");
});