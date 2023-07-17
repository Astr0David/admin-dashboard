const removableText = document.querySelectorAll(".sidebar-menu .nav li a");
const removableArrows = document.querySelectorAll(
  ".sidebar-menu .nav li i.fa-chevron-right"
);
const sizebutton = document.querySelector(".desktop");
const logoImage = document.getElementById("logo");
const mainContainer = document.querySelector(".container");
const mobileSidebarButton = document.getElementById("mobile");
const closeSidebarButton = document.getElementById("sidebarclose");
const sidebar = document.querySelector(".sidebar");

sizebutton.addEventListener("click", function () {
  removableText.forEach(function (removabletext) {
    removabletext.classList.toggle("hidden");
  });
  removableArrows.forEach(function (removablearrows) {
    removablearrows.classList.toggle("hidden");
  });
  mainContainer.classList.toggle("shorter");
});

if (mobileSidebarButton) {
  mobileSidebarButton.addEventListener("click", () => {
    sidebar.style.left = "0";

  });
}

if (closeSidebarButton) {
  closeSidebarButton.addEventListener("click", () => {
    sidebar.style.left = "-100%";
  });
}
