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
  squadre[i].puntiFatti = generaGolCasuale(0, 500);
  squadre[i].falliSubiti = generaGolCasuale(0, 500);
}

console.log(squadre);


const nomiFalli = [];

for (let i = 0; i < squadre.length; i++) {
  nomiFalli.push({
    nome: squadre[i].nome,
    falliSubiti: squadre[i].falliSubiti
  });
}

console.log(nomiFalli);



