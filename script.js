// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    { nome: "Colnago", peso: 35},
    { nome: "Bergamont", peso: 48},
    { nome: "Factor", peso: 45},
    { nome: "Trek", peso: 41},
    { nome: "Amflow", peso: 49},
    { nome: "Scott", peso: 38}
];

let pesoPiuBasso = 0;


for (let i = 0; i < bici.length; i++) {
    const biciComplete = bici[i];
    //console.log(pesoBici.peso);
    pesiBici = biciComplete.peso
    console.log(pesiBici);
    
}

pesoPiuBasso = Math.min(...pesiBici);
console.log(pesoPiuBasso);





// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// squadre
const squadre = [
    { nome: "Liverpool", puntiFatti: 0, falliSubiti: 0},
    { nome: "Barcellona", puntiFatti: 0, falliSubiti: 0},
    { nome: "Liverpool", puntiFatti: 0, falliSubiti: 0},
    { nome: "Real Madrid", puntiFatti: 0, falliSubiti: 0}
];

// creazione numeri casuali
function puntiFattiCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function inserimentoGol(punteggi, min, max) {
  // Itera sulle chiavi dell'oggetto
  for (const key in punteggi) {

  }
}