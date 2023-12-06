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

    const sectionId = event.currentTarget.getAttribute("href").substring(1); 
    const section = document.getElementById(sectionId);

      if (section) {
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

  







  
