import lista1 from "../services/lista1";

export function pushArray(){
    const datosArray = document.getElementById("InputArray").value;

    let convertirValor = parseInt(datosArray);
    if (isNaN(convertirValor)) {
        convertirValor = 0;
    }
    lista1.push(convertirValor);
    console.log(lista1);
}

export const limpiarDatos = () => {
    lista1 = [];
    const resultadoMediana = document.getElementById("Datos");
    resultadoMediana.innerText = "";
}