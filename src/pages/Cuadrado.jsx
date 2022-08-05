import React from 'react';
import { calcularPerimetroCuadrado, calcularAreaCuadrado } from '../components/logicCuadrado';
import { limpiarDatos } from '../components/logicCuadrado';
import '../styles/Cuadrado.scss';

const Cuadrado = () => {
    const Nop = (e) => {
        e.preventDefault();
    }

    return (
    <div className='conteinerCuadrado'>
        <header className='h1-cuadrado'>
            <h1>Figuras Geométricas</h1><br/>
        </header>

        <section>
            <h2>Calcula el área y perímetro de un cuadrado</h2><br/>
            <form action="" className='formCuadrado' onSubmit={Nop} >
                <label htmlFor="InputCuadrado" className='Label-Cuadrado' >Cuánto mide cada lado del cuadrado</label>
                <input type="number" className='Input-uno' id="InputCuadrado" />
                <button type="button" onClick={calcularPerimetroCuadrado}  >Perímetro</button>
                <button type="button" onClick={calcularAreaCuadrado} >Área</button>
                <button type="button" onClick={limpiarDatos} > Limpiar</button>
            </form>
            <div className='p-textCuadrado'>
                <p id="calPerimetroP"></p>
                <p id="calAreaP"></p>
            </div>
        </section>
    </div>
    )
}

export default Cuadrado;