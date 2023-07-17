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
  if (logoImage.src.endsWith("logo.png")) {
    logoImage.src = "logo-small.png";
    logoImage.classList.toggle("short");
  } else {
    logoImage.src = "logo.png";
    logoImage.classList.remove("short");
  }
  mainContainer.classList.toggle("shorter");
});
