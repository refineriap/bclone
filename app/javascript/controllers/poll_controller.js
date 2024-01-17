import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["result", "button", "hellNoMessage", "unDecided"];

    connect() {
        this.loadVotes(); // Load previous votes on page load
    }

    vote(event) {
        const clickedButton = event.target;

        // Disable all buttons except the clicked one
        this.element.querySelectorAll('[data-poll-target="button"]').forEach(button => {
            if (button !== clickedButton) {
                button.disabled = true;
                button.classList.add("disabled");
            }
        });

        clickedButton.classList.add("selected");

        // Update and store the vote count in local storage
        const currentPercentage = parseInt(this.resultTarget.innerText.match(/\d+/)[0]) || 0;
        const newPercentage = currentPercentage + 1;
        this.resultTarget.innerText = newPercentage + "% AGREED";
        this.storeVotes(newPercentage);
    }

    storeVotes(voteCount) {
        // Store the vote count in local storage
        localStorage.setItem("pollVotes", voteCount);
    }

    loadVotes() {
        // Load previous votes from local storage on page load
        const storedVotes = localStorage.getItem("pollVotes");
        if (storedVotes !== null) {
            this.resultTarget.innerText = storedVotes + "% AGREED";
        }
    }

    voteHellNo() {
        
        this.hellNoMessageTarget.style.display = "block";
        this.buttonTargets.forEach(button => {
            button.disabled = true;
            button.classList.add("disabled");
        });
    }

    undecidedMessage() {
        this.unDecidedTarget.style.display = "block";
        this.buttonTargets.forEach(button => {
            button.disabled = true;
            button.classList.add("disabled");
        });
    }
}
