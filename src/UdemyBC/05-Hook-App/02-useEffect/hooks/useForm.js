import React, { useState } from 'react'

export const useForm = (initialForm={}) => {

    const [dataUser, setDataUser] = useState(initialForm);

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setDataUser({
            ...dataUser,
            [name]: value
        })
    }

    const onReset = () => {
        setDataUser(initialForm);
    }

    return {
        dataUser,
        onInputChange,
        onReset
    }
}
