import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {
    const [fechaInicial, setFechaInicial] = useState("");
    const [fechaFinal, setFechaFinal] = useState("");
    const [diaCorte, setDiaCorte] = useState("");

    const handleGenerarTabla = (e) => {
        e.preventDefault();
        if (fechaInicial && fechaFinal && diaCorte) {
            const tbody = document.querySelector("#tablaFacturacion tbody");
            const row = document.createElement("tr");
            const fechaInicialCell = document.createElement("td");
            fechaInicialCell.textContent = fechaInicial;
            const fechaFinalCell = document.createElement("td");
            fechaFinalCell.textContent = fechaFinal;
            const diaCorteCell = document.createElement("td");
            diaCorteCell.textContent = diaCorte;
            row.appendChild(fechaInicialCell);
            row.appendChild(fechaFinalCell);
            row.appendChild(diaCorteCell);
            tbody.appendChild(row);
        }
    };


    const handleFechaInicialChange = (event) => {
        setFechaInicial(event.target.value);
    };

    const handleFechaFinalChange = (event) => {
        setFechaFinal(event.target.value);
    };

    const handleDiaCorteChange = (event) => {
        setDiaCorte(event.target.value);
    };

    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Calendario de facturacion</h2>
                        <form>
                            <div className="p-3">
                                <label htmlFor="FechaInicial" className="form-label">Fecha Inicial</label>
                                <input type="date" className="form-control" id="FechaInicial" value={fechaInicial} onChange={handleFechaInicialChange}></input>
                            </div>

                            <div className="p-3">
                                <label htmlFor="FechaFinal" className="form-label">Fecha Final</label>
                                <input type="date" className="form-control" id="FechaFinal" value={fechaFinal} onChange={handleFechaFinalChange}></input>
                            </div>

                            <div className="input-group my-4">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="Periodicidad">Periodicidad</label>
                                </div>
                                <select className="custom-select" id="Periodicidad">
                                    <option defaultValue>Elegir</option>
                                    <option value="1">Mensual</option>
                                    <option value="2">Bimestral</option>
                                    <option value="3">Semestral</option>
                                    <option value="4">Anual</option>
                                </select>
                            </div>

                            <div className="p-3">
                                <label htmlFor="DiaCorte" className="form-label">Dia de Corte</label>
                                <input type="text" className="form-control" id="DiaCorte" value={diaCorte} onChange={handleDiaCorteChange}></input>
                            </div>

                            <div className="p-3">
                                <label htmlFor="ImpresionFactura" className="form-label">Dia de impresion</label>
                                <input type="text" className="form-control" id="ImpresionFactura"></input>
                            </div>

                            <div className="p-3 text-center">
                                <button
                                    type="button"
                                    className="btn btn-lg btn-primary col-sm-6"
                                    id="Generar"
                                    onClick={handleGenerarTabla}
                                >Generar</button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>


            <div className="col-sm-6">
                <div className="card">
                    <table id="tablaFacturacion">
                        {diaCorte && (
                            <thead>
                                <tr>
                                    <th>Fecha inicial</th>
                                    <th>Fecha final</th>
                                    <th>Dia de corte</th>
                                </tr>
                            </thead>
                        )}
                        <tbody>
                        </tbody>

                    </table>
                </div>
            </div>



        </div >

                    

    )

}

export default App                        