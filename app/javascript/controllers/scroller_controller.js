import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="scroller"
export default class extends Controller {
  connect() {
    this.scrollHandler = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.scrollHandler);
  }

  disconnect() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  handleScroll() {
    const scrollAmount = -400;
    const elements = document.querySelectorAll(".scroller");

    elements.forEach((element, index) => {
      const svgElem = element.querySelector("#svg");
      const pngElem = element.querySelector("#png");
      const rect = element.getBoundingClientRect();
      const top = rect.top;

      if (top - window.innerHeight < scrollAmount) {
        if (svgElem && pngElem) {
          svgElem.style.opacity = 0;
          pngElem.style.opacity = 1;
        }
      } else {
        if (svgElem && pngElem) {
          svgElem.style.opacity = 1;
          pngElem.style.opacity = 0;
        }
      }
    });
  }
}

