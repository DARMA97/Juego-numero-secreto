
let numeroSecreto = 0;
let intentos = 0;
let listaNumeros=[];
let numeroMaximo = 10;
let numeroIntentos = 3;

function asignarTextoElemento (elemento , texto){ // funcion para cambio contenido de elemt HTML
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento (){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if(numeroSecreto === numeroUsuario){

        asignarTextoElemento ('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        // el usuario no acierta
        if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número es menor')
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
}
    console.log(intentos);
    return;
}

function generarNumeroSecreto () { // genera un numero random.
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeros);
    // preguntar a la funcion si ya se sortearon todos lo numeros
    if (listaNumeros.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
            // si el numero generado esta incluido en la lista
        if(listaNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado
        }
    }
    
}

function condicionInicio () {    
    // inicializar mensajes iniciales
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Escoge un número del 1 al ${numeroMaximo}`);
    // Generar numero secreto
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    // inicializar intentos en 1
    intentos = 1;
    return;
}

function limpiarCaja () {
   return document.querySelector('#valorUsuario').value = '';
   
}

function reiniciarJuego(){
    // Limpiar la caja 
    limpiarCaja();
    // Indicar mensaje de inicio
    condicionInicio();
    // deshabilitar boton reiniciar
    document.getElementById('reiniciar').setAttribute('disabled','true');
        
}



condicionInicio();


