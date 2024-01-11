import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["overlay"];

  connect() {
    
    if (window.innerWidth < 768) {
      this.initializeMobileOverlay();
    }
  }

  initializeMobileOverlay() {
  }

  showOverlay() {
    if (window.innerWidth < 768) {
      this.overlayTarget.style.opacity = 1;
      this.overlayTarget.classList.add("visible");
      // this.arrowTarget.classList.add("hidden"); 
    }
  }
  
  hideOverlay() {
    if (window.innerWidth < 768) {
      setTimeout(() => {
        this.overlayTarget.style.opacity = 0;
        this.overlayTarget.classList.remove("visible");
        // this.arrowTarget.classList.remove("hidden");
      }, 3800); 
    }
  }
}

