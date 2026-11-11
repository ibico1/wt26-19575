
let naslov = document.getElementById("naslov");
let tekst = document.getElementById("tekst");
let kategorija = document.getElementById("kategorija");

let pregled = document.getElementById("pregled");
let forma = document.getElementById("forma");
let greska = document.getElementById("greska");

let prikaz = document.getElementById("prikaz");
let prikazNaslov = document.getElementById("prikazNaslov");
let prikazTekst = document.getElementById("prikazTekst");
let prikazKategorija = document.getElementById("prikazKategorija");

// Prikaz obavijesti
pregled.addEventListener("click", function() {

    // Provjera praznih polja
    if (naslov.value.trim() == "" || tekst.value.trim() == "") {
        greska.textContent = "Morate unijeti naslov i tekst obavijesti!";
        return;
    }

    // Uklanjanje poruke o grešci
    greska.textContent = "";

    // Ažuriranje pregleda
    prikazNaslov.textContent = naslov.value;
    prikazTekst.textContent = tekst.value;
    prikazKategorija.textContent = kategorija.options[kategorija.selectedIndex].text;

    // Promjena stila prema kategoriji
    prikaz.classList.remove("vazno", "obavijest");
    prikaz.classList.add(kategorija.value);
});

// Vraćanje forme na početno stanje
forma.addEventListener("reset", function() {

    greska.textContent = "";

    prikazNaslov.textContent = "Naslov obavijesti";
    prikazTekst.textContent = "Ovdje će se prikazati tekst obavijesti.";
    prikazKategorija.textContent = "Kategorija";

    prikaz.classList.remove("vazno", "obavijest");
});
