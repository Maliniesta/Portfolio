const buttons = document.querySelectorAll('.primary-btn');
const preview = document.getElementById('preview');

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


const image = document.querySelector('.image-clickable'); 

image.addEventListener('click', () => {

    window.location.href = '../index.html';
});

const menuButton = document.querySelector('.menu-btn');
const liste = document.querySelector('.liste');

// Ajouter un événement clic sur le bouton
menuButton.addEventListener('click', () => {
    // Alterner entre afficher et cacher la liste
    if (liste.style.display === 'flex') {
        liste.style.display = 'none'; // Cache la liste
    } else {
        liste.style.display = 'flex'; // Affiche la liste
    }
});

menuButton.addEventListener('click', () => {
    liste.classList.toggle('hidden');
    liste.classList.toggle('visible');
});











    
    

