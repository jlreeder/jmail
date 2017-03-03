class Router {
  constructor (node) {
    this.node = node;
  }

  start () {
    window.addEventListener("hashchange", (e) => {
      this.render();
    });

    this.render();
  }

  activeRoute () {
    let hashFragment = window.location.hash.slice(1);
    return hashFragment;
  }

  render () {
    this.node.innerHTML = "";
    let currentRoute = this.activeRoute();
    let newP = document.createElement('p');
    newP.innerHTML = currentRoute;
    this.node.appendChild(newP);
  }
}

module.exports = Router;
