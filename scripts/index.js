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

const addVideo = () => {
    homeFoodVideoContainer.append(homeFoodVideoElement);
    homeFoodVideoElement.append(homeFoodVideoSource);
}

window.addEventListener('load', () => {
    addVideo();
})