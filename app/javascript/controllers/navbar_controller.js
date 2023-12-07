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
  
    this.toggleDropdown();
  
    const sectionClassName = event.currentTarget.getAttribute("href").substring(1);
    const sections = document.getElementsByClassName(sectionClassName);
  
    if (sections.length > 0) {
      const section = sections[0]; // Assuming you want to scroll to the first element with the specified class
      const sectionName = event.currentTarget.innerText;
      document.getElementById('dropbtn').innerText = sectionName;
  
      this.element.querySelectorAll("a").forEach((link) => {
        link.classList.remove("active");
      });
  
      event.currentTarget.classList.add("active");
  
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }  
}

  







  
