const navTransition = () => {
  const menuSlider = document.querySelector(".menu-toggle");
  const menuBars = document.querySelector(".fa-bars");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  menuSlider.addEventListener("click", () => {
    // Toggle Navbar
    nav.classList.toggle("nav-active");

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
    menuBars.classList.toggle("fa-slash");
  });
};

navTransition();
