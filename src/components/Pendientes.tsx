import React, {useEffect, useState} from 'react';
import { auxiliar, PendienteDetalle } from '../types/PendienteDetalle';





export const Pendientes: React.FC = () => {

    const [pendientes, setPendientes] = useState<PendienteDetalle[]>(auxiliar)
    const [mostrar, setMostrar] = useState<string>("")

    return <>
            <div className="container-flex" style={{justifyContent : "center", maxHeight:"63vh"}}>
                <div className="card text-center mt-3 mb-3 align-self-end">
                    <h5 className="card-header"><strong>Pendientes</strong></h5>
                    <div className="card-body">

                    <h1>{mostrar}</h1>                     
                    <div className="table-responsive-sm overflow-auto">
                    <div className="mx-auto">
                        <table id="table" className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" data-field="pua.view" data-sortable="false">&nbsp;</th>
                                    <th scope="col" data-field="pua.desc" data-sortable="true">Descripción</th>
                                    <th scope="col" data-field="pua.element" data-sortable="true">Elemento</th>
                                    <th scope="col" data-field="pua.status" data-sortable="true">Estado</th>
                                    <th scope="col" data-field="pua.date" data-sortable="true" data-sorter="datesSorter">Fecha de Emisión</th>
                                    <th scope="col" data-field="pua.assigned" data-sortable="true">Asignado a</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   
                                    pendientes.map((p, i) =>
                                    <tr key={i}>
                                    <td><i className="fas fa-eye" title="ver" style={{cursor:"pointer"}}></i></td>
                                    <td>{p.descripcion}</td>
                                    <td>{p.elemento}</td>
                                    <td>{p.estado}</td>
                                    <td>{p.fechaEmision.toLocaleDateString() }</td>
                                    <td>{p.asignadoA}</td>
                                    </tr>
                                    )}             
                            </tbody>

                        </table>
                    </div>
                    </div>
                </div>
                </div>
                </div>
           
    </>
}

