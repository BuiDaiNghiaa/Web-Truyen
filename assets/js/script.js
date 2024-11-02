const menuParSub1 = document.querySelector(".par-menu1");
const menuSub1 = document.querySelector(".sub-menu1");
const menuSub2 = document.querySelector(".par-slide-menu");
const menuSub3 = document.querySelector(".slide-menu3");
if(menuParSub1) {
    menuParSub1.addEventListener("click", () => {
        menuSub1.classList.toggle("active");
        menuSub2.classList.remove("active");
        menuSub3.classList.remove("active");
    })
}

const menuParSub2 = document.querySelector(".par-menu2");
if(menuParSub2) {
    menuParSub2.addEventListener("click", () => {
        menuSub2.classList.toggle("active");
        menuSub1.classList.remove("active");
        menuSub3.classList.remove("active");
    })
}
const menuParSub3 = document.querySelector(".par-menu3");
if(menuParSub3) {
    menuParSub3.addEventListener("click", () => {
        menuSub3.classList.toggle("active");
        menuSub2.classList.remove("active");
        menuSub1.classList.remove("active");
    })
}