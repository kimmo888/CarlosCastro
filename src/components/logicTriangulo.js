function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//===============================================================

export function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const lado1 = Number(input1.value)

    const input2 = document.getElementById("InputTriangulo2");
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);

    const perimetroT = perimetroTriangulo(lado1,lado2,base);

    const calPeriT = document.getElementById("calPeriT");
    calPeriT.innerText = "El Perimetro del Triangulo es: " + perimetroT;

    return calPeriT;
}

export function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);

    const inputA = document.getElementById("InputTrianguloAlto");
    const altura = Number(inputA.value);

    const area = areaTriangulo(base, altura);

    const calAreaT = document.getElementById("calAreaT");
    calAreaT.innerText = "El Área del Triangulo es: " + area;

    return calAreaT;
}
export function limpiarDatos(){
    const calPeriT = document.getElementById("calPeriT");
    calPeriT.innerText = "";
    const calAreaT = document.getElementById("calAreaT");
    calAreaT.innerText = "";
    const input1 = document.getElementById("InputTriangulo1");
    input1.value = "";
    const input2 = document.getElementById("InputTriangulo2");
    input2.value = "";
    const input3 = document.getElementById("InputTrianguloBase");
    input3.value = "";
    const inputA = document.getElementById("InputTrianguloAlto");
    inputA.value = "";
}