import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    gray: 'bg-gray-500'
}

type TrafficLightColors = keyof typeof colors;

export const TrafficLightWEffect = () => {

    const [light, setLight] = useState<TrafficLightColors>('red');
    const [count, setCount] = useState(5);

    useEffect(() => {
        //if(count === 0){
        //    if(light === 'red'){
        //        setLight('green')
        //        return;
        //    }
        //    if(light === 'yellow'){
        //        setLight('red')
        //        return;
        //    }
        //    if(light === 'green'){
        //        setLight('yellow')
        //        return;
        //    }
        //    return;
        //}

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

    },[count, light])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                
                <h1 className="text-white text-3xl font-thin">Semaforo con useffect</h1>
                <h2 className="text-white text-xl">{count}</h2>

                <div className="text-white text-xl"></div>
                <div className="w-64 bg-gray-700 rounded-full h2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-initial"
                        style={{width:`${count/5 * 100}%`}}
                    ></div>
                </div>

                <div className={`w-32 h-32 
                    ${light === 'red' ? colors.red : colors.gray} 
                    rounded-full`}
                >
                </div>
                <div className={`w-32 h-32 
                    ${light === 'yellow' ? colors.yellow : colors.gray} 
                    rounded-full`}
                >
                </div>
                <div className={`w-32 h-32 
                    ${light === 'green' ? colors.green : colors.gray} 
                    rounded-full`}
                >
                </div>
            </div>
        </div>
    );
};