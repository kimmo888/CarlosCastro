import React from 'react';
import { useState } from 'react';
import { pushArray } from  '../components/pushArray';
import { calcularModa } from '../components/moda';
import { limpiarDatos } from '../components/pushArray';
import lista1 from '../services/lista1';



const Moda = () => {

    const [newData, setNewData] = useState(lista1);

    const handleSubmit = (e) => {
        e.preventDefault();
        //createNewData(newData);
        setNewData([]);
    };

    return (

        <div>
            <header>
                <h1>Calcular la Moda</h1>
            </header>
            <main>
                <section className="containerForm">
                    <form  onSubmit={handleSubmit} >
                        <label htmlFor="InputArray">Ingresa los valores a Calcular</label>
                        <input type="number" placeholder="Ingresa los datos a calcular" id="InputArray" value={newData} onChange={(e) => setNewData(e.target.value)} />
                        <button onClick={pushArray}>Enviar dato</button><br />
                        <button type="reset" onClick={calcularModa} >Moda</button>
                        <button onClick={limpiarDatos} >Limpiar</button>
                        <p id="Datos"></p>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Moda;