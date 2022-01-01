const drop = document.querySelector("#drop")
const dropdownTop = document.querySelector(".dropdown-top")
const office = document.querySelectorAll(".office")

let id, officeImageId, icon, fas;


//Toggle for Navigation and Ms- office Texts
function toggle() {
    dropdownTop.classList.toggle("active")
}

function remove() {
    document.querySelectorAll(".active2").forEach(item => item.classList.remove("active2"))
    document.querySelectorAll(".show").forEach(item => item.classList.remove("show"))
    document.querySelectorAll("i.fas").forEach(item => item.classList.replace("fa-chevron-down", "fa-chevron-right"))
}

function add() {
    fas.classList.remove("fa-chevron-right")
    fas.classList.add("fa-chevron-down")
    document.querySelector(`.${id}`).classList.add("show")
    document.querySelector(`.${officeImageId}`).classList.add("active2")
}

function show(e) {

    // Removes all the active, show, icon classes and resets it to default
    remove()

    //Get all the classes and ID's from DOM for manipulation
    id = this.id
    officeImageId = id.substring(5)
    icon = this.classList[1]
    fas = document.querySelector(`#${icon}`)

    //Adds the desired classes to desired elements
    add()


}

//Event Listeners
drop.addEventListener("click", toggle)
office.forEach(item => item.addEventListener("click", show))