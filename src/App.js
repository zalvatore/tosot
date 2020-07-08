import React, {useState, useEffect} from 'react';
import './App.css';
import ClaseList from './components/clase-list';

function App() {

        const [types, settypes] = useState([]);

    useEffect(()=>{
        fetch("http://tosotweb.h38jkb5qs3.us-west-2.elasticbeanstalk.com/inven/type/",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token d093218b33cf4d2c076056a9c234ff9239d263d3'
            }
        })
        .then( resp => resp.json())
        .then( resp => settypes(resp))
        .catch( error => console.log(error))
    },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1> Inventario Tosot</h1>
      </header>
        <div>
            <ClaseList types={types}/>
        </div>
    </div>
  );
}

export default App;
