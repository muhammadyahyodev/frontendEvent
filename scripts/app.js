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
