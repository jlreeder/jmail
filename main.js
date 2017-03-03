document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.sidebar-nav li');
  navLinks.addEventListener("click", (e) => {
    const element = e.target;
    const newLocation = element.innerText.toLowerCase();
    window.location.hash = newLocation;
  });

});
