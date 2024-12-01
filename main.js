// Responsive Navbar
function toggleMenu() {
  const menuList = document.getElementById("nav_links");
  if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
    menuList.style.maxHeight = "600px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// Remove Navbar Active Class on smaller screens
const removeActiveClassOnResize = () => {
  const navLinks = document.querySelectorAll(".nav_links a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    if (window.innerWidth < 769) {
      link.classList.remove("active");
    } else {
      if (link.pathname === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
};


window.addEventListener("resize", removeActiveClassOnResize);
removeActiveClassOnResize();

// Tiny Slider
if (document.querySelector(".slider-wrapper")) {
  const tnsslider = tns({
    container: ".slider-wrapper",
    items: 1,
    slideBy: 1,
    speed: 700,
    nav: true,
    navPosition: "bottom",
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayButtonOutput: false,
    controls: true,
    controlsContainer: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
  });
}

