fetch('http://localhost:3000/apprenant')
  .then((response) => response.json())
  .then((data) => {
    const div = document.getElementById('app');

    data.forEach((apprenant) => {
      console.log(apprenant);
      div.innerHTML += `
        <h2> Nom : ${apprenant.nom}</h2>
        <h2> Prénom: ${apprenant.prenom}</h2>
        <h2> Numéro: ${apprenant.numéro_de_téléphone}</h2>
      `;
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la requête fetch :', error);
  });
