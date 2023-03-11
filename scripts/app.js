const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-bar");
const menu = document.querySelector(".wrapper");

menuBtn.addEventListener("click", function () {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    this.innerHTML =
      '<img src="./images/icons/close.png" alt="menu-icon" style="width:20px;" />';
  } else {
    menu.classList.remove("active");
    this.innerHTML =
      '<img src="./images/icons/menu.png" alt="close-icon" style="width:20px;" />';
  }
});

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 0);
});

var owl2 = $(".section-5__cards");
owl2.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});

var owl3 = $(".news__cards");
owl3.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 25,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
