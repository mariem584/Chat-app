import React,{useState , useContext, createContext} from 'react'

export const Context = createContext();

export const ContextProvider =(props)=>{
    const [username, setUserName] = useState("")
    const [secret, setsecret] = useState("")

    const value ={
        username,
        setUserName,
        secret,
        setsecret,
    }
    return <Context.Provider value={value}>{props.children}</Context.Provider>
}
