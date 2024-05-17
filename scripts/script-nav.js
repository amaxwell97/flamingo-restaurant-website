
// const navContainer = document.getElementsByClassName('nav-container');
// const navTabs = document.getElementsByClassName('nav-tabs');
// const navLogo = document.getElementById

// Create tags that will be used to build nav bar
const docHeader = document.querySelector('header');
const navContainer = document.createElement('div');
const navTabsContainer = document.createElement('div');
const navTabsPara = document.createElement('p');
const navLogoContainer = document.createElement('div');
const navLogoImg = document.createElement('img');
const navButtonsContainer = document.createElement('div');

navLogoImg.src = '/images/flamingo-logo.png';

window.addEventListener('load', () => {
    navContainer.classList.add('nav-container');
    docHeader.append(navContainer);
    navContainer.append(navTabsContainer);
    navTabsContainer.append(navTabsPara);
    navLogoContainer.classList.add('nav-logo');
    navContainer.append(navLogoContainer);
    navLogoContainer.append(navLogoImg);
    navContainer.append(navButtonsContainer);
})