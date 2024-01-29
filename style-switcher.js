// ===================== Toggle style switcher ================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//  hide style switcher on scroll
const hidethemes = document.querySelector(".main-container");
hidethemes.addEventListener("click",()=>{
    if (document.querySelector(".style-switcher").classList.contains("open")) {

        document.querySelector(".style-switcher").classList.remove("open");
    }

})
// Currently this function not work properly, so I Comment out this code 

// window.addEventListener("scroll", () => {
//     if (document.querySelector(".style-switcher").classList.contains("open")) {

//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })


// theme colors
const alernateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alernateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
// ===== dark and light mode ====
const daynight = document.querySelector('.day-night');
daynight.addEventListener('click', () => {
    daynight.querySelector("i").classList.toggle('fa-sun')
    daynight.querySelector("i").classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})
window.addEventListener('load', () => {
    if (document.body.classList.contains("dark")) {
        daynight.querySelector("i").classList.add('fa-sun')
    }
    else {
        daynight.querySelector("i").classList.add('fa-moon')

    }
})