// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const menuLink = document.querySelector(".nav-link");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

menuLink.addEventListener("click", () => {});

// Section 2 Video
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

const playPause = () => {
  // video.play and video.pause are a JS built-in functions
  if (video.paused) {
    video.play();
    btn.className = "far fa-pause-circle";
    video.style.opacity = "0.7";
  } else {
    video.pause();
    btn.className = "far fa-play-circle";
    video.style.opacity = "0.3";
  }
};

btn.addEventListener("click", () => {
  playPause();
});

// tracks the play progress of the video
video.addEventListener("timeupdate", () => {
  // console.log(video.currentTime, video.duration)
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;
  if (video.ended) {
    btn.className = "far fa-play-circle";
    video.style.opacity = ".3";
  }
});

// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
