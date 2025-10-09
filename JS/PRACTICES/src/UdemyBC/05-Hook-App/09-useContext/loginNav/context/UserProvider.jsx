import { useState } from "react"
import { UserContext } from "./UserContext"

//const user = {
//    id:123,
//    name:"Yomero",
//}

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

    return (
                            //?Esta info, o cualquier hijo de este userProvider puede obtener del userContext
        <UserContext.Provider value={{user, setUser}}>
           {children} 
        </UserContext.Provider>
        //Para usar este component, lo pondremos en el "punto mas alto de nuestro arbol de componentes" donde sus hijos lo van a necesitar
    )
}
