import React from 'react';
import { calcularDiametroCirculo, calcularPerimetroCirculo, calcularAreaCirculo } from '../components/logicCirculo';
import { limpiarDatos } from '../components/logicCirculo';

const Circulo = () => {
    const Nop = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <header>
                <h1>Figuras Geométricas</h1><br/>
            </header>

            <section>
                <h2>Calcular el diametro, perimetro y área de un Circulo</h2>
                <form action="" onSubmit={Nop} >
                    <label htmlFor="InputRadio">Escribe cuanto  mide el radio</label>
                        <input type="number" id="InputRadio" /><br/>

                        <button type="button" onClick={calcularDiametroCirculo} >Calcular el Diametro</button>

                        <button type="button" onClick={calcularPerimetroCirculo} >Calcular el perímetro</button>

                        <button type="button" onClick={calcularAreaCirculo} >Calcular el Área</button>
                        <button type='button' onClick={limpiarDatos} > Limpiar Datos </button>
                        <p id="calDiameCir"></p>
                        <p id="calPeriCir"></p>
                        <p id="CalAreaCir"></p>
                </form>
            </section>
        </div>
    )
}

export default Circulo;