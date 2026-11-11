
let lista = document.getElementById("lista");
let brojac = document.getElementById("brojac");
let reset = document.getElementById("reset");

let stavke = lista.getElementsByTagName("li");

let ukupno = stavke.length;
let zavrseno = 0;

// Funkcija za ažuriranje brojača
function azurirajBrojac() {
    zavrseno = 0;

    for (let i = 0; i < ukupno; i++) {
        if (stavke[i].classList.contains("zavrseno")) {
            zavrseno++;
        }
    }

    brojac.textContent = "Završeno: " + zavrseno + " / " + ukupno;
}

// Dodavanje događaja svakoj stavci
for (let i = 0; i < ukupno; i++) {

    let dugme = stavke[i].getElementsByTagName("button")[0];

    dugme.addEventListener("click", function() {

        stavke[i].classList.toggle("zavrseno");

        if (stavke[i].classList.contains("zavrseno")) {
            dugme.textContent = "Vrati na nezavršeno";
        } else {
            dugme.textContent = "Označi kao završeno";
        }

        azurirajBrojac();
    });
}

// Vraćanje svih stavki na početno stanje
reset.addEventListener("click", function() {

    for (let i = 0; i < ukupno; i++) {
        stavke[i].classList.remove("zavrseno");

        let dugme = stavke[i].getElementsByTagName("button")[0];

        dugme.textContent = "Označi kao završeno";
    }

    azurirajBrojac();
});
