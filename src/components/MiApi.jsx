import { useEffect } from 'react';

const MiApi = ({setDataApi}) => {

    const consultarAPI = async () => {
        try {
            const url = "https://api.gael.cloud/general/public/sismos";
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setDataApi(data);
        } catch {
            alert("Por favor, Intentelo mas tarde...")
        }
    };

    useEffect(
        () => {consultarAPI()}, []
    );
    
    return (
        <>
        </>
    );
};

export default MiApi;