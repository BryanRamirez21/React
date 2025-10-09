import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidatiors();
    }, [formState]);

    //* "Quiero memorizar el valor"
    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !== null) return false;
        }
        return true;
    },[formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidatiors = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMSG='this field requiered'] = formValidations[formField];

            //* esto devuelve el "displayNameValid" y los otros
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMSG;
        }

        setFormValidation(formCheckedValues);
        
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}