import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({//YUP integrado
    nombre: yup.string().required("Este campo es obligatorio"),
    email: yup.string().required("Este campo es obligatorio"),
}).required();

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm( {resolver: yupResolver(schema)} );//Para asignarle el schema al form, debemos poner el resolver dentro del "useForm()"
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='nombre'>Nombre</label>
                    <input 
                        id='nombre' 
                        name='nombre' 
                        type='text' 
                        //con el schema, esto ya no es necesario:
                        //{...register("nombre", { required: "Este campo es obligatorio" })}
                    />
                    {/* errors.nombre && <span>{errors.nombre.message}</span> */}
                </div>
                    
                <div>
                    <label htmlFor='email'>email</label>
                    <input 
                        id='email' 
                        name='email' 
                        type='email' 
                        /*
                        {...register("email", { 
                            required: "Este campo es obligatorio", 
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "El formato es invalido",
                            },
                        })}
                        */
                    />
                    {/* errors.email && <span>{errors.email.message}</span> */}
                </div>

                <div>
                    <label htmlFor='message'>message</label>
                    <textarea 
                    id='message' 
                    name='message' 
                    /*
                    {...register("message", { 
                        required: "Este campo es obligatorio",
                        minLength:{
                            value: 10,
                            message: "mijnimo 10 char"
                        } 
                    })}
                    */
                    />
                    {/* errors.message && <span>{errors.message.message}</span> */}
                </div>

                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}


export default ContactForm;
