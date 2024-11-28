function toggleMenu() {
  const menuList = document.getElementById("nav_links");
  if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
    menuList.style.maxHeight = "600px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

const removeActiveClassOnResize = () => {
  const navLinks = document.querySelectorAll(".nav_links a");
  if (window.innerWidth < 768) {
    navLinks.forEach((link) => link.classList.remove("active"));
  }
};
window.addEventListener("resize", removeActiveClassOnResize);
removeActiveClassOnResize();

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
