class Router {
  constructor (node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start () {
    window.addEventListener("hashchange", (e) => {
      this.render();
    });

    this.render();
  }

  activeRoute () {
    let hashFragment = window.location.hash.slice(1);
    return this.routes[hashFragment];
  }

  render () {
    this.node.innerHTML = "";
    let component = this.activeRoute();
    if (component) {
      this.node.appendChild(component.render());
    }
  }
}

module.exports = Router;
