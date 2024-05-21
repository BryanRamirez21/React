//ejemplo de uso de lifecycle del metodo 
//del componente clase y el hook del ciclo de vida
//en el componente funcional

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log("comportamiento antes de que el componente sea añadido al DOM (se renderize)");
    }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}


export const DidMountHook = () => {
  
    useEffect(() => {
        console.log("comportamiento antes de que el componente sea añadido al DOM (se renderize)");
    }, [])
    
  
    return (
        <div>
            <h1>DidMount</h1>
        </div>
  )
}
