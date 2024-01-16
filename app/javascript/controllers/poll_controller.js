import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["result"];

    connect() {
    }

    vote(event) {
        // Get the clicked button from the event target
        const clickedButton = event.target;

        // Disable all buttons except the clicked one
        this.element.querySelectorAll('[data-target="poll.button"]').forEach(button => {
            if (button !== clickedButton) {
                button.disabled = true;
                button.classList.add("disabled");
            }
        });

        // Update background color for the clicked button
        clickedButton.classList.add("selected");

        // Update percentage of votes in the corresponding poll div
        const currentPercentage = parseInt(this.resultTarget.innerText.match(/\d+/)[0]) || 0;
        const newPercentage = currentPercentage + 1;
        this.resultTarget.innerText = newPercentage + "% AGREED";
    }
}

