import Form from 'react-bootstrap/Form';

const Buscador = ({setFiltro}) => {  
    
    const seleccionFiltro = (e) => {
        setFiltro(e.target.value)               
    };    

    return (
        <div className='buscador'>
            <Form.Select 
            aria-label="Default select example" 
            size='sm'
            onChange={seleccionFiltro}>
                <option value="Fecha">Ordenado por Fecha</option>
                <option value="Magnitud">Ordenado por Magnitud</option>
                <option value="Profundidad">Ordenado por Profundidad</option>            
            </Form.Select>
        </div>        
    );
};

export default Buscador;