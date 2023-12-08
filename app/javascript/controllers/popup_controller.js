import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="popup"
export default class extends Controller {
  connect() {
  }

  static targets = ["popup"];

  toggle() {
    this.popupTarget.style.display = "block";
    setTimeout(() => {
      this.popupTarget.style.bottom = "0";
    }, 0);
  }

  close() {
    this.popupTarget.style.bottom = "-100%";
    setTimeout(() => {
      this.popupTarget.style.display = "none";
    }, 500);
  }
}
