// const cancion1 = prompt ("Decime una canción")
// const top1 = document.getElementById ("cancion1") 
// top1.textContent = cancion1

// const cancion2 = prompt ("Decime otra canción")
// const top2 = document.getElementById ("cancion2") 
// top2.textContent = cancion2

// const cancion3 = prompt ("Vamos bien! Decime otra canción")
// const top3 = document.getElementById ("cancion3") 
// top3.textContent = cancion3

// const cancion4 = prompt ("Ya casi terminamos, decime otra canción")
// const top4 = document.getElementById ("cancion4") 
// top4.textContent = cancion4

// const cancion5 = prompt ("Y llegamos! Decime una última canción")
// const top5 = document.getElementById ("cancion5") 
// top5.textContent = cancion5


const respuestaCorrecta = document.getElementById ("boton1")
const respuestaIncorrecta1 = document.getElementById ("boton2")
const respuestaIncorrecta2 = document.getElementById ("boton3")
const textoRespuesta = document.getElementById ("correcto")

respuestaCorrecta.onclick = ()=>{
    textoRespuesta.textContent = "Correcto!"
    respuestaCorrecta.classList.add ("verde")

}

respuestaIncorrecta1.onclick = ()=>{
    textoRespuesta.textContent = "Incorrecto!"
    respuestaIncorrecta1.classList.add("rojo")
}

respuestaIncorrecta2.onclick = ()=>{
    textoRespuesta.textContent = "Incorrecto!"
    respuestaIncorrecta2.classList.add("rojo")
}



