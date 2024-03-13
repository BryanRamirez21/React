import React from 'react'
import { useState, useRef }  from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';


export default function Form() {

    const APaterno = useRef();
    const AMaterno = useRef();
    const Nombres = useRef();
    const FechaN = useRef();

    async function submit(e){
        e.preventDefault();

        const options = {
        method: 'GET',
        url: 'https://jfhe88-rfc-generator-mexico.p.rapidapi.com/rest1/rfc/get',
        params: {
            apellido_materno: AMaterno.current.value,
            apellido_paterno: APaterno.current.value,
            fecha: FechaN.current.value,
            nombre: Nombres.current.value,
            solo_homoclave: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'f0e0acb914msh15c7e51e9cab0e5p17501ejsnee5b2dc22faa',
            'X-RapidAPI-Host': 'jfhe88-rfc-generator-mexico.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div>
        <form style={{display:"flex", flexDirection:'column'}}>
            <label htmlFor='APaterno'>Apellido paterno</label>
            <input type='text' name='APaterno' ref={APaterno}></input>

            <label htmlFor='APaterno'>Apellido materno</label>
            <input type='text' name='AMaterno' ref={AMaterno}></input>

            <label htmlFor='APaterno'>Nombre(s)</label>
            <input type='text' name='Nombres' ref={Nombres}></input>

            <label htmlFor='FechaN'>Fecha de nacimiento</label>
            <input type='date' name='FechaN' ref={FechaN}></input>

            <button type='submit' onClick={submit}>Enviar</button>
        </form>
    </div>
  )
}
