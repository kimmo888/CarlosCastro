import React from 'react';
import { useState } from 'react';
import { pushArray } from  '../components/pushArray';
import { MedianaCal } from '../components/mediana';
import { limpiarDatos } from '../components/pushArray';
import lista1 from '../services/lista1';


const Mediana = () => {
    const [newData, setNewData] = useState(lista1);

    const handleSubmit = (e) => {
        e.preventDefault();
        //createNewData(newData);
        setNewData([]);
    };

    return (
        <div>
            <header>
                <h1>Promedio Mediana</h1>
            </header>
            <main>
                <h2>Mediana</h2>
                <form  onSubmit={handleSubmit} >
                    <label htmlFor="InputArray">Ingresa los valores a Calcular</label>
                    <input type="number" placeholder="Ingresa los datos a calcular" id="InputArray" value={newData} onChange={(e) => setNewData(e.target.value)} />
                    <button onClick={pushArray}>Enviar dato</button><br />
                    <button type="reset" onClick={MedianaCal} >Media</button>
                    <button onClick={limpiarDatos} >Limpiar</button>
                    <p id="Datos"></p>
                </form>
            </main>
        </div>
    )
}

export default Mediana;