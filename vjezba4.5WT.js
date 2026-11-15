
            document.getElementById("calculate").addEventListener("click", function () {
                let r = Number(document.getElementById("radius").value);
                let v = (4 / 3) * Math.PI * Math.pow(r, 3);
                document.getElementById("volume").value = v.toFixed(4);
            });
     