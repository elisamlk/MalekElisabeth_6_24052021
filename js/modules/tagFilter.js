export function tagFilter() {
  let navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
      let selectedTag = navLink.getAttribute("data-filter");
      let cardsToDisplay = document.querySelectorAll(
        `.photographer-card.${selectedTag}`
      );
      let cardsToHide = document.querySelectorAll(
        `.photographer-card:not(.${selectedTag})`
      );
      cardsToDisplay.forEach((cardToDisplay) => {
        cardToDisplay.classList.add("show");
        cardToDisplay.classList.remove("hide");
      });
      cardsToHide.forEach((cardToHide) => {
        cardToHide.classList.add("hide");
        cardToHide.classList.remove("show");
      });
    });
  });
}
