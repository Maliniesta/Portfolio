document.addEventListener('DOMContentLoaded', function () {
    const scrollingText = document.getElementById('scrolling-text');
    const statut = document.querySelector('.statut');
    let position = statut.offsetWidth; // Position initiale (hors de la div, à droite)

    function animateText() {
        position -= 2; 
        if (position < -scrollingText.offsetWidth) {
            position = statut.offsetWidth; 
        }
        scrollingText.style.left = `${position}px`; // Applique la position
        requestAnimationFrame(animateText); // Animation continue
    }

    // Initialisation de l'animation
    scrollingText.style.position = "absolute";
    animateText();
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.story-img, .career-img');
    const texts = document.querySelectorAll('.presentation, .parcours');

    function checkVisibility() {
        const triggerHeight = window.innerHeight * 0.8; // Ajuster le seuil d'activation

        // Vérifie chaque image
        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top;
            const imageBottom = image.getBoundingClientRect().bottom;
            if (imageTop < triggerHeight && imageBottom > 0) {
                image.classList.add('visible'); // Active l'animation
            }
        });

        // Vérifie chaque texte
        texts.forEach(text => {
            const textTop = text.getBoundingClientRect().top;
            const textBottom = text.getBoundingClientRect().bottom;
            if (textTop < triggerHeight && textBottom > 0) {
                text.classList.add('visible'); // Active l'animation
            }
        });
    }

    // Exécute la vérification initiale et écoute le défilement
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

