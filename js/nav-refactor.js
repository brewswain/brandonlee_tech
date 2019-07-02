const menuSlider = document.querySelector(".menu-toggle");
const menuBars = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
let query = window.matchMedia("(max-width: 768px)");

if (query.matches) {
  const navTransition = () => {
    let menuSliderToggle = function() {
      if (nav.classList.contains("nav-active")) {
        nav.classList.replace("nav-active", "nav-collapse");
      } else if (nav.classList.contains("nav-collapse")) {
        nav.classList.replace("nav-collapse", "nav-active");
      } else {
        nav.classList.toggle("nav-active");
      }
    };

    menuSlider.addEventListener("click", () => {
      menuSliderToggle();
    });
    nav.addEventListener("click", () => {
      menuSliderToggle();
    });
    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 +
    //       0.3}s`;
    //   }
    // });

    menuBars.classList.replace("fa-slash", "fa-bars");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    //Menu-Toggle animation
  };

  navTransition();
}

li.addEventListener("click", () => {
  fullpage_api.setAllowScrolling(true);
});
