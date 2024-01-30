import { Controller } from "@hotwired/stimulus"

import burgersData from '../assets/data.js'

export default class extends Controller {
  static targets = ["create", "allButton", "bestToWorstButton", "under15Button"];

  connect() {
    this.renderBurgers();

    this.allButtonTarget.addEventListener('click', () => this.sortBurgers());
    this.bestToWorstButtonTarget.addEventListener('click', () => this.sortBurgersByRating());
    this.under15ButtonTarget.addEventListener('click', () => this.filterBurgersUnder15());
  }

  renderBurgers(burgers = burgersData) {
    const burgerContainer = this.createTarget;
    burgerContainer.innerHTML = ''; // Clear existing content

    burgers.forEach(burger => {
      const burgerElement = document.createElement('div');
      burgerElement.classList.add('burger--item');
      burgerElement.style.backgroundImage = `url('${burger.image}')`;
      burgerElement.style.backgroundPosition = 'center';
      burgerElement.style.backgroundSize = 'cover';
      const formattedRating = burger.rating.toFixed(1);

      burgerElement.innerHTML = `
        <p class="burger-rating">${formattedRating}</p>
        <p class="burger-location">${burger.location}</p>
        <p class="burger-name">${burger.name} $${burger.price.toFixed(2)}</p>
        <p class="burger-country">${burger.country}, ${burger.year}</p>
      `;

      const ratingElement = burgerElement.querySelector('.burger-rating');
      if (ratingElement && parseFloat(formattedRating) <= 5.0) {
        ratingElement.style.backgroundColor = '#F43B10';
      }

      burgerContainer.appendChild(burgerElement);
    });
  }

  sortBurgers() {
    const sortedBurgers = [...burgersData].sort((a, b) => b.year - a.year);
    this.renderBurgers(sortedBurgers);
  }

  sortBurgersByRating() {
    const sortedBurgers = [...burgersData].sort((a, b) => b.rating - a.rating);
    this.renderBurgers(sortedBurgers);
  }

  filterBurgersUnder15() {
    const filteredBurgers = burgersData.filter(burger => burger.price < 15);
    this.renderBurgers(filteredBurgers);
  }
}

  