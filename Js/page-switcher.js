let currentPageIndex = 0;
let nextPageIndex = null;
const pageContaner = document.querySelector(".page-content");
const page = Array.from(document.querySelectorAll(".page-content-item"));
const changePageBtn = document.querySelector(".nextPage");
const navMenu = document.querySelectorAll(".site-nav-item");

page.forEach(function(el, index) {
  console.log(index);
});

// restore default class of page
function addClassCurrent() {
  page.forEach((el, index) => {
    el.classList = "page-content-item container-fluid";
  });
  page[currentPageIndex].classList.add("current-page");
}

//get next page using hashtag
function getNextPage() {
  let hashPage = location.hash.slice(1, location.hash.length);
  for (let i = 0; i < page.length; i++) {
    if (page[i].getAttribute("id") === hashPage) {
      nextPageIndex = i;
      console.log(nextPageIndex);
      return;
    } else {
      nextPageIndex = currentPageIndex;
    }
  }
}

/******cac function hieu ung*******/
function slidePageRightToLeft() {
  page[currentPageIndex].classList.add("slideRightToLeftOut");
  page[nextPageIndex].classList.add("slideRightToLeftIn");
  currentPageIndex = nextPageIndex;
  nextPageIndex = null;
}
/******cac function hieu ung*******/

/******************Run program******************** */
// render page function
function renderPage() {
  getNextPage();
  page[nextPageIndex].scrollTop = 0; //scroll next element to top
  if (nextPageIndex !== null && currentPageIndex !== nextPageIndex) {
    slidePageRightToLeft();
  }
}

changePageBtn.addEventListener("click", function handler() {
  changePageBtn.removeEventListener("click", handler);
  if (currentPageIndex === page.length - 1) {
    nextPageIndex = 0;
  } else {
    nextPageIndex = currentPageIndex + 1;
  }
  location.hash = page[nextPageIndex].id;
  setTimeout(() => {
    changePageBtn.addEventListener("click", handler);
  }, 600);
});

window.addEventListener("hashchange", function handler() {
  window.removeEventListener("hashchange", handler);
  renderPage();
  setTimeout(() => {
    addClassCurrent();
    this.window.addEventListener("hashchange", handler);
  }, 600);
});

/************prevent user click multiple at all anchor tag************** */
const link = document.querySelectorAll("a");
var alowClick = true;
function windowClickHandler(e) {
  if (!alowClick) {
    e.stopPropagation();
    e.preventDefault();
  } else {
    alowClick = false;
  }
  setTimeout(() => {
    alowClick = true;
  }, 600);
}
link.forEach(function(el, index) {
  el.addEventListener("click", windowClickHandler);
});

location.hash = "#about";
addClassCurrent();
