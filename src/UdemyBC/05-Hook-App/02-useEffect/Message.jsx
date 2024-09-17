import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    useEffect(() => {
        const onMouseMove = ({x,y}) => {
            setCoords({x,y})
        }

        //here we create a component that mounts every time we move the mouse
        window.addEventListener("mousemove", onMouseMove)

        return () => {
            //in order to dismount the component (so we avoid to have the same component mounted multiple times), we remove it on the return
            window.removeEventListener("mousemove", onMouseMove)
        }
    }, [])
    

    return (
        <>
            <h3>User already exits</h3>
            {JSON.stringify(coords)}
        </>
    )
}
