// script.js

// Sélectionne l'élément contenant le titre
const hero = document.querySelector('.hero');

// Ajoute un événement au défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Si on défile de plus de 50px
        hero.classList.add('scrolled'); // Ajoute la classe scrolled
    } else {
        hero.classList.remove('scrolled'); // Enlève la classe si on remonte
    }
});



