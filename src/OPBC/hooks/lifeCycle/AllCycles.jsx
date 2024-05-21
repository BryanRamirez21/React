import React, {useEffect} from 'react'

const AllCycles = () => {

    useEffect(() => {
        //Lo siguiente hará que el componente se actulize cada segundo
        const intervalID = setInterval(() => {
            console.log("actualizacion del componente")
        }, 1000);

        return () => {
            console.log("Componente va a desaparecer");
            clearInterval(intervalID);
        }
    }, [])


    return (
        <div>
        </div>
    )
}

export default AllCycles
