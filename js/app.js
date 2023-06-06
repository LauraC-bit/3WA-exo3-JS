/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

// left = "1270px";
// top = "650px";



// const moveDiv = document.getElementById("moveDiv");
// const hideModal = document.getElementById("hideModal");
// const red = document.getElementById("red");

// let start = 0;


// moveDiv.addEventListener("click", function () {
//   start++;
//   if (start === 4) {
//     red.style.left = "0px";
//     start = 0;
//   } else if (start === 1) {
//     red.style.left = "calc(100vw - 240px)";
//   } else if (start === 2) {
//     red.style.top = "calc(100vw- 200px)";
//   } else if (start === 3) {
//     red.style.left = "0px";
//   }
// });

// CORRECTION

const redBlock = document.querySelector(".red");

const clickBtn = document.getElementById("moveDiv");
const hideBtn = document.getElementById("hideModal");

const modal = document.querySelector(".modal");

const zero = "0px";

const getOppositeSide = (redBlockSize) => {
  return `calc(100% - ${redBlockSize}px)`;
}

clickBtn.addEventListener("click", (event) => {
  const redBlockSize = redBlock.clientWidth;
  const left = redBlock.style.left;
  const top = redBlock.style.top;
  const isOnLeft = left === zero || !left;
  const isOnTop = top === zero || !top;

  const isOnBottom = !isOnTop;
  const isOnRight = !isOnLeft;

  const isOnTopLeft = isOnTop && isOnLeft;
  const isOnTopRight = isOnTop && isOnRight;
  const isOnBottomLeft = isOnBottom && isOnLeft;
  const isOnBottomRight = isOnBottom && isOnRight;
  

  if (isOnTopLeft) {
    redBlock.style.left = getOppositeSide(redBlockSize);
    redBlock.style.top = zero;
    modal.classList.remove("active");
    document.body.classList.remove("modal-active");
  } else if (isOnTopRight) {
    redBlock.style.top = getOppositeSide(redBlockSize)
    redBlock.style.left = getOppositeSide(redBlockSize); 
  } else if (isOnBottomRight) {
    redBlock.style.left = zero;
    redBlock.style.top = getOppositeSide(redBlockSize);
  } else if (isOnBottomLeft) {
    redBlock.style.top = zero;
    redBlock.style.left = zero;
    modal.classList.add("active");
    document.body.classList.add("modal-active");
  }
})

hideBtn.addEventListener("click", (event) => {
  modal.classList.remove("active");
    document.body.classList.remove("modal-active");
})

// -----------------------------------------------------------------

// AUTRE METHODE

// let counter = 0;

// if (counter === 0) {
//   redBlock.style.left = getOppositeSide(redBlockSize);
//   redBlock.style.top = zero;
//   counter++;
// } else if (counter === 1) {
//   redBlock.style.top = getOppositeSide(redBlockSize)
//   redBlock.style.left = getOppositeSide(redBlockSize);
//   counter++;
// } else if (counter === 2) {
//   redBlock.style.left = zero;
//   redBlock.style.top = getOppositeSide(redBlockSize);
//   counter++;
// } else if (counter === 3) {
//   redBlock.style.top = zero;
//   redBlock.style.left = zero;
//   counter = 0;
// }

