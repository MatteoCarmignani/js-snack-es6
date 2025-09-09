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

let pesoPiuBasso = bici[0];


for (let i = 0; i < bici.length; i++) {
    const biciComplete = bici[i];
    //console.log(pesoBici.peso);
    pesoBici = biciComplete.peso

        if (biciComplete.peso < pesoPiuBasso.peso) {
            pesoPiuBasso = bici[i];
        }
    
}

console.log("La bici col peso più basso è", pesoPiuBasso);




// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// squadre
const squadre = [
    { nome: "Casa Stark", puntiFatti: 0, falliSubiti: 0},
    { nome: "Casa Lannister", puntiFatti: 0, falliSubiti: 0},
    { nome: "Casa Targaryen", puntiFatti: 0, falliSubiti: 0},
    { nome: "Casa Baratheon", puntiFatti: 0, falliSubiti: 0}
];


// creazione numeri casuali
function generaGolCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = generaGolCasuale(1, 10);
  squadre[i].falliSubiti = generaGolCasuale(1, 10);
}

console.log(squadre);
