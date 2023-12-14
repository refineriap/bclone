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
      burgerElement.innerHTML = `
        <p class="burger-rating">${burger.rating}</p>
        <p class="burger-location">${burger.location}</p>
        <p class="burger-name">${burger.name}</p> 
        <p class="burger-country">${burger.country}, ${burger.year}</p>
        <p class="burger-price">$${burger.price.toFixed(2)}</p>
      `;
      burgerContainer.appendChild(burgerElement);
    });
  }
}

{/* <img src="${burger.image}" alt="${burger.name} Image"></img> */}