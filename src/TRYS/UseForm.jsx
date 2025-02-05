import { useEffect, useRef, useState } from "react";


export const UseForm = () => {

    const [data, setData] = useState({
        name:"",
        email:"",
        age:0
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        
        const name = formData.get("name")
        const email = formData.get("email")
        const age = formData.get("age");

        setData({
            name,
            email,
            age
        })
    }
    

    const ShowData = () => {
        return(
            <ul>
                <li>Name: {data.name}</li>
                <li>email: {data.email}</li>
                <li>age: {data.age}</li>
            </ul>
        );
    }
  
    return (
      <div className="d-flex flex-column">
        <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label for='name'>Name: </label>
            <input type="text" name="name" placeholder="name" />

            <label for='name'>email: </label>
            <input type="email" name="email" placeholder="email" />

            <label for='name'>age: </label>
            <input type="number" name="age" placeholder="age" />
            <button type="submit">Submit</button>
        </form>
        <hr />
        <ShowData />
      </div>
    );
  }