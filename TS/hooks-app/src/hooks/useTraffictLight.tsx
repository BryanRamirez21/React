import { useEffect, useState } from 'react'

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    gray: 'bg-gray-500'
}

type TrafficLightColors = keyof typeof colors;

export const useTraffictLight = () => {
    const [light, setLight] = useState<TrafficLightColors>('red');
    const [count, setCount] = useState(5);

    useEffect(() => {
        if(count === 0) return;

        const intervalId = setInterval(() => {
            setCount((prev) => prev-1)
        }, 1000);

        return () => {
           clearInterval(intervalId)
        }

    }, [count]);

    useEffect(() => {
        if(count > 0) return;

        setCount(5)
        if(light === 'red'){
            setLight('green')
            return;
        }
        if(light === 'yellow'){
            setLight('red')
            return;
        }
        if(light === 'green'){
            setLight('yellow')
            return;
        }

    },[count, light]);
    
    return {
        //PROPS: 
        colors,
        light,
        count,

        //COMPUTED:
        countBar: count/5 * 100,
        greenLight: light === 'red' ? colors.red : colors.gray,
        yellowLight: light === 'yellow' ? colors.yellow : colors.gray,
        redLight: light === 'green' ? colors.green : colors.gray,
    };
}
