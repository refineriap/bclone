import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="audio"
export default class extends Controller {
  connect() {
    const button = document.querySelector('.listen');
    const audio = document.getElementById('audioPlayer');
    let isPlaying = false;

    button.addEventListener('click', function() {
        if (isPlaying) {
        audio.pause();
        isPlaying = false;
        button.textContent = 'Listen';
        } else {
        audio.play();
        isPlaying = true;
        button.textContent = 'Pause';
        }
    });
  }
}
