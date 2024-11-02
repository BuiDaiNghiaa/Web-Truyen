const menus = [
    { button: document.querySelector(".par-menu1"), menu: document.querySelector(".sub-menu1") },
    { button: document.querySelector(".par-menu2"), menu: document.querySelector(".par-slide-menu") },
    { button: document.querySelector(".par-menu3"), menu: document.querySelector(".slide-menu3") },
];

// Hàm đóng tất cả menu
function closeAllMenus() {
    menus.forEach(({ menu }) => menu.classList.remove("active"));
}

// Lặp qua từng phần tử menu để thêm sự kiện
menus.forEach(({ button, menu }) => {
    if (button && menu) {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            closeAllMenus();  // Đóng tất cả menu trước khi mở menu được nhấn
            menu.classList.toggle("active");
        });
    }
});

// Đóng tất cả các menu khi click ra ngoài
document.addEventListener("click", closeAllMenus);
