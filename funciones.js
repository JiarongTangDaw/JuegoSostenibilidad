import { datos } from "./datos.js";

let paginaActual = "";
let puntuacionFinal = 0;

function iniciarJuego(){
    if(paginaActual === ""){
        paginaActual = "pagina0";
    }
    mostrarPagina(paginaActual);
}

function mostrarPagina(paginaKey){
    const pagina = datos[paginaKey];

    let fin = comprobarFinal();
    
    if(!fin){
        let contTexto = document.getElementById("contenedorTexto");
        let h2 = document.createElement("h2");
        h2.className = "textoPregunta";
        h2.textContent = pagina.texto;
        contTexto.appendChild(h2);

        let contRespuestas = document.getElementById("contenedorRespuestas");
        if(paginaKey === "pagina0"){
            let botonSiguiente = document.createElement("button");
            botonSiguiente.textContent = "Empezar";
            botonSiguiente.className = "botonEmpezar";
            botonSiguiente.onclick = function(){
                paginaActual = pagina.siguiente;
                limpiarPagina();
                mostrarPagina(paginaActual);
            };
            contRespuestas.appendChild(botonSiguiente);
        }else{
            let posicionRespuesta = 0;
            
            for (const respuesta of pagina.respuestas) {
                let posicion = posicionRespuesta;

                let divRespuesta = document.createElement("div");
                divRespuesta.className = "divRespuesta";

                let img = document.createElement("img");
                img.src = respuesta.imagen;
                img.className = "imagenRespuesta";
                divRespuesta.appendChild(img);

                let botonRespuesta = document.createElement("button");
                botonRespuesta.textContent = respuesta.respuesta;
                botonRespuesta.className = "botonRespuesta";
                botonRespuesta.onclick = function(){
                    puntuacionFinal += respuesta.puntuacion;
                    console.log(puntuacionFinal);
                    
                    limpiarPagina();
                    monstrarPaginaInfo(paginaActual,posicion);
                };
                divRespuesta.appendChild(botonRespuesta);

                contRespuestas.appendChild(divRespuesta);
                posicionRespuesta++;
            }
        }
    }

}

function limpiarPagina(){
    let contTexto = document.getElementById("contenedorTexto");
    contTexto.innerHTML = "";
    let contRespuestas = document.getElementById("contenedorRespuestas");
    contRespuestas.innerHTML = "";
}

function monstrarPaginaInfo(paginaKey, posicionRespuesta){
    const pagina = datos[paginaKey];
    paginaActual = pagina.siguiente;
    let contTexto = document.getElementById("contenedorTexto");
    let h2 = document.createElement("h2");

    h2.textContent = pagina.respuestas[posicionRespuesta].explicacion;
    contTexto.appendChild(h2);
    h2.className = "textoExplicacion";

    let contRespuestas = document.getElementById("contenedorRespuestas");   
    let botonSiguiente = document.createElement("button");
    botonSiguiente.textContent = "Continuar";
    botonSiguiente.className = "botonSiguiente";
    botonSiguiente.onclick = function(){
        paginaActual = pagina.siguiente;
        limpiarPagina();
        mostrarPagina(paginaActual);
    };
    contRespuestas.appendChild(botonSiguiente);
}

function comprobarFinal(){
    let pagina = datos[paginaActual];
    let salida = false;
    //logica para comprobar el final segun la puntuacionFinal
    if(paginaActual != "paginaFinal"){
        if(puntuacionFinal < 0){
            limpiarPagina();
            let contTexto = document.getElementById("contenedorTexto");
            let anioFinal = pagina.anio;
            let h2 = document.createElement("h2");
            h2.textContent = "Has llegado al final. Te has quedado en el año " + anioFinal + " con la biodiversidad destruida.";
            contTexto.appendChild(h2);

            let contRespuestas = document.getElementById("contenedorRespuestas");   
            let botonReiniciar = document.createElement("button");
            botonReiniciar.textContent = "Reiniciar";
            botonReiniciar.onclick = function(){
                paginaActual = "pagina0";
                puntuacionFinal = 0;
                limpiarPagina();
                iniciarJuego();
            };
            contRespuestas.appendChild(botonReiniciar);
            salida = true;
        }
    }else{
        let textoFinal = "";
        limpiarPagina();
        let contTexto = document.getElementById("contenedorTexto");
        if(puntuacionFinal >= 0 && puntuacionFinal < 100){
            textoFinal = datos["finales"][0].texto;
        }else if(puntuacionFinal >= 100 && puntuacionFinal < 200){
            textoFinal = datos["finales"][1].texto;
        }else if(puntuacionFinal >= 200){
            textoFinal = datos["finales"][2].texto;
        }

        let h2 = document.createElement("h2");
        h2.textContent = textoFinal;
        h2.className = "textoFinal";
        contTexto.appendChild(h2);

        let contRespuestas = document.getElementById("contenedorRespuestas");   
        let botonReiniciar = document.createElement("button");
        botonReiniciar.className = "botonReiniciar";
        botonReiniciar.textContent = "Volver a empezar";
        botonReiniciar.onclick = function(){
            paginaActual = "pagina0";
            puntuacionFinal = 0;
            limpiarPagina();
            iniciarJuego();
        };
        contRespuestas.appendChild(botonReiniciar);
        salida = true;
    }
    return salida;
}
iniciarJuego();