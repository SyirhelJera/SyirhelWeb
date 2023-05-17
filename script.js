var image = document.getElementById('image');
var btn = document.getElementById('btn');
var nameElement = document.getElementById('name');

var images = [
  {
    path: './pics/Giyuu.webp',
    name: 'Giyuu Tomioka',
    backgroundImg: 'url(https://cdna.artstation.com/p/assets/images/images/024/158/398/large/gato-rix-20190607-20200210.jpg?1581499089)'
  },
  {
    path: './pics/Sanemi.webp',
    name: 'Sanemi Shinazugawa',
    backgroundImg: 'url(https://cdna.artstation.com/p/assets/images/images/061/629/156/large/akashi-1681233546840.jpg?1681261111)'
  },
  {
    path: './pics/Obanai.webp',
    name: 'Obanai',
    backgroundImg: 'url(https://staticg.sportskeeda.com/editor/2022/03/6a387-16474452512975-1920.jpg)'
  },
  {
    path: './pics/Kanroji.webp',
    name: 'Mitsuri Kanroji',
    backgroundImg: 'url(https://sportshub.cbsistatic.com/i/2023/02/22/7b6d37e2-67f2-44f9-9e31-9cc3d218a853/demon-slayer-season-3-mitsuri-swordsmith-village-arc-anime.jpg)'
  },
  // Add more image paths, names, and background images here
];

var currentIndex = 0;

btn.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  var currentImage = images[currentIndex];

  image.src = currentImage.path;
  nameElement.textContent = currentImage.name;
  document.body.style.backgroundImage = currentImage.backgroundImg;

  // Remove and re-add the slide-in class to trigger the animation

  setTimeout(function() {
    document.body.classList.add('slide-in');
  }, 10);
});

var logoOverlay = document.createElement('img');
logoOverlay.classList.add('logo-overlay');
logoOverlay.src = './pics/Demon-Slayer-Logo.png';

btn.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  var currentImage = images[currentIndex];

  image.src = currentImage.path;
  nameElement.textContent = currentImage.name;
  document.body.style.backgroundImage = currentImage.backgroundImg;

  // Add the logo overlay
  document.body.appendChild(logoOverlay);

  logoOverlay.style.opacity = '1';

  setTimeout(function() {
    logoOverlay.style.opacity = '0';
    setTimeout(function() {
      document.body.removeChild(logoOverlay);
    }, 500); // Fade out transition duration
  }, 500); // Logo overlay display duration
  

  
  // Add the slide-in class to trigger the animation
  document.body.classList.add('slide-in');

  // Remove the slide-in class after the animation completes
  setTimeout(function() {
    document.body.classList.remove('slide-in');
  }, 1500);
});


var navbar = document.querySelector('.navbar');

document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;

  if (mouseX < 50) { // Adjust the value as needed for the leftmost area
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});

var backgroundMusic = document.getElementById('background-music');

// Function to toggle play/pause of the background music
function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
}

// Add event listener to the button or any other element that triggers the toggle
var toggleButton = document.getElementById('toggle-music-button');
toggleButton.addEventListener('click', toggleMusic);
