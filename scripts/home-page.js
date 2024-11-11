// HOME PAGE

// Importing modules from modules file
import {menu} from './modules.js';
import { initMap } from './modules.js';


// Add video to the top of the homepage
const homeFoodVideoContainer = document.getElementsByClassName('food-vid-container')[0];
const homeFoodVideoElement = document.createElement('video');
const homeFoodVideoSource = document.createElement('source');

homeFoodVideoElement.setAttribute('autoplay', '');
homeFoodVideoSource.src = '/images/mexican-food-los-muertos-crew.mp4';

const menuBtn = document.createElement('button');
menuBtn.innerText = 'MENU';
menuBtn.classList.add('menu-btn');

const addVideo = () => {
    homeFoodVideoContainer.append(homeFoodVideoElement);
    homeFoodVideoElement.append(homeFoodVideoSource);
    homeFoodVideoContainer.append(menuBtn);
}

window.addEventListener('load', () => {
    addVideo();
})


// Displaying menu on home page and tagging category buttons
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


// Calling function to have Google Maps display
initMap();