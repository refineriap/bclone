import { Controller } from "@hotwired/stimulus"
// import anime from "animejs"
// Connects to data-controller="animation"
export default class extends Controller {
  connect() {
    anime({
      targets: this.element,
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
    });
  }
}
