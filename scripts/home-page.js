// HOME PAGE

import {menu} from './modules.js';
console.log(menu);

const homePageMenuImgDisplay = document.querySelector(".home-page-menu-img-display");
const categorySelectionBtn = document.querySelectorAll(".category-selection-btn");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});

categorySelectionBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if (menuItem.category[0] === category || menuItem.category[1] === category) {
            return menuItem;
            }
        });
        displayMenuItems(menuCategory);
    })
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item) {
        return `<img src="${item.img}" alt="" class="menu-page-item-image">`
    })
    displayMenu = displayMenu.join("");
    homePageMenuImgDisplay.innerHTML = displayMenu;
}