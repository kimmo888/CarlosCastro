function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado (lado){
    return lado * lado;
}
//==============================================================

export function calcularPerimetroCuadrado(dato) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const calPerimetroP = document.getElementById("calPerimetroP");
    calPerimetroP.innerText = "El Perimetro del Cuadrado es: " + perimetro;

    return calPerimetroP;
}

export function calcularAreaCuadrado(dato) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const calAreaP = document.getElementById("calAreaP");
    calAreaP.innerText = "El Área del Cuadrado es: " + area;

    return calAreaP;
}

export const limpiarDatos = () => {
    const calAreaP = document.getElementById("calAreaP");
    calAreaP.innerText = "";

    const calPerimetroP = document.getElementById("calPerimetroP");
    calPerimetroP.innerText = "";

    const input = document.getElementById("InputCuadrado");
    input.value = "";
}