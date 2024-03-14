import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["section", "selectedImage", "dropbtn", "navbar"];

  connect() {
    this.prevScrollpos = window.pageYOffset;
    this.navbarTarget.style.transform = "translateY(-100%)";
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    let currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.navbarTarget.style.top = "0";
    } else {
      this.navbarTarget.style.top = "100px"; 
    }
    this.prevScrollpos = currentScrollPos;
  }

  toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  scrollToSection(event) {
    event.preventDefault();
    const imageSrc = event.currentTarget.getAttribute("data-image-src");
    this.selectedImageTarget.src = imageSrc;

    this.toggleDropdown();
    const sectionClassName = event.currentTarget.getAttribute("href").substring(1);
    const sectionName = event.currentTarget.innerText;
    const contentHTML = `<img src="${imageSrc}" alt="" class="dot"> ${sectionName}`;

    this.dropbtnTarget.innerHTML = contentHTML;

    const sections = document.getElementsByClassName(sectionClassName);

    if (sections.length > 0) {
      const section = sections[0];

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
