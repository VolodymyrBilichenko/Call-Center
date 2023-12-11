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
        logoTxt.classList.toggle("open")
    });
}

// open acardeon

const goodsList = document.querySelectorAll('.goods__list li');

goodsList.forEach(item => {
    const buttonHead = item.querySelector('.goods__list__head');

    buttonHead.addEventListener('click', () => {
        item.classList.toggle('goods__active');
        
        const bodyList = item.querySelector('.goods__list__body');
        bodyList.style.display = item.classList.contains('goods__active')
    })

})

// open acardeon 2

const goodsWork = document.querySelectorAll('.goods__work li');

goodsWork.forEach(item => {
  const buttonHead = item.querySelector('.goods__work__head');

  buttonHead.addEventListener('click', () => {
    item.classList.toggle('goods__active');

    const bodyWork = item.querySelector('.goods__work__body');
    bodyWork.style.display = item.classList.contains('goods__active')
  });
});