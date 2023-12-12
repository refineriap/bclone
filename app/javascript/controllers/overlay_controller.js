import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="overlay"
  export default class extends Controller {
    static targets = ["overlay"];

    connect() {
    }

    showOverlay() {
      this.overlayTarget.style.opacity = 1;
      this.overlayTarget.classList.add("visible");
    }
    
    hideOverlay() {
      this.overlayTarget.style.opacity = 0;
      setTimeout(() => {
        this.overlayTarget.classList.remove("visible");
      }, 150);
    }
    

}