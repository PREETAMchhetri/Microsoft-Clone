const office = document.querySelectorAll(".office");
const dropdownTop = document.querySelector(".dropdown-top");
const product = document.querySelector("#product");
const productDropdown = document.querySelector(".product-dropdown-container");
const resource = document.querySelector("#resource");
const resourceDropdown = document.querySelector(".resource-dropdown-container");
const support = document.querySelector("#support");
const supportDropdown = document.querySelector(".support-dropdown-container");
const menu = document.querySelector("#ham");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const microsoft = document.querySelector("#microsoft-nav")
const microsoftDisplay = document.querySelector("#nav-links2")

let id, officeImageId, icon, fas;



function remove() {
    document.querySelectorAll(".active2").forEach(item => item.classList.remove("active2"));
    document.querySelectorAll(".show").forEach(item => item.classList.remove("show"));
    document.querySelectorAll("i.fas").forEach(item => item.classList.replace("fa-chevron-down", "fa-chevron-right"));
}

function add() {
    fas.classList.remove("fa-chevron-right");
    fas.classList.add("fa-chevron-down");
    document.querySelector(`.${id}`).classList.add("show");
    document.querySelector(`.${officeImageId}`).classList.add("active2");
}

function show(e) {
    remove();

    id = this.id;
    officeImageId = id.substring(5);
    icon = this.classList[1];
    fas = document.querySelector(`#${icon}`);

    add();
}

function toggle() {
    let id = this.id;
    switch (id) {
        case "drop": dropdownTop.classList.toggle("active");
            productDropdown.classList.remove("active");
            resourceDropdown.classList.remove("active");
            supportDropdown.classList.remove("active");
            break;
        case "product": productDropdown.classList.toggle("active");
            dropdownTop.classList.remove("active");
            resourceDropdown.classList.remove("active");
            supportDropdown.classList.remove("active");
            break;
        case "resource": resourceDropdown.classList.toggle("active");
            dropdownTop.classList.remove("active");
            productDropdown.classList.remove("active");
            supportDropdown.classList.remove("active");
            break;
        case "support": supportDropdown.classList.toggle("active");
            dropdownTop.classList.remove("active");
            productDropdown.classList.remove("active");
            resourceDropdown.classList.remove("active");
            break;
    }
}

function showMenu() {
    hamburgerMenu.classList.toggle("ham-show");
}

function display() {
    microsoftDisplay.classList.toggle("nav-microsoft-active")
}

drop.addEventListener("click", toggle);
office.forEach(item => item.addEventListener("click", show));
product.addEventListener("click", toggle);
resource.addEventListener("click", toggle);
support.addEventListener("click", toggle);
menu.addEventListener("click", showMenu);
microsoft.addEventListener("click", display)