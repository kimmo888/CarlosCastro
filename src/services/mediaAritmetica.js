function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(//en ves de for se utiliza un método utilizando una function anónima
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

export default calcularMediaAritmetica;