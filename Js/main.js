/*show nav */
const navBtn = document.querySelector(".header-mobile i");
const header = document.querySelector(".header");

const navItem = document.querySelectorAll(".site-nav-item");
const navLink = Array.from(document.querySelectorAll(".site-nav-item a"));

navBtn.addEventListener("click", function toggleNav() {
  header.classList.toggle("activated");
});

window.addEventListener("click", function(e) {
  if (header.classList.contains("activated") && e.clientY > 100) {
    header.classList.remove("activated");
  }
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

/*********Set filter project********** */

//get btn and list project
const filterBtn = document.querySelectorAll(".project-selector li");
const listProjects = Array.from(
  document.querySelectorAll(".project-item-container")
);

//hightlight btn when click
function hightlightFilterBtn(btn) {
  filterBtn.forEach(el => {
    el.style.borderColor = "white";
  });
  btn.style.borderColor = "var(--main-border-color)";
}

//render list
function renderFilterdList(list) {
  let windowWidth = window.innerWidth;
  let elHeight = list[0].clientHeight;
  let elWidth = list[0].clientWidth;

  // hide all elment not match value
  listProjects.forEach((el, index) => {
    let moveValue = `translate(${(index % 3) * elWidth}px,${(elHeight *
      (index - (index % 3))) /
      3}px)`;
    el.style.transform = `${moveValue} scale(0)`;
    el.style.opacity = "0";
  });

  //render match element responsive
  list.forEach(function(el, index) {
    if (windowWidth >= 769) {
      let moveValue = `translate(${(index % 3) * elWidth}px,${(elHeight *
        (index - (index % 3))) /
        3}px)`;
      el.style.transform = `${moveValue} scale(1)`;
      el.style.opacity = "1";
    } else if (windowWidth >= 576) {
      let moveValue = `translate(${(index % 2) * elWidth}px,${(elHeight *
        (index - (index % 2))) /
        2}px)`;
      el.style.transform = `${moveValue} scale(1)`;
      el.style.opacity = "1";
    } else {
      let moveValue = `translate(${(index % 1) * elWidth}px,${(elHeight *
        (index - (index % 1))) /
        1}px)`;
      el.style.transform = `${moveValue} scale(1)`;
      el.style.opacity = "1";
    }
  });
}

// filter and render element
function filterProject() {
  let filterResult = [];
  el = this;
  hightlightFilterBtn(el);
  valueFilter = this.getAttribute("data-filter");
  console.log(valueFilter);
  listProjects.forEach(el => {
    if (el.getAttribute("data-filter").indexOf(valueFilter) !== -1) {
      filterResult.push(el);
    }
  });
  renderFilterdList(filterResult);
}

// add eventlistener
renderFilterdList(listProjects);
filterBtn.forEach(el => {
  el.addEventListener("click", filterProject);
});

//**********google map api********* */
