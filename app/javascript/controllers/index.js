// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
var dropdownButton = document.getElementById("dropbtn");
var dropdownContent = document.getElementById("myDropdown");


function handleDropdownItemClick(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  dropdownButton.innerText = document.querySelector(sectionId + " h2").innerText;
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

