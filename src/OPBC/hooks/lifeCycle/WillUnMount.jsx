//(Cuando va a desaparecer
import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component() {

    componentWillUnMount(){
        console.log("comportamiento antes del que componente desaparezca");
    }

    render(){
        return (
            <div><h1>WillUnMount</h1></div>
        )
    }
}


import React from 'react'

export const WillUnMount = () => {

    useEffect(() => {
      //eventos irian aqui

      return () => {
        console.log("comportamiento antes del que componente desaparezca");
      }
    }, [])
    

  return (
    <div>
      <h1>WillUnMount</h1>
    </div>
  )
}
