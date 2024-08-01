import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["section", "selectedImage", "dropbtn", "navbar"];

  connect() {
    console.log("Navbar controller connected");
    this.prevScrollpos = window.scrollY;
    this.navbarTarget.style.transform = "translateY(-100%)";
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.observeSections();
  }

  disconnect() {
    console.log("Navbar controller disconnected");
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    let currentScrollPos = window.scrollY;
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

  updateDropdownButton(sectionName, imageSrc) {
    const contentHTML = `<img src="${imageSrc}" alt="" class="dot"> ${sectionName}`;
    console.log(`Updating dropbtn content: ${contentHTML}`);
    this.dropbtnTarget.innerHTML = contentHTML;
  }

  observeSections() {
    console.log("observeSections called");
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust this value as needed
    };
  
    const observerCallback = (entries, observer) => {
      console.log('Intersection observer callback triggered');
      entries.forEach(entry => {
        console.log('Intersection observer entry', entry);
        if (entry.isIntersecting) {
          const section = entry.target;
          const sectionName = section.getAttribute('data-section-name');
          const imageSrc = section.getAttribute('data-image-src');
          console.log(`Updating dropdown for section: ${sectionName} with image: ${imageSrc}`);
          this.updateDropdownButton(sectionName, imageSrc);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Define section IDs
    const sectionIds = ["section1", "section2", "section3", "section4", "section5", "section6", "section7", "section8", "section9"];
  
    // Observe each section by ID
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        console.log(`Observing section: ${section.getAttribute('data-section-name')}`);
        observer.observe(section);
      } else {
        console.log(`Section with ID ${id} not found`);
      }
    });
  }
  
}
