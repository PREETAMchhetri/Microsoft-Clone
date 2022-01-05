const drop = document.querySelector("#drop");
const dropdownTop = document.querySelector(".dropdown-top");
const menu = document.querySelector("#ham");
const hamburgerMenu = document.querySelector(".hamburger-menu");


function toggle() {
    dropdownTop.classList.toggle("active")
}

function showMenu() {
    hamburgerMenu.classList.toggle("ham-show");
}

drop.addEventListener("click", toggle);
menu.addEventListener("click", showMenu);