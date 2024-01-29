// app/javascript/controllers/burger_controller.js
import { Controller } from "@hotwired/stimulus";
import burgersData from '../data';

export default class extends Controller {
  static targets = ["create", "allButton", "bestToWorstButton", "under15Button", "burgerLoad"];

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
      burgerElement.setAttribute('data-burger-image', `url('${burger.image}')`); // Set data attribute for image URL
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

      // Set the background image using the data attribute
      this.setImageBackground(burgerElement);
    });
  }

  setImageBackground(element) {
    const imageUrl = element.getAttribute('data-burger-image');
    if (imageUrl) {
      element.style.backgroundImage = imageUrl;
    }
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
