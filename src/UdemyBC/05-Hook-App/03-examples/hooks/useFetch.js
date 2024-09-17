import { useEffect, useState } from "react"

const localCache = {};

export const useFetch = (URL) => {

    useEffect(() => {
        getFetch();
    },[URL]);

    const setLoadingState = () => {
        setState({
            data:       null,
            isLoadging: true,
            hasError:   false,
            error:      null
        })
    }

    const getFetch = async() => {
        if(localCache[URL]){
            console.log("Using cache");
            setState({
                data:localCache[URL],
                isLoadging:false,
                hasError:false,
                error:null
            });
            return;
        }

        setLoadingState();
        const response = await fetch(URL);
        await new Promise(resolve => setTimeout(resolve, 1500));
        if(!response){
            setState({
                data:       null,
                isLoadging: false,
                hasError:   true,
                error:      "Conection error"
            });
            return;
        }
        
        const data = await response.json();
        setState({
            data,
            isLoadging: false,
            hasError:   false,
            error:      null
        });
        
        localCache[URL] = data;
    }

    const [state, setState] = useState({
        data:       null,
        isLoadging: true,
        hasError:   false,
        error:      null
    })

    return {
        data:       state.data,
        isLoadging: state.isLoadging,
        hasError:   state.hasError,
        error:      state.error
    }
}
