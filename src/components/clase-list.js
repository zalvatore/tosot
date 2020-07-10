import React, {useState, useEffect} from 'react';

function ClaseList(props){

    const [equipos, setEquipos] = useState([]);

    useEffect(()=>{
        fetch("https://tosot.mx/inven/inventario/",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token d093218b33cf4d2c076056a9c234ff9239d263d3'
            }
        })
        .then( resp => resp.json())
        .then( resp => setEquipos(resp))
        .catch( error => console.log(error))
    },[])



    return(
        <div>
            { props.types && props.types.map( type =>
             <div key={type.id}>

             <h2> {type.tipo} - {type.clase.clase} </h2>

                 <div className="layout">
                    <div><h3>#</h3></div>
                    <div className="column"><h3>Modelo</h3></div>
                    <div className="column"><h3>Poder</h3></div>
                    <div className="column"><h3>Ton</h3></div>
                        <div>
                        { equipos.filter(equipo => equipo.serial_count > 0 && equipo.equipo.tipo === type.tipo).map( equipo =>
                         <div key={equipo.id}>{equipo.serial_count}</div>
                         )}
                        </div>

                        <div className="column">
                        { equipos.filter(equipo => equipo.serial_count > 0 && equipo.equipo.tipo === type.tipo).map( equipo =>
                         <div key={equipo.id}>{equipo.equipo.modelo} </div> )}
                        </div>

                        <div className="column">
                        { equipos.filter(equipo => equipo.serial_count > 0 && equipo.equipo.tipo === type.tipo).map( equipo =>
                         <div key={equipo.id}>{equipo.equipo.voltaje}V / {equipo.equipo.fase}f</div> )}
                        </div>

                        <div className="column">
                        { equipos.filter(equipo => equipo.serial_count > 0 && equipo.equipo.tipo === type.tipo).map( equipo =>
                         <div key={equipo.id}>{equipo.equipo.tonelada}</div> )}
                        </div>
                </div>
             </div>
             )}
        </div>
    )
}

export default ClaseList;
