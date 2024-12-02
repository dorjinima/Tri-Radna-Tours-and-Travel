const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
//gallery//
// JavaScript for lightbox effect
document.querySelectorAll('.gallery-item img').forEach(image => {
  image.addEventListener('click', function () {
    // Create the overlay div
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Create the enlarged image
    const enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    enlargedImage.classList.add('enlarged-image');
    
    // Append image to overlay and overlay to body
    overlay.appendChild(enlargedImage);
    document.body.appendChild(overlay);
    
    // Remove overlay when clicked
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
