import React, { memo, useState } from 'react'

const Number = memo(({nums, addRandom}) => {
    console.log("Numbers rendered");

    return(
        <div>
            <ul>
                {nums.map((num, key) => (
                    <li key={key}>{num}</li>
                ))}
            </ul>
            <button onClick={addRandom}>Add random num</button>
        </div>
    );
});

export const Numbers = () => {

    const [nums, setNums] = useState([]);
    const [count, setCount] = useState(0);

    const addRandom = () => {
        let randomNum = parseInt(Math.random() * 1000, 10);
        setNums([...nums, randomNum]);
    };

    const increaseCount = () => {
        setCount(count + 1)
    };

    return (
        <div>
            <div>
                Count: {count}
                <button onClick={increaseCount}>+ 1</button>
            </div>
            <hr />
            <Number nums={nums} addRandom={addRandom} />
        </div>
    )
}
