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
    el.classList = "page-content-item resume-container container-fluid";
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
      nextPageIndex = 0;
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
  if (nextPageIndex !== null && currentPageIndex !== nextPageIndex) {
    slidePageRightToLeft();
  }
}

navMenu.forEach(function(el, index) {
  el.addEventListener("click", function handler() {
    //xoa su kien click cua tat ca cac phan tu nav
    navMenu.forEach(function(el) {
      el.removeEventListener("click", handler);
      setTimeout(() => {
        el.addEventListener("click", handler);
      }, 700);
    });
    //render page
    setTimeout(() => {
      renderPage();
    }, 30);
    // add class current
    setTimeout(() => {
      addClassCurrent();
    }, 700);
  });
});

addClassCurrent();
changePageBtn.addEventListener("click", function handler() {
  changePageBtn.removeEventListener("click", handler);
  if (currentPageIndex === page.length - 1) {
    nextPageIndex = 0;
  } else {
    nextPageIndex = currentPageIndex + 1;
  }
  page[nextPageIndex].scrollTop = 0; //scroll next element to top
  slidePageRightToLeft();
  setTimeout(() => {
    changePageBtn.addEventListener("click", handler);
    addClassCurrent();
  }, 700);
});
