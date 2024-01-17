import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
  }

  goBackEarth() {
    const targetSection = document.querySelector(".earth");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.history.back();
    }
  }
  goBackBurger() {
    const targetSection = document.querySelector(".burger");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.history.back();
    }
  }
}

