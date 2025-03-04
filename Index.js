const cislo = Number(prompt('Zadej číslo (0 - 36):'));

if (isNaN(cislo) || cislo < 0 || cislo > 36) {
    document.body.innerHTML = '<p>Neplatné číslo. Zadejte celé číslo v rozmezí 0-36.</p>';
} else {
    let barva;
    let sudeLiche;

    if (cislo === 0) {
        barva = "zelená";
        sudeLiche = "0";
    } else {
        const jeSude = cislo % 2 === 0;
        sudeLiche = jeSude ? "sudé" : "liché";

        if ((cislo >= 1 && cislo <= 10) || (cislo >= 19 && cislo <= 28)) {
            barva = jeSude ? "černá" : "červená";
        } else {
            barva = jeSude ? "červená" : "černá";
        }
    }

    document.body.innerHTML = `Číslo ${cislo} je ${sudeLiche} a ${barva}.`;
}