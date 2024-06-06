import React, { useEffect, useState } from 'react'

const localSrg = {};

export const useFetch = (url) => {

    const [resp, setResp] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null
    });

    useEffect(() => {
        useFetch();
        console.log(localSrg)
    },[url]);

    const setLoadingState = () => {
        setResp({
            data: null,
            isLoading: true,
            hasError: false,
            errorMessage: null
        });
    }

    const useFetch = async() => {
        const response = await fetch(url);

        if(localSrg[url]){
            setResp({
                data: localSrg[url],
                isLoading: false,
                hasError: false,
                errorMessage: null
            });
            return;
        }

        setLoadingState();
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
            hasError: false,
            errorMessage: null
        });

        localSrg[url] = data;
    }

    return {
        data: resp.data,
        isLoading: resp.isLoading,
        hasError: resp.hasError,
        errorMessage: resp.errorMessage
    }
}
