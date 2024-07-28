import { createContext,useState } from "react";

export const authcontex=createContext()

 export function AuthcontexproviderFunction({children})
 {
    const[isauth,setisauth]=useState(false)

    const loginfuction=()=>{
        setisauth(true)
    }
    const logoutfuction=()=>{
        setisauth(false)
        }
    return(
        <authcontex.Provider value={{isauth ,loginfuction,logoutfuction}}>{children}</authcontex.Provider>
    )
}