let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

  let selectionreiniciar = document.getElementById("reiniciar")
  selectionreiniciar.style.display = "none"

  let selectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
  selectionseleccionarAtaque.style.display = "none"


  let botonMascotaJugador = document.getElementById("boton-mascota")
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

  let botonFuego = document.getElementById("boton-fuego")
  botonFuego.addEventListener("click", ataqueFuego)
  let botonAgua = document.getElementById("boton-agua")
  botonAgua.addEventListener("click", ataqueAgua)
  let botonTierra = document.getElementById("boton-tierra")
  botonTierra.addEventListener("click", ataqueTierra)

  let botonReiniciar = document.getElementById("boton-reiniciar")
  botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
  let selectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
  selectionseleccionarAtaque.style.display = "flex"
  let selectionseleccionarmascota = document.getElementById("seleccionar-mascota")
  selectionseleccionarmascota.style.display = "none"


  let inputHipodoge = document.getElementById("hipodoge")
  let inputEartmin = document.getElementById("eartmin")
  let inputFiremo = document.getElementById("firemo")
  let spanMascotaJugador = document.getElementById("mascota-jugador")



  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge"
  }
  else if (inputEartmin.checked) {
    spanMascotaJugador.innerHTML = "Eartmin"
  }
  else if (inputFiremo.checked) {
    spanMascotaJugador.innerHTML = "Firemo"
  }
  else {
    alert("selecciona una mascota")
  }

  seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3)
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "hipodoge"
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "eartmin"
  } else {
    spanMascotaEnemigo.innerHTML = "firemo"
  }



}

function ataqueFuego() {
  ataqueJugador = "FUEGO"
  ataqueAleatorioEnemigo()
}

function ataqueAgua() {
  ataqueJugador = "AGUA"
  ataqueAleatorioEnemigo()
}

function ataqueTierra() {
  ataqueJugador = "TIERRA"
  ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3)

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO"
  }
  else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA"
  }
  else {
    ataqueEnemigo = "TIERRA"
  }

  combate()
}

function combate() {

  let spanVidasJugador = document.getElementById("vidas-Jugador")
  let spanVidasEnemigo = document.getElementById("vidas-Enemigo")

  if (ataqueEnemigo == ataqueJugador) {
    crearMenaje("EMPATE")

  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMenaje("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo

  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMenaje("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo

  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMenaje("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo

  } else {
    crearMenaje("PERDISTE")
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
  }

  revisarVidas()

}

function revisarVidas() {
  if (vidasJugador == 0) {
    crearMenajeFinal("PERDISTE 😿😿😿")
  } else if (vidasEnemigo == 0) {
    crearMenajeFinal("GANASTE 🎉🎉🎉🎉")
  }
}

function crearMenaje(resultado) {
  let sectionMensajes = document.getElementById("resultado")
  let ataqueDelJugador = document.getElementById("ataque-del-jugador")
  let ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")

  let nuevoAtaqueDelJugador = document.createElement("p")
  let nuevoAtaqueDelEnemigo = document.createElement("p")

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo



  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMenajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("resultado")

  let parrafo = document.createElement("p")
  sectionMensajes.innerHTML = resultadoFinal




  let botonFuego = document.getElementById("boton-fuego")
  botonFuego.disabled = true
  let botonAgua = document.getElementById("boton-agua")
  botonAgua.disabled = true
  let botonTierra = document.getElementById("boton-tierra")
  botonTierra.disabled = true

  let selectionreiniciar = document.getElementById("reiniciar")
  selectionreiniciar.style.display = "block"
}

function reiniciarJuego() {
  location.reload()
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window = addEventListener("load", iniciarJuego)