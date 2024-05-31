import React, { useEffect, useState } from 'react'

const localCache = {};

export const useFetch = (url) => {

    const [resp, setResp] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null
    });

    useEffect(() => {
        getFetch();
    },[url]);

    const setLoadingState = () => {
        setResp({
            data: null,
            isLoading: true,
            hasError: null,
            errorMessage: null
        });
    }

    const getFetch = async() =>{

        if(localCache[url]){
            setResp({
                data: localCache[url],
                isLoading: false,
                hasError: null,
                errorMessage: null
            });
            return;
        }

        setLoadingState();
        const response = await fetch(url);
        await new Promise(resolve => setTimeout(resolve, 1500));

        if(!response.ok){
            setResp({
                data: null,
                isLoading: false,
                hasError: true,
                errorMessage: {
                    code: response.status,
                    message: response.statusText 
                }
            });
            return;
        }

        const data = await response.json();
        setResp({
            data,
            isLoading: false,
            hasError: null,
            errorMessage: null
        });

        localCache[url] = data;
    } 

    return {
        data: resp.data,
        isLoading: resp.isLoading,
        hasError: resp.hasError,
        errorMessage: resp.errorMessage
    }
}
