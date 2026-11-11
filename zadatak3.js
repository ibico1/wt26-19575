let nazivInput=document.getElementById("naziv");
let iznosInput=document.getElementById("iznos");
let greska=document.getElementById("greska");
let tijelo=document.getElementById("tijelo");
let redZbir=document.getElementById("redZbir");
let zbirCelija=document.getElementById("zbir");
let brojStavki=document.getElementById("brojStavki");
let prosjekIspis=document.getElementById("prosjek");
let maksIspis=document.getElementById("maksimalni");
function azurirajZbirIBroj() {
    let celijeIznosa=tijelo.querySelectorAll("td.iznos");
    let zbir=0;
    let maks=-1;
    let maksNaziv="";
    for (let celija of celijeIznosa) {
        let iznos=Number(celija.textContent);
        zbir+=iznos;
        if (iznos>maks) {
            maks=iznos;
            maksNaziv=celija.parentElement.cells[0].textContent;
        }
    }
    zbirCelija.textContent=zbir.toFixed(2);
    brojStavki.textContent="Broj stavki: "+celijeIznosa.length;
    if (celijeIznosa.length>0) {
        let prosjek=zbir/celijeIznosa.length;
        prosjekIspis.textContent="Prosjek: "+prosjek.toFixed(2)+" KM";
        maksIspis.textContent="Najveći iznos: "+maks.toFixed(2);
    } else {
        prosjekIspis.textContent="Prosjek: -";
        maksIspis.textContent="Najveći iznos: -";
    }
}

document.getElementById("dodaj").addEventListener("click", function () {
    let naziv=nazivInput.value.trim();
    let iznosTekst=iznosInput.value.trim().replace(",", "."); 
    let iznos=Number(iznosTekst);

    if (naziv=="") {
        greska.textContent="Greška: naziv ne smije biti prazan.";
        return;
    }
    if (iznosTekst=="" || isNaN(iznos)) {
        greska.textContent="Greška: iznos mora biti broj.";
        return;
    }
    if (iznos<0) {
        greska.textContent="Greška: iznos ne smije biti negativan.";
        return;
    }

    greska.textContent="";
    let noviRed=tijelo.insertRow(redZbir.sectionRowIndex);
    let celijaNaziv=noviRed.insertCell(0);
    let celijaIznos=noviRed.insertCell(1);

    celijaNaziv.textContent=naziv;
    celijaIznos.textContent=iznos.toFixed(2);
    celijaIznos.className="iznos";
    azurirajZbirIBroj();

    nazivInput.value="";
    iznosInput.value="";
    nazivInput.focus();
});

azurirajZbirIBroj();
