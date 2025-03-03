const cislo = Number(prompt('Zadej číslo (0 - 36):'));

if (cislo <= 36) {
    document.body.innerHTML += '<p> Zadej číslo (0 - 36): ' + cislo +  '</p>';
}

if (cislo === 0) {
    document.body.innerHTML += "Nula.";
}

const jeSude = cislo % 2 === 0;
const sudeLiche = jeSude ? "sudé" : "liché";

let barva; // deklarace promenne

if (jeSude) {
    barva = "černá";
} else {
    barva = "červená";
}


document.body.innerHTML = `Číslo ${cislo} je ${sudeLiche} a ${barva}.`;

