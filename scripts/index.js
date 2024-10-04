const headerBar = document.getElementsByClassName('header-bar')[0];

const navTabsContainer = document.getElementsByClassName('nav-tabs-container')[0];

const navButtonsContainer = document.getElementsByClassName('nav-buttons')[0];

// Move nav tabs to button side and remove social icons when the location and phone number bar disappear




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

// Create and insert home page welcome section
// const homeWelcomeSectionContainer = document.getElementsByClassName('welcome-section-container')[0];

// const homeWelcomeSectionLeftCol = document.createElement('div');
// const homeWelcomeSectionLeftColHeadline = document.createElement('h1');
// const homeWelcomeSectionLeftColPara = document.createElement('p');
// homeWelcomeSectionLeftCol.classList.add('welcome-left-col');


// const homeWelcomeSectionRightCol = document.createElement('div');
// homeWelcomeSectionRightCol.classList.add('welcome-right-col');

