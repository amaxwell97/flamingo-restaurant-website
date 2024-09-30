const homeFoodVideoContainer = document.getElementsByClassName('food-vid-container')[0];
const homeFoodVideoElement = document.createElement('video');
const homeFoodVideoSource = document.createElement('source');

homeFoodVideoSource.src = '/images/mexican-food-los-muertos-crew.mp4';

const addVideo = () => {
    homeFoodVideoContainer.append(homeFoodVideoElement);
    homeFoodVideoElement.append(homeFoodVideoSource);
}

window.addEventListener('load', () => {
    addVideo();
})