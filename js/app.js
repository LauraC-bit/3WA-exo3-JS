/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

// left = "1270px";
// top = "650px";

const container = document.getElementById("container");
const moveDiv = document.getElementById("moveDiv");
const array = ["calc(100% - 200px)"]

moveDiv.addEventListener("click", (event) => {
  container.classList.add("right-top");

//   if (container.classList === "right-top") {
//     container.classList.remove("right-top");
//   }

    for (let i =0; i < ; i++) {
      container.classList.add("[i]")
    }
});
