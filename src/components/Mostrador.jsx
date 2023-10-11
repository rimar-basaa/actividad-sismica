import Table from 'react-bootstrap/Table';

const Mostrador = ({dataApi, filtro}) => {

    if (filtro == 'Magnitud') {
        dataApi.sort((a,b) => {return b.Magnitud - a.Magnitud})
    } else if (filtro == 'Profundidad') {
        dataApi.sort((a,b) => {return a.Profundidad - b.Profundidad})
    } else {
        dataApi.sort(
            (a,b) => {
                return new Date(b.Fecha) - new Date(a.Fecha)
            }
        )
    };

    return (
        <Table responsive striped bordered size="sm">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Magnitud</th>
                    <th>Profundidad</th>
                    <th>Ubicacion</th>
                </tr>
            </thead>
            <tbody>
                {dataApi.map(item => (
                    <tr key={item.Fecha}>
                        <td>{item.Fecha}</td>
                        <td>{item.Magnitud}</td>
                        <td>{item.Profundidad} km</td>
                        <td>{item.RefGeografica}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Mostrador;