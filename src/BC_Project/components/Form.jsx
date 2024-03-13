import React from 'react'
import { useState, useRef }  from 'react'
import { useForm } from 'react-hook-form';
import useResultsStore from '../state/stores/result';


const Form = () => {

    const onSearchResults = useResultsStore((state) => state.onSearchResults);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        onSearchResults(data);
    };

  return (
    <div>
        <form style={{display:"flex", flexDirection:'column'}} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='APaterno'>Apellido paterno</label>
            <input 
                type='text' 
                name='APaterno'
                id='APaterno' 
                {...register("APaterno", { required: "Este campo es obligatorio" })}>
            </input>

            <label htmlFor='AMaterno'>Apellido materno</label>
            <input 
                type='text' 
                name='AMaterno'
                id='AMaterno'
                {...register("AMaterno", { required: "Este campo es obligatorio" })}>
            </input>

            <label htmlFor='Nombres'>Nombre(s)</label>
            <input 
                type='text' 
                name='Nombres' 
                id='Nombres'
                {...register("Nombres", { required: "Este campo es obligatorio" })}>
            </input>

            <label htmlFor='FechaN'>Fecha de nacimiento</label>
            <input 
                type='date' 
                name='FechaN' 
                id='FechaN'
                {...register("FechaN", { required: "Este campo es obligatorio" })}>
            </input>

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form;