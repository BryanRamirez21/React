import React, { useState } from 'react'

export const useLocalStorage = (key, initialVal) => {
    
    const [storedVal, setStoredVal] = useState(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialVal
        }catch(error){
            return initialVal
        }
    });

    const setVal = (val) => {
        try {
            setStoredVal(val);
            //In localStorage you only can save plain text, so you need to change it to json if you going to use it in code:
            window.localStorage.setItem(key, JSON.stringify(val));
        }catch(error){
            console.log(error)
        }
    }
    
    return [storedVal, setVal]
}
