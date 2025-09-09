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