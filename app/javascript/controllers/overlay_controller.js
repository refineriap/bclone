import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="overlay"
export default class extends Controller {
  static targets = ["overlay"];

  connect() {
  }
  showOverlay() {
    this.overlayTarget.style.opacity = 1;
    this.overlayTarget.classList.add("visible");
    // this.arrowTarget.classList.add("hidden"); 
  }
  
  hideOverlay() {
    setTimeout(() => {
      this.overlayTarget.style.opacity = 0;
      this.overlayTarget.classList.remove("visible");
      // this.arrowTarget.classList.remove("hidden");
    }, 3800); 
  }
}    
