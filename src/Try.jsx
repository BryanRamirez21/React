import { useRef, useState } from "react";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export const Try = () => {
    const [cities, setCities] = useState([]);
    const inputCity = useRef("");

    const addCities = () => {
        const cityVal = inputCity.current.value;
        setCities([
            ...cities,
            {
                id: new Date().getTime(),
                name: cityVal
            }
        ])
    };

    const delCity = (cityID) => {
        setCities(
            cities.filter(city => city.id !== cityID)
        );
    }

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <input type="text" ref={inputCity} placeholder="city" />
            <button onClick={addCities}>Add city</button>
            <li>
            {
                cities.map(city => (
                    <div key={city.id} className="d-flex flex-row justify-center">
                        <ul>{city.name}</ul>
                        <button onClick={() => delCity(city.id)}>X</button>
                    </div>
                ))
            }
            </li>
        </div>
    );
}