document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.sidebar-nav');
  navLinks.addEventListener("click", (e) => {
    e.preventDefault();

    const element = e.target;
    const newLocation = element.innerText.toLowerCase();
    window.location.hash = newLocation;
  });

});
