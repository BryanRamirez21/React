import React, { useEffect, useState } from 'react'

export const useFetch = (URL) => {

    const [resp, setResp] = useState({
        data:   null,
        isLoading: true,
        hasError:  false,
        error:  null,
    });

    const [cache, setCache] = useState([]);

    useEffect(() => {
        getFetch();
    },[URL]);

    const getFetch = async() => {
        const response = await fetch(URL);

        if(cache[URL]){
            setResp({
                data: cache[URL],
                isLoading: false,
                hasError:  false,
                error:  null,
            });
            return;
        }

        setResp({
            data:   null,
            isLoading: true,
            hasError:  false,
            error:  null,
        });

        await new Promise(resolve => setTimeout(resolve, 1500));
        if(!response.ok){
            setResp({
                data:   null,
                isLoading: false,
                hasError:  true,
                error:  null,
            });
            return;
        }

        const data = await response.json();

        setResp({
            data,
            isLoading: false,
            hasError:  false,
            error:  null,
        });

        cache[URL] = data;
    } 

    return {
        data: resp.data,
        isLoading: resp.isLoading,
        hasError:  resp.hasError,
        error:  resp.error,
    }
}
