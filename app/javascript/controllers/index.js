// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)



// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

function addEventListeners() {
    const divElem = document.querySelectorAll("#scroller");
    const svgElem = document.querySelectorAll("#svg");
    const pngElem = document.querySelectorAll("#png");
    const scrollAmount = -400;

    window.addEventListener("scroll", (event) => {
        const elements = document.querySelectorAll("#scroller");
        for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        var { top } = elements[i].getBoundingClientRect();
        if (top - window.innerHeight < scrollAmount) {
            if (!!svgElem[i] && !!pngElem[i]) {
            svgElem[i].style.opacity = 0;
            pngElem[i].style.opacity = 1;
            }
        } else {
            if (!!svgElem[i] && !!pngElem[i]) {
            svgElem[i].style.opacity = 1;
            pngElem[i].style.opacity = 0;
            }
        }
        }
    });

    // const button = document.querySelector('.listen');
    // const audio = document.getElementById('audioPlayer');
    // let isPlaying = false;

    // button.addEventListener('click', function() {
    //     if (isPlaying) {
    //     audio.pause();
    //     isPlaying = false;
    //     button.textContent = 'PLAY';
    //     } else {
    //     audio.play();
    //     isPlaying = true;
    //     button.textContent = 'PAUSE';
    //     }
    // });
}

addEventListeners();

window.addEventListener("turbo:load", function () {
  addEventListeners();
});


    