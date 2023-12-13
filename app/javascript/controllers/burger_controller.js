import { Controller } from "@hotwired/stimulus"

import burgersData from '../data';
// Connects to data-controller="burger"
export default class extends Controller {
  connect() {
    this.renderBurgers();
  }

  renderBurgers() {
    const burgerContainer = this.element;

    burgersData.forEach(burger => {
      const burgerElement = document.createElement('div');
      burgerElement.innerHTML = `
        <span>${burger.rating}</span>
        <p>${burger.location}</p>
        <p>${burger.name}</p> 
        <p>${burger.country}, ${burger.year}</p>
        <p>$${burger.price.toFixed(2)}</p>
      `;
      burgerContainer.appendChild(burgerElement);
    });
  }
}

{/* <img src="${burger.image}" alt="${burger.name} Image"></img> */}