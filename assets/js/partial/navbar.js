document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });

  // Collapsible dropdown
  document.querySelectorAll(".navbar-link").forEach(function (navbarLink) {
    navbarLink.addEventListener("click", function () {
      navbarLink.nextElementSibling.classList.toggle("is-hidden-mobile");
    });
  });

  // Add the "is-hidden-mobile" class to all submenu elements
  document
    .querySelectorAll(".navbar-dropdown")
    .forEach(function (navbarDropdown) {
      navbarDropdown.classList.add("is-hidden-mobile");
    });

  // Transition when scrolling
  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("main_nav");
    if (window.scrollY > 50) {
      navbar.classList.add("nav__scrolled");
    } else {
      navbar.classList.remove("nav__scrolled");
    }
  });
});
