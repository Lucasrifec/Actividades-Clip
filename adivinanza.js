var rta1 = "fosforos";
var rta2 = "Fosforos";
var rta3 = "FOSFOROS";
var contador = 3;
document.getElementById("intento").innerHTML = "Intentos: " + contador;

function adivinar() {
    var rtaFinal = document.getElementById("rta").value;

    if (rtaFinal == rta1 || rtaFinal == rta2 || rtaFinal == rta3) {
        alert("Respuesta correcta!");
        document.getElementById("intento").innerHTML = "Intentos: " + contador;
    } else {
        alert("Lo siento, respuesta incorrecta")
        contador--;
        document.getElementById("intento").innerHTML = "Intentos: " + contador;
        if (contador == 2) {
            document.getElementById("pista").innerHTML = "Pista: Somos todos colorados";
        }
        if (contador == 1) {
            document.getElementById("pista").innerHTML = "Somos muy sencibles al calor";
        }
        if (contador == 0) {
            alert("Se terminó el juego! Actualiza la página para volver a jugar.");
            bton = document.getElementById("boton");
            bton.disabled = true;
        }
    }
}