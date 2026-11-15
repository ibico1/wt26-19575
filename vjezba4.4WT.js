let godine = document.querySelectorAll(".godina");

for(let i = 0; i<godine.length; i++){
    godine[i].addEventListener("click", function(){
        let podstablo = this.nextElementSibling;
        let znak = this.querySelector(".znak");
        if (podstablo.style.display === "block") {
        podstablo.style.display = "none";
        znak.textContent = "+";
} else {
        podstablo.style.display = "block";
        znak.textContent = "-";
}
    });
}
