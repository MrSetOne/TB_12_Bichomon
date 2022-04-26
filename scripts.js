// 1 => Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById("gen-1").textContent = "Generasión 1 Pokimon";

// 2 => Cambia el color de fondo de la primera generación de Pokimon.
const contenedor = document.getElementById("gen-1").nextElementSibling
contenedor.style.backgroundColor = "#ebb2a3"

// 3 => Imprime por consola la URL de la página.
const url = document.URL
console.log(url)

// 4 => Imprime por consola el dominio de la página.
const dominio = document.domain
console.log(dominio)

// 5 => Imprime todos los nodos de imagen.
const imagenes = document.getElementsByTagName("img")
for (const imagen of imagenes) {
    console.log(imagen.src)
}

// 6 => Sustituye el atributo "src" de todas las imágenes por este
for (const imagen of imagenes) {
    imagen.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}


/* P-R-E-M-I-U-M */
// 7 => Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
let voladores = document.getElementsByClassName("itype flying")
for (const volador of voladores) {
    volador.parentNode.parentNode.style.backgroundColor = "#d0c5c1"
}