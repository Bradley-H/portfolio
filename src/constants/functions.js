// STORES //
import { global } from '../stores/GlobalStore.js'
// IMPORTS //
import { selections } from './selections.js'

let controller;
let slidescene;
let detailScene;

export function animateSlide(){
    // INIT CONTROLLER //
    controller = new ScrollMagic.Controller();
    // SELECTIONS //
    let sliders = document.querySelectorAll(selections.sliders)
    let nav =  document.querySelector(selections.nav)
    sliders.forEach((slide) => {
        let revealImg = slide.querySelector(selections.revealimg)
        let revealText = slide.querySelector(selections.revealtext)
        let img = slide.querySelector(selections.revealingimg)
        // GSAP //
        const slideTL = gsap.timeline({defaults: {duration: 1, ease: "power2.inOut"}});
        slideTL.fromTo(revealImg, {x: "0%"}, {x: "100%"});
        slideTL.fromTo(img, {scale: 2}, {scale: 1}, "-=.7");
        slideTL.fromTo(revealText, {x: "0%"}, {x: "100%"}, "-=.2")
        slideTL.fromTo(nav, {y: "-100%"}, {y: '1%'}, "-=.4 ")
        // CREATE SCENE //
        slidescene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0.27,
            reverse: false
        }).setTween(slideTL)        
          .addTo(controller)
    })
}


// FOLLOWS THE CURSOR
export function cursor(e){
    let mouse = document.querySelector(selections.mouse)
    mouse.style.top = e.pageY + "px"
    mouse.style.left = e.pageX + "px"
}

// TOGGLES THE CLIPPATH FOR NAVIGATION
export function navToggle(e){
    if(!e.target.classList.contains('active')){

    e.target.classList.add('active')

        gsap.to(selections.line1, 0.5, {rotate: "45", translateY: 2, translateX: 6, backgroundColor: "black"})
        gsap.to(selections.line2, 0.5, {rotate: "-45", translateY: -7, translateX: 5, width: "1.5rem", backgroundColor: "black"})
        gsap.to(selections.line3, 0.5, {opacity: "0"})
        gsap.to(selections.logo, 1.5, {color: "black"})
        gsap.to(selections.navbar, 1.8, {clipPath: "circle(2500px at 100% -10%"})
        document.body.classList.add('hide')
    } else {
        e.target.classList.remove('active')

        gsap.to(selections.line1, 1.4, {rotate: "0", translateY: 0, translateX: 0, backgroundColor: "white"})
        gsap.to(selections.line2, 1.4, {rotate: "0", translateY: 0, translateX: 0, width: "1rem", backgroundColor: "white"})
        gsap.to(selections.line3, 1.4, {opacity: "1"})
        gsap.to(selections.logo, 1, {color: "white"})
        gsap.to(selections.navbar, 1, {clipPath: "circle(2px at 100% -10%"})
        document.body.classList.remove('hide')
    }
}


export function detailAnimation(){
    controller = new ScrollMagic.Controller();
    let slides = document.querySelectorAll(selections.sliders);
    slides.forEach((slide) => {
        const slideTL = gsap.timeline({defaults: {duration: 1}})
        slideTL.fromTo(slide, {opacity: 1}, {opacity: 0})
        detailScene = new ScrollMagic.Scene({
            triggerElement: slide,
            duration: '100%',
            triggerHook: 0
        }).setPin(slide, {pushFollowers: false})
          .setTween(slideTL)
          .addTo(controller)
    })
}