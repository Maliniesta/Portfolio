const buttons = document.querySelectorAll('.primary-btn');
const preview = document.getElementById('preview');

// Détecter si l'appareil est tactile
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', function () {
            const image = this.getAttribute('data-image'); 
            preview.style.backgroundImage = `url(${image})`; 
            preview.style.display = 'block'; 
        });

        buttons[i].addEventListener('mouseout', function () {
            preview.style.display = 'none'; 
            preview.style.backgroundImage = ''; 
        });
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const url = this.getAttribute('data-url'); 
        window.location.href = url; 
    });
}

const image = document.querySelector('.image-clickable'); 

image.addEventListener('click', () => {
    window.location.href = '../index.html';
});

const menuButton = document.querySelector('.menu-btn');
const liste = document.querySelector('.liste');

// Ajouter un événement clic sur le bouton
menuButton.addEventListener('click', () => {
    if (liste.style.display === 'flex') {
        liste.style.display = 'none'; 
    } else {
        liste.style.display = 'flex'; 
    }
});

menuButton.addEventListener('click', () => {
    liste.classList.toggle('hidden');
    liste.classList.toggle('visible');
});












    
    

