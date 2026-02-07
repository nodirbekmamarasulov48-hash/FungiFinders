const headerhamburgerbutton = document.querySelector(".header_menu-btn");

headerhamburgerbutton.addEventListener("click", () => {
    document.querySelector(".mobile-nav").classList.toggle("active");
});  