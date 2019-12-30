/*show nav */
const navBtn = document.querySelector(".header-mobile i");
const header = document.querySelector(".header");

const navItem = document.querySelectorAll(".site-nav-item");
const navLink = Array.from(document.querySelectorAll(".site-nav-item a"));

navBtn.addEventListener("click", function() {
  header.classList.toggle("activated");
});
//SET activated nav item
navLink[0].style.cssText =
  "border-right:2px solid var(--main-border-color); background-color: f9f9f9 ";
window.addEventListener("hashchange", function() {
  let hash = location.hash;
  navLink.forEach(function(el) {
    el.style = "";
    if (el.getAttribute("href") === hash) {
      el.style.borderRight = "2px solid var(--main-border-color)";
      el.style.backgroundColor = "#f9f9f9";
    }
  });
});

/*********set carosel************ */
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: false,
    responsiveClass: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      996: {
        items: 2
      }
    }
  });
});

/******skill bar with seter******* */
const skillValue = document.querySelectorAll(".skill-progress span");
const skillBarPercent = document.querySelectorAll(".skill-bar-percent");

function setSkillBar() {
  skillValue.forEach(function(el, i) {
    skillBarPercent[i].style.width = el.textContent;
  });
}
setSkillBar();
