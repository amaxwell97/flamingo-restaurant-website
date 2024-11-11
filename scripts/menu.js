
import {menu} from './modules.js';
console.log(menu);
import { initMap } from './modules.js';

const menuPageContainer = document.querySelector(".menu-page-container");
const categorySelectionBtn = document.querySelectorAll(".category-selection-btn");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});

categorySelectionBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        // console.log(category);
        const menuCategory = menu.filter(function(menuItem){
            // console.log(menuItem.category);
            if (menuItem.category[0] === category || menuItem.category[1] === category) {
            return menuItem;
            }
        });
        // console.log(menuCategory);
        displayMenuItems(menuCategory);
        // if(category === 'all') {
        //     displayMenuItems(menu)
        // } else {
        //     displayMenuItems(menuCategory);
        // }
    })
})

function displayMenuItems(menuItems){
    // console.log(menuItems);
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);
        return `<article class="menu-page-item">
                <div class="menu-page-item-title-container">
                    <h2 class="menu-page-item-title">${item.title}</h2>
                    <hr>
                </div>
                <div class="menu-page-item-description">
                    <p>${item.desc}</p>
                    <p>${item.price}</p>
                </div>
                <div class="menu-page-item-container">
                    <img src="${item.img}" alt="" class="menu-page-item-image">
                </div>
            </article>`
    })
    displayMenu = displayMenu.join("");
    menuPageContainer.innerHTML = displayMenu
}

// Calling function to have Google Maps display
initMap();