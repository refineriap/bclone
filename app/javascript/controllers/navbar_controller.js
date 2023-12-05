import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  connect() {
  }
  static targets = ["section"];

  toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  }

  scrollToSection(event) {
    event.preventDefault();

    // Hide the dropdown menu first
    this.toggleDropdown();

    const sectionId = event.currentTarget.getAttribute("href").substring(1); // Extract section ID from href
    const section = document.getElementById(sectionId);

    if (section) {
      // Remove the 'active' class from all links
      this.element.querySelectorAll("a").forEach((link) => {
        link.classList.remove("active");
      });

      // Add the 'active' class to the clicked link
      event.currentTarget.classList.add("active");

      // Scroll to the section
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }
}

  // static targets = ["section"];

  // toggleDropdown() {
  //   const dropdown = document.getElementById("myDropdown");
  //   dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  // }

  // scrollToSection(event) {
  //   event.preventDefault();

  //   const sectionId = event.currentTarget.getAttribute("href").substring(1); // Extract section ID from href
  //   const section = document.getElementById(sectionId);

  //   if (section) {
  //     // Add a delay to allow time for the scroll to finish before hiding the dropdown
  //     setTimeout(() => {
  //       // Hide the dropdown menu
  //       this.toggleDropdown();

  //       // Remove the 'active' class from all links
  //       this.element.querySelectorAll("a").forEach((link) => {
  //         link.classList.remove("active");
  //       });

  //       // Add the 'active' class to the clicked link
  //       event.currentTarget.classList.add("active");
  //     }, 500); // You may need to adjust the delay based on your scroll duration
  //   }
    
  //   // Scroll to the section
  //   section.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //     inline: "nearest",
  //   });
  // }
  // toggleDropdown(event) {
  //   event.preventDefault();
  //   var dropdown = document.getElementById("myDropdown");
  //   dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  // }

  // static targets = ["section"];

  // scrollToSection(event) {
  //   event.preventDefault();

  //   const sectionId = event.currentTarget.getAttribute("href").substring(1); // Extract section ID from href
  //   const section = document.getElementById(sectionId);

  //   if (section) {
  //     section.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center", // Align the top of the section with the top of the viewport
  //       inline: "nearest", // Keep the element as close to the center of the viewport as possible
  //     });

  //     // Remove the 'active' class from all links
  //     this.element.querySelectorAll("a").forEach((link) => {
  //       link.classList.remove("active");
  //     });

  //     // Add the 'active' class to the clicked link
  //     event.currentTarget.classList.add("active");
  //   }
  // }








  
