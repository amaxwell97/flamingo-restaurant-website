
// const navContainer = document.getElementsByClassName('nav-container');
// const navTabs = document.getElementsByClassName('nav-tabs');
// const navLogo = document.getElementById

// Create tags that will be used to build nav bar
const docHeader = document.querySelector('header');
const navContainer = document.createElement('div');
const navTabsContainer = document.createElement('div');
const navTabHours = document.createElement('p');
const navTabMenu = document.createElement('p');
const navTabContact = document.createElement('p');
const navLogoContainer = document.createElement('div');
const navLogoImg = document.createElement('img');
const navButtonsContainer = document.createElement('div');

navTabHours.innerText = 'HOURS & LOCATION'
navTabMenu.innerText = 'MENU';
navTabContact.innerText = 'CONTACT';
navLogoImg.src = '/images/flamingo-logo.png';

const buildNav = () => {
    navContainer.classList.add('nav-container');
    docHeader.append(navContainer);
    navTabsContainer.classList.add('nav-tabs');
    navContainer.append(navTabsContainer);
    navTabsContainer.append(navTabHours);
    navTabsContainer.append(navTabMenu);
    navTabsContainer.append(navTabContact);
    navLogoContainer.classList.add('nav-logo');
    navContainer.append(navLogoContainer);
    navLogoContainer.append(navLogoImg);
    navContainer.append(navButtonsContainer);
}

window.addEventListener('load', () => {
    buildNav();
})