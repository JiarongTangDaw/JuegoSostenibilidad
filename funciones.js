import { datos } from "./datos.js";

let paginaActual = "";
let puntuacionFinal = 30;

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
        let p = document.createElement("p");
        p.className = "contexto";
        p.innerHTML = pagina.texto.replace(/\n/g, '<br>'); 
        let h2 = document.createElement("h2");
        h2.className = "textoPregunta";
        h2.textContent = pagina.pregunta;
        contTexto.appendChild(p);
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
    let contTexto = document.getElementById("contenedorTexto");
    let p = document.createElement("p");
    p.className = "textoExplicacion";
    p.textContent = pagina.respuestas[posicionRespuesta].explicacion;
    contTexto.appendChild(p);

// timline eliminado
    // let timeline = document.createElement("button");
    // timeline.textContent = "Ver Timeline";
    // timeline.className = "botonTimeline";
    // timeline.onclick = function(){
    //     alert("Timeline: Año actual: " + pagina.anio);
    // };

    // contTexto.appendChild(timeline);

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
    let final = {};
    //logica para comprobar el final segun la puntuacionFinal
    if(paginaActual != "paginaFinal"){
        if(puntuacionFinal <= 0){
            final = datos["finales"].find( f => f.id === 0);
        }
    }else{
        if(puntuacionFinal >= 10 && puntuacionFinal <= 30){
            final = datos["finales"].find( f => f.id === 1);

        }else if(puntuacionFinal >= 40 && puntuacionFinal <= 60){
            final = datos["finales"].find( f => f.id === 2);

        }else if(puntuacionFinal >= 70 && puntuacionFinal <= 90){
            final = datos["finales"].find( f => f.id === 3);

        }else if(puntuacionFinal >= 100 && puntuacionFinal <= 120){
            final = datos["finales"].find( f => f.id === 4);

        }else if(puntuacionFinal === 130 ){
            final = datos["finales"].find( f => f.id === 5);
        }
    }
    if(Object.keys(final).length > 0){
        document.body.style.backgroundImage = `url('${final.imagen}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        
        let contTexto = document.getElementById("contenedorTexto");
        let h2 = document.createElement("h2");
        h2.textContent = final.titulo;
        h2.className = "tituloFinal";
        contTexto.appendChild(h2);

        if(paginaActual != "paginaFinal"){
            let h3 = document.createElement("h3");
            h3.className = "subtituloFinal";
            h3.textContent = "Has llegadoa al año: " + pagina.anio;
            contTexto.appendChild(h3);
        }

        let p = document.createElement("p");
        p.innerHTML = final.texto.replace(/\n/g, '<br>'); 
        p.className = "textoFinal";
        contTexto.appendChild(p);

        let contRespuestas = document.getElementById("contenedorRespuestas");   
        let botonReiniciar = document.createElement("button");
        botonReiniciar.className = "botonReiniciar";
        botonReiniciar.textContent = "Volver a empezar";
        botonReiniciar.onclick = function(){
            document.body.style.backgroundImage = "";
            paginaActual = "pagina0";
            puntuacionFinal = 10;
            limpiarPagina();
            iniciarJuego();
        };
        contRespuestas.appendChild(botonReiniciar);
        salida = true;
    }
    return salida;
}
iniciarJuego();