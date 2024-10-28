import React, {useState, useContext, createContext} from 'react'

//* 1: create context
//* 2: create provider and set functions/params to pass
//* 3: pass them

export const ComponentContext = createContext();


//*1
const ComponentProvider = ({children}) => {
    const [dataSession, setDataSession] = useState({
        token:4321,
        session:9876
    });

    return (
    <ComponentContext.Provider value={{dataSession, setDataSession}}>
        {children}
    </ComponentContext.Provider>
    );
}


//*2
const ComponentReciver1 = () => {
    const {dataSession} = useContext(ComponentContext);
    return (
        <>
            <h1>El token es: {dataSession.token}</h1>
        </>
    );
}
const ComponentReciver2 = () => {
    const {dataSession, setDataSession} = useContext(ComponentContext);
    const changeData= () => {
        const newData = {
            token:111,
            session:222
        }
        setDataSession(newData)
    }
    return(
        <>
            <h2>la sesion es: {dataSession.session}</h2>
            <button onClick={changeData}>Change data</button>
        </>
    );
}



//*3
const ComponenteContexto = () => {


    return(
            <ComponentProvider>
                <ComponentReciver1 />
                <ComponentReciver2 />
                
            </ComponentProvider>
    );
}

export default ComponenteContexto;