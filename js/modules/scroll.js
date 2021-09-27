export function scrollButton() {
  let scroll = document.querySelector(".photographer-content");
  window.addEventListener("scroll", function () {
    let position = window.scrollY;
    if (position > 100) {
      scroll.style.display = "block";
    } else {
      scroll.style.display = "none";
    }
  });

  scroll.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
}
