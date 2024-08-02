import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["section", "selectedImage", "dropbtn", "navbar"];
  sectionIds = ["section1", "section2", "section3", "section4", "section5", "section6", "section7", "section8", "section9"];
  
  connect() {
    console.log("Navbar controller connected");
    this.prevScrollpos = window.scrollY;
    this.navbarTarget.style.transform = "translateY(-100%)";
    window.addEventListener("scroll", this.handleScroll.bind(this));
    window.addEventListener("scroll", this.checkInfiniteScroll.bind(this));
    this.observeSections();
  }

  disconnect() {
    console.log("Navbar controller disconnected");
    window.removeEventListener("scroll", this.handleScroll.bind(this));
    window.removeEventListener("scroll", this.checkInfiniteScroll.bind(this));
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
    this.dropbtnTarget.innerHTML = contentHTML;
  }

  observeSections() {
    console.log("observeSections called");
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.95 
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const sectionName = section.getAttribute('data-section-name');
          const imageSrc = section.getAttribute('data-image-src');
          this.updateDropdownButton(sectionName, imageSrc);
        }
      });
    };

    this.observer = new IntersectionObserver(observerCallback, observerOptions);
    this.observeAllSections();
  }

  observeAllSections() {
    console.log("Observing all sections");
    this.sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        console.log(`Observing section: ${section.getAttribute('data-section-name')}`);
        this.observer.observe(section);
      }
    });
  }

  checkInfiniteScroll() {
    console.log("Checking infinite scroll");
    console.log(`Window inner height: ${window.innerHeight}`);
    console.log(`Window scrollY: ${window.scrollY}`);
    console.log(`Document body offset height: ${document.body.offsetHeight}`);
    const buffer = 50; // Add a small buffer
    if ((window.innerHeight + window.scrollY + buffer) >= document.body.offsetHeight) {
      console.log("At bottom of page, moving first section to bottom");
      this.moveFirstSectionToBottom();
    }
  }

  moveFirstSectionToBottom() {
    const firstSection = document.getElementById(this.sectionIds[0]);
    if (firstSection) {
      console.log(`Moving section ${firstSection.id} to bottom`);
      firstSection.parentNode.appendChild(firstSection);
      this.sectionIds.push(this.sectionIds.shift());
      this.observer.disconnect();
      this.observeAllSections();
    }
  }
}
