const searchInput = document.querySelector(".header__search input");
const searchButton = document.querySelector(".header__search button");
const logoTxt = document.querySelector('.header__logo span');

if (window.innerWidth > 768) {
  searchInput.classList.add("open");
  searchButton.classList.add("open_btn");
  searchButton.removeEventListener('click', () => {});
} else {
    searchButton.addEventListener("click", () => {
        searchInput.classList.toggle("open");
        searchButton.classList.toggle("open_btn")
        logoTxt.classList.toggle("h-hidden")
    });
}