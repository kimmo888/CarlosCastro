import React from 'react';
import { calcularPerimetroTriangulo, calcularAreaTriangulo } from '../components/logicTriangulo';
import { limpiarDatos } from '../components/logicTriangulo';
import '../styles/Triangulo.scss';

const Triangulo = () => {
    return (
        <div className='conteinerTriangulo' >
            <header>
                <h1>Figuras Geométricas</h1><br/>
            </header>
            <section>
                <h2>Calcular el área y perímetro de un triangulo</h2>
                <form action=""  className='form-Triangulo' >
                    <label htmlFor="InputTriangulo1" className='Label-uno' >Escribe cuanto mide el primer lado</label>
                    <input type="number" id="InputTriangulo1" className='Input-uno' /><br/>

                    <label htmlFor="InputTriangulo2" className='Label-dos' >Escribe cuanto mide el segundo lado</label>
                    <input type="number" id="InputTriangulo2" className='Input-dos' /><br/>

                    <label htmlFor="InputTrianguloBase" className='Label-tres' >Escribe cuanto mide la base</label>
                    <input type="number" id="InputTrianguloBase" className='Input-tres' /><br/>

                    <label htmlFor="InputTrianguloAlto" className='Label-cuatro' >Escribe cuanto es la altura</label>
                    <input type="number" id="InputTrianguloAlto" className='Input-cuatro' /><br/>

                    <button type="button" className='bt1' onClick={calcularPerimetroTriangulo}>Perímetro</button>
                    <button type="button" className='bt2' onClick={calcularAreaTriangulo} >Área </button>
                    <button type="button" className='bt3' onClick={limpiarDatos} > Limpiar</button>
                </form>
                <div className='p-text'>
                    <p  id="calPeriT"></p>
                    <p  id="calAreaT"></p>
                </div>
            </section>
        </div>
    )
}

export default Triangulo;