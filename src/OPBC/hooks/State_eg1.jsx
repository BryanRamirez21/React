/*
crear un componente de tipo funcion y acceder a su estado privado a través de un hook, y además poder modificarlo
*/
import React, {useState} from 'react'

export default function State_eg1() {//Esta linea representa que es un hook de tipo funcion

    const valorInicial = 0;
    const personaInicial = {
        nombre: "bryan",
        edad: 22
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador(){
        setContador(contador + 1);
    }

    function updatePersona(){
        setPersona({
            nombre: "uriel",
            edad: 33
        });
    }

  return (
    <div>
        <h2>Counter: {contador}</h2><br></br>
        <h2>Counter: {persona.nombre}, {persona.edad}</h2>
        <button value="Upgrade counter" onClick={incrementarContador}></button>
        <button value="Upgrade person" onClick={updatePersona}></button>
    </div>
  )
}
