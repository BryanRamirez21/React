//Ejemplo de uso de metodo de didUpdate en componente clase
//y uso del hook del componente funcional

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidMount(){
        console.log("Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado")
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}

export const DidUpdate = () => {

    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado")
    })
    

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
}
