fetch('../json/projects.json') 
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {

    const siteWeb = document.querySelector('.site-web');
    const applications = document.querySelector('.appli-web');
    const games = document.querySelector('.games-web');

    for (let i = 0; i < data.siteWeb.length; i++) {
        siteWeb.innerHTML += `
        <div class="item">
        <h6>${data.siteWeb[i].titre}</h6>
          <img src="${data.siteWeb[i].image}" alt="Image du projet ${data.siteWeb[i].titre}">
          <p>${data.siteWeb[i].Description}</p>
          <a href="${data.siteWeb[i].url}" target="_blank">Voir le site</a>
          </div>
          `;
      }

      for (let i = 0; i < data.applications.length; i++) {
        applications.innerHTML += `
        <div class="item">
          <h6>${data.applications[i].titre}</h6>
          <img src="${data.applications[i].image}" alt="Image du projet ${data.applications[i].titre}">
          <p>${data.applications[i].Description}</p>
          <a href="${data.applications[i].url}" target="_blank">Voir l'application</a>
          </div>
        `;
      }

      for (let i = 0; i < data.games.length; i++) {
        games.innerHTML += `
        <div class="item">
            <h6>${data.games[i].titre}</h6>
            <img src="${data.games[i].image}" alt="Image du projet ${data.games[i].titre}">
            <p>${data.games[i].Description}</p>
            <a href="${data.games[i].url}" target="_blank">Jouer au jeu</a>
            </div>
        `;
      }
    
  })
  .catch(error => console.error('Une erreur est survenue :', error));