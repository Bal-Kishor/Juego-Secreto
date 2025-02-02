/*let titulo = document.querySelector('h1');
titulo.innerHTML='Juego del Número Secreto';

let parrafo= document.querySelector('p');
parrafo.innerHTML='Elige un número del 1 al 10'; */
let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
//console.log(numeroSecreto);
function asignarTextoElemento (elemento, texto) {
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento()
{
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroSecreto));*/
    //console.log(numeroSecreto);
    //console.log(intentos);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario===numeroSecreto);*/
    if(numeroDeUsuario===numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el número!!! en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(numeroDeUsuario>numeroSecreto)
        {
            asignarTextoElemento('p','El número es menor');
        }
        else
        {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
/*en vez de return Math ... lo cambiamos por una variable para agregar a 
la lista*/
    let numeroGenerado=Math.floor(Math.random ()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//Si ya sorteamos todos los numeros
if(listaNumerosSorteados.length==numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }
else
    {    
    //INCLUDES= si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado))
        {
        //retorna a la funcion
        return generarNumeroSecreto();
        }
        else
        {
        listaNumerosSorteados.push(numeroGenerado);    
        return numeroGenerado;
        }
    }   
}
function limpiarCaja ()
{
document.querySelector('#valorUsuario').value='';
}
function condicionesIniciales()
{
    asignarTextoElemento ('h1','Juego del Número Secreto');
    asignarTextoElemento ('p',`Elige un número del 1 al ${numeroMaximo} `);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego()
{
//limpiar caja
limpiarCaja();
//Indicar mensaje de intervalo de números
//Generar el número aleatorio
//Deshabilitar el botón de nuevo juego
condicionesIniciales();
//Inicializar el número de intentos

}
condicionesIniciales();