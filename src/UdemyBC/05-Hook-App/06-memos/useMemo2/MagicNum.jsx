import React, { useCallback, useMemo, useState } from 'react'

export const MagicNum = () => {

    const [nums, setNums] = useState([]);
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const addRandom = () => {
        let rndNum = parseInt(Math.random() * 1000, 10);
        setNums([...nums, rndNum]);
    };

    const magicNumFunc = useMemo(() => calculateMagicNum(count),[count]) 

    return (
        <div>
            <div>
                Counter: {count} | Magic num: {magicNumFunc}
                <button onClick={increaseCount}>+ 1</button>
            </div>
            <hr />
            <div>
                <ul>
                    {nums.map((num, key) => (
                        <li key={key}>{num}</li>
                    ))}
                </ul>
                <button onClick={addRandom}>Add random num</button>
            </div>
        </div>
    );
};

function calculateMagicNum(n){
    console.log("costly calculation");

    let num = 1;
    for(let i = 0; i < n+10000; i++){
        num += 1000
    };
    return parseInt(num - num * 0.22, 10);
}
