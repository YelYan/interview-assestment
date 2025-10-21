document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  const mobileLinks = document.querySelectorAll(".mobile-menu .nav-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
});
