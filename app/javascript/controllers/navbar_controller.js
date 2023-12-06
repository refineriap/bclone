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
      // Update button text with the name of the selected section
      const sectionName = event.currentTarget.innerText;
      document.getElementById('dropbtn').innerText = sectionName;

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

  // static targets = ["section"];

  // toggleDropdown() {
  //   const dropdown = document.getElementById("myDropdown");
  //   dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  // }

  // scrollToSection(event) {
  //   event.preventDefault();

  //   // Hide the dropdown menu first
  //   this.toggleDropdown();

  //   const sectionId = event.currentTarget.getAttribute("href").substring(1); // Extract section ID from href
  //   const section = document.getElementById(sectionId);

  //   if (section) {
  //     // Remove the 'active' class from all links
  //     this.element.querySelectorAll("a").forEach((link) => {
  //       link.classList.remove("active");
  //     });

  //     // Add the 'active' class to the clicked link
  //     event.currentTarget.classList.add("active");

  //     // Scroll to the section
  //     section.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "nearest",
  //     });
  //   }
  // }
}

  







  
