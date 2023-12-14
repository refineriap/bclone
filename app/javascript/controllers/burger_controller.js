import { Controller } from "@hotwired/stimulus"

import burgersData from '../data';

export default class extends Controller {
  connect() {
    this.renderBurgers();
  }

  renderBurgers() {
    const burgerContainer = this.element;

    burgersData.forEach(burger => {
      const burgerElement = document.createElement('div');
      burgerElement.classList.add('burger--item');
      burgerElement.style.backgroundImage = `url('${burger.image}')`;
      burgerElement.style.backgroundPosition = 'center';
      burgerElement.style.backgroundSize = 'cover';
      const formattedRating = burger.rating.toFixed(1);
      burgerElement.innerHTML = `
        <p class="burger-rating">${formattedRating}</p>
        <p class="burger-location">${burger.location}</p>
        <p class="burger-name">${burger.name}</p> 
        <p class="burger-country">${burger.country}, ${burger.year}</p>
        <p class="burger-price">$${burger.price.toFixed(2)}</p>
      `;
      burgerContainer.appendChild(burgerElement);
    });
  }
}
