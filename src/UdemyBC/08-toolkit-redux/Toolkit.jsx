import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter/CounterSlice';

export const Toolkit = () => {

    const { counter } = useSelector( state => state.counter)
    // "para leer algo de nuestro store, usamos useSelector"
    // "en nuestro useSelector, tenemos un callback, una func que tiene "
    //      como primer argumento el state y luego de ese state, lo que nos interesa regresar (en este caso, el state.counter)


    const dispatch = useDispatch();
    // "esta funcion ya está memorizada"
    // "este dipacth sabe a que funcion aputnar porque se crea desde el slice"

    return (
        <div>
            <header>
                <p>the count is: {counter}</p>
                <p>
                    <button onClick={() => dispatch(increment())}>
                        increment
                    </button>
                    <button onClick={() => dispatch(decrement())}>
                        decrement
                    </button>
                    <button onClick={() => dispatch(incrementBy(2))}>
                        increment by 2
                    </button>
                </p>
            </header>
        </div>
    )
} 
