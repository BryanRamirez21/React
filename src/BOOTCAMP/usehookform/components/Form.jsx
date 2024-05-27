import React from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='nombre' type='text' {...register("nombre", { required: "Este campo es obligatorio" })} />
                {errors.nombre && <span>{errors.nombre.message}</span>}

                <input name='edad' type='number' {...register("edad", { min: { value: 18, message: "Debes ser mayor" } })} />
                {errors.edad && <span>{errors.edad.message}</span>}

                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}

export default FormHook;
