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
