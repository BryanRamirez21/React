//ejemplo de tipo clase que usa los metodos de ciclo de vida
import React, {Component} from "react"
import PropTypes from 'prop-types'

class componentName extends Component {
    constructor(props){
        super(props)
        console.log("Constructor: cuando se instancia el componente");
    }

    componentWillMount(){
        console.log("willmount: antes del montaje del componente");
    }

    componentDidMount(){
        console.log("didmount: justo antes del montaje del componente, antes de renderizarlo");
    }

    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps: si va a recibir nuevas props");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate: controla si el componente debe o no actualizarse (solo T / F)");
    }

    componentWillUpdate(){
        console.log("WillUpdate: justo antes de actualizarse");
    }

    componentDidUpdate(){
        console.log("DidUpdate: justo despues de actualizarse");
    }

    componentWillUnmount(){
        console.log("WillUnmount: justo antes de desaparecer");
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}