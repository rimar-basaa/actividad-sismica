import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';
import Mostrador from './components/Mostrador';


function App() {
    
    const [dataApi, setDataApi] = useState([]);
    const [filtro, setFiltro] = useState('Fecha');

  return (
    <>
        <h1 className='titulo'>Ultima Actividad Sismica</h1>        
        <MiApi setDataApi={setDataApi} />
        <Buscador setFiltro={setFiltro} />
        <Mostrador dataApi={dataApi} filtro={filtro} />             
    </>
  );
};

export default App;