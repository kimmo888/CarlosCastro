function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//===============================================================

export function calcularDiametroCirculo(){
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const diametro = diametroCirculo(radio);
    const calDiameCir = document.getElementById("calDiameCir");
    calDiameCir.innerText = "El diametro del Circulo es de : "+ diametro;
}

export function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const perimetro = perimetroCirculo(radio);
    const calPeriCir= document.getElementById("calPeriCir");
    calPeriCir.innerText = "El Perimetro del Circulo es de: " + perimetro;
}

export function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const area = areaCirculo(radio);
    const CalAreaCir = document.getElementById("CalAreaCir");
    CalAreaCir.innerText = "El Área del Circulo es de: " + area;
}

export function limpiarDatos(){
    const calDiameCir = document.getElementById("calDiameCir");
    calDiameCir.innerText = "";
    const calPeriCir = document.getElementById("calPeriCir");
    calPeriCir.innerText = "";
    const CalAreaCir = document.getElementById("CalAreaCir");
    CalAreaCir.innerText = "";
    const input = document.getElementById("InputRadio");
    input.value = "";
}
