import React, {useState, useContext} from 'react'

//we start a state that will take data from a parent
const miContexto = React.createContext(null);

const ContextHook_eg2 = () => {
    //we start a state that will take data from a parent
    const state = useContext(miContexto);
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2 />
        </div>
    )
}



const Componente2 = () => {
    const state = useContext(miContexto);
    return(
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}



const ComponenteContexto = () => {
    const initialState = {
        token: 12345,
        sesion: 98765
    };

    const [sessionData, setSessionData] = useState(initialState);

    function actualizarSession(){
        setSessionData({
            token: 1111,
            sesion: 2222 
        });
    }
    return(
        <miContexto.Provider value={sessionData}>
            {/* todo lo que esta dentro puede leer los datos de sessionData */}
            {/* si se actualiza aqui, los demás componentes tambien lo haran */}
            <ContextHook_eg2></ContextHook_eg2>
            <button onClick={actualizarSession}>Update session</button>
        </miContexto.Provider>
    );
}



export default ComponenteContexto;