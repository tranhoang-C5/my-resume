/*show nav */
const navBtn = document.querySelector(".header-mobile i");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function() {
  header.classList.toggle("activated");
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
