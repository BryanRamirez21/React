import React, { useEffect } from 'react'
//Seccion 9, cap 123
export const Message = () => {

    useEffect(() => {

        const onMouseMove = () => {
            console.log(":)")
        }

        window.addEventListener("mousemove", onMouseMove);

        /*
            the next funciton, wont work to close it in the return, because if we do a refference to the same function (after the "mousemove")
             a new space in memory will be created:

             window.addEventListener("mousemove", (e) => {
                console.log(e);
            })
            return(
                window.removeEventListener("mousemove", (e) => {
                    console.log(e);
                })
            )
        */

        return() => {
            window.removeEventListener("mousemove", onMouseMove) 
        }
    }, [])
    

    return (
        <div>
            <h3>User already exists</h3>
        </div>
    )
}
