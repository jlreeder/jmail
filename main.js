const Router = require("./router.js");

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.sidebar-nav');
  const content = document.querySelector('.content');

  navLinks.addEventListener("click", (e) => {
    e.preventDefault();

    const element = e.target;
    const newLocation = element.innerText.toLowerCase();
    window.location.hash = newLocation;
  });

  const router = new Router(content);
  router.start();

});
