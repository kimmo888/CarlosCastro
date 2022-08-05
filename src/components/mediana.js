import lista1 from '../services/lista1';
import calcularMediaAritmetica from '../services/mediaAritmetica';


let mediana =0;

function esPar(numerito) {
    if (numerito % 2 === 0) {
    return true;
    } else {
    return false;
    }
}

export function MedianaCal(){

    const mitadLista1 = parseInt(lista1.length / 2);// es para sacar la mitad de los elementos del array o valores dados para poder sacar la media

    lista1.sort(function(a,b){
        return a-b;
    });

    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2,]);
        mediana = promedioElemento1y2;
        console.log("par");
    } else {
        mediana = lista1[mitadLista1];
    }// function que hace la media comprobando los datos centrales del array

    const resultadoMediana = document.getElementById("Datos");
    resultadoMediana.innerText = "La mediana de los valores ingresados es: " + mediana;
}


