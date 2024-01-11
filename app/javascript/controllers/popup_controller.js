import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static targets = ["popup"];

  connect() {
    this.state = {
      isOpen: false,
      isTransitioning: false,
    };
  }

  toggle() {
    if (this.state.isTransitioning) {
      return;
    } 

    this.state.isOpen ? this.closePopup() : this.openPopup();
  }

  openPopup() {
    this.state.isOpen = true;
    this.state.isTransitioning = true;

    this.popupTarget.classList.add("active");
    this.popupTarget.addEventListener("transitionend", this.transitionEndHandler);
  }

  closePopup() {
    this.state.isOpen = false;
    this.state.isTransitioning = true;

    this.popupTarget.classList.remove("active");

    this.popupTarget.addEventListener("transitionend", this.transitionEndHandler);
  }

  transitionEndHandler = () => {
    this.popupTarget.removeEventListener("transitionend", this.transitionEndHandler);
    this.state.isTransitioning = false;
  };
}