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
            // Kiểm tra nếu menu đã mở
            const isActive = menu.classList.contains("active");

            if (isActive) {
                // Nếu menu đã mở, đóng nó
                menu.classList.remove("active");
            } else {
                // Nếu không, đóng tất cả menu trước và mở menu hiện tại
                closeAllMenus();
                menu.classList.add("active");
            }
        });
    }
});

// Đóng tất cả các menu khi click ra ngoài
document.addEventListener("click", closeAllMenus);


 // Click icon-menu-dropdown 
 const iconMenuDropdown = document.querySelector(".menu-reponsive");
 if(iconMenuDropdown) {
     const ulDropdown = document.querySelector(".menu-drop");
     const divDropdown = document.querySelector(".header-menu-drop");
     iconMenuDropdown.addEventListener("click", () => {
         ulDropdown.classList.toggle("block");
         divDropdown.classList.toggle("none");
     })
 }


 // Select all menu items with a corresponding sub-menu
 const menuItems = document.querySelectorAll('.menu-edit');

 // Add a click event listener to each main menu item
 menuItems.forEach((menuItem, index) => {
     menuItem.addEventListener('click', () => {
         // Toggle the display of the corresponding sub-menu
         const subMenu = menuItem.nextElementSibling;
         if (subMenu && subMenu.classList.contains('sub-menu')) {
             subMenu.classList.toggle('active');
             menuItem.classList.toggle('active');
         }
     });
 });
