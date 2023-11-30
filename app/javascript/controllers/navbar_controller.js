import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    var dropdownButton = document.getElementById("dropbtn");
    var dropdownContent = document.getElementById("myDropdown");


    function handleDropdownItemClick(sectionId) {
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
      dropdownButton.innerText = document.querySelector(sectionId).innerText;
      dropdownContent.style.display = 'none';
    }


    function toggleDropdown() {
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    }


    window.onscroll = function () {
      var sections = document.querySelectorAll('.section');
      var currentSection = null;

      sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      });

      if (currentSection) {
        dropdownButton.innerText = currentSection.querySelector("img").innerText;
      }
    };
  }
}
