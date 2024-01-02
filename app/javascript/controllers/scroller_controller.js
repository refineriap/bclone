import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroller"
export default class extends Controller {
  connect() {
    const divElem = document.querySelectorAll("#scroller");
    const svgElem = document.querySelectorAll("#svg");
    const pngElem = document.querySelectorAll("#png");
    const scrollAmount = -400;

    window.addEventListener("scroll", (event) => {
        const elements = document.querySelectorAll("#scroller");
        for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        var { top } = elements[i].getBoundingClientRect();
        if (top - window.innerHeight < scrollAmount) {
            if (!!svgElem[i] && !!pngElem[i]) {
            svgElem[i].style.opacity = 0;
            pngElem[i].style.opacity = 1;
            }
        } else {
            if (!!svgElem[i] && !!pngElem[i]) {
            svgElem[i].style.opacity = 1;
            pngElem[i].style.opacity = 0;
            }
        }
        }
    });
  }
}
