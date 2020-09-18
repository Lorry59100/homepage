const titreSpans = document.querySelectorAll('h1 span');
const medias = document.querySelectorAll('.medias .bulle');
const links = document.querySelectorAll('.liens h2');
const l1 = document.querySelector('.l1')
const l2 = document.querySelector('.l2')

window.addEventListener('load', () => {

    /* Création de la Timeline */
    const TL = gsap.timeline({paused: true});

    /* On va coller des méthodes a notre Timeline TL, la TL va etre un container à animation */
    TL
    .staggerFrom(titreSpans, 2, {top: -50, opacity: 0, ease: "power2.out"}, 0.5)
    .from(l1, 1, {width:0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width:0, ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {width:0, ease: "power2.out"}, 1, '-=2')
    .staggerFrom(links, 2, {top: -50, opacity: 0, ease: "power2.out"}, 0.5);
    TL.play();
})