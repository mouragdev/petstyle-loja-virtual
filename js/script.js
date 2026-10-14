const navLinks = document.querySelectorAll("#navbar-sticky a");
const navbar = document.getElementById("navbar-sticky");
const menuButton = document.querySelector(
  '[data-collapse-toggle="navbar-sticky"]'
);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menuAberto = !navbar.classList.contains("hidden");
    const menuMobile = window.innerWidth < 768;

    if (menuAberto && menuMobile) {
      menuButton.click();
    }
  });
});