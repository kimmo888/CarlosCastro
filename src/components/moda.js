import lista1 from "../services/lista1";


let moda =0;// el que tiene el resultado
// function que calcula la moda
function ordenarCalcularModa(lista){
    let lista1Count = {};
    lista.map((elemento)=>lista1Count[elemento]?lista1Count[elemento] += 1 : lista1Count[elemento] = 1);
    const lista1Array = Object.entries(lista1Count).sort((elementoA,elementoB)=>elementoA[1] - elementoB[1]);
    moda =lista1Array[lista1Array.length - 1];
}

//function que llama el botón para llamar la function de moda e ingresa el resultado en el html
export function calcularModa(){
    ordenarCalcularModa(lista1);
    const resultadoModa = document.getElementById("Datos");
    resultadoModa.innerText = "La moda de los valores es : " + moda[0] + ", y se repite: " + moda[1];
}