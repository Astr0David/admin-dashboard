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

const contentContainter = document.querySelector(".main-content");
const firstInfo = document.querySelector(".info-one")

function handleContainerWidthChange() {
  if(contentContainter.offsetWidth <= 751) {
    firstInfo.style.gridTemplateColumns = "repeat(1, 1fr)";
    firstInfo.style.gridTemplateRows = "repeat(4, 1fr) repeat(1, 3fr)";
    firstInfo.style.gridTemplateAreas = `
      "pillone" 
      "pilltwo"
      "pillthree"
      "pillfour"
      "updates"
    `
   } else if (contentContainter.offsetWidth <= 1505) {
    firstInfo.style.gridTemplateColumns = "repeat(2, 1fr)";
    firstInfo.style.gridTemplateRows = "repeat(2, 0.5fr) repeat(1, 1fr)";
    firstInfo.style.gridTemplateAreas = `
      "pillone pilltwo"
      "pillthree pillfour"
      "updates updates"
    `
  } else{
    firstInfo.style.gridTemplateColumns = "repeat(2,minmax(500px, 0.375fr)) repeat(1, minmax(334px, 0.25fr))";
    firstInfo.style.gridTemplateRows = "repeat(2,1fr)";
    firstInfo.style.gridTemplateAreas = `
    "pillone pilltwo updates"
    "pillthree pillfour updates"
    `
  }
}

handleContainerWidthChange();
window.addEventListener('resize', handleContainerWidthChange);
