

  // Récupération des projets depuis l'API works
const reponse = await fetch("http://localhost:5678/api/works");
const travaux = await reponse.json();

const mesProjets = document.querySelector(".gallery");

function genererTravaux(travaux) {
  for (let i = 0; i < travaux.length; i++) {
    const figureProjet = document.createElement("figure");

    const imageProjet = document.createElement("img");
    imageProjet.src = travaux[i].imageUrl;

    const titreProjet = document.createElement("figcaption");
    titreProjet.innerText = travaux[i].title;

    figureProjet.appendChild(imageProjet);
    figureProjet.appendChild(titreProjet);

    mesProjets.appendChild(figureProjet);

  }
}

    genererTravaux(travaux);


  // Récupération des catégories depuis l'API categories 
  const reponseCategories = await fetch("http://localhost:5678/api/categories");
  const categories = await reponseCategories.json();


const menuCategories = document.querySelector(".menu-categories");   
const boutonTous = document.createElement("button");
boutonTous.innerText = "Tous";
boutonTous.classList.add("categorie-button");
menuCategories.appendChild(boutonTous);

function genererCategories(categories) {
  for (let i = 0; i < categories.length; i++) {
    const boutonCategorie = document.createElement("button");
    boutonCategorie.innerText = categories[i].name;
    boutonCategorie.setAttribute("data-category-id", categories[i].id);
    menuCategories.appendChild(boutonCategorie);


    boutonCategorie.classList.add("categorie-button");
    boutonCategorie.addEventListener("click", function() {
      const categoryId = this.getAttribute("data-category-id");
    });
  }
}

    genererCategories(categories);


