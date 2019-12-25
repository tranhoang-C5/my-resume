let currentPageIndex = 0;
let nextPageIndex = null;
const pageContaner = document.querySelector(".page-content");
const page = Array.from(document.querySelectorAll(".page-content-item"));
const changePageBtn = document.querySelector(".nextPage");

function renderCurrent() {
  page.forEach((el, index) => {
    el.classList = "page-content-item resume-container container-fluid";
  });
  page[currentPageIndex].classList.add("current-page");
}

function slidePageRightToLeft() {
  page[currentPageIndex].classList.add("slideRightToLeftOut");
  page[nextPageIndex].classList.add("slideRightToLeftIn");
  currentPageIndex = nextPageIndex;
  nextPageIndex = null;
}

/*Run program */
renderCurrent();
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
    renderCurrent();
  }, 1000);
});

handler();
