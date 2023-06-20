import { createContext,useState } from "react";

export const LoginContext = createContext("");
export const LoginProvider = ({children}) =>{
    const [users,setUsers] = useState('');
    const [contextemail,setConEmail] =useState('');
    const [proName,setProName] = useState('');
    const [authUser,setauthUser] = useState('');
    return(
        <LoginContext.Provider value={{users,setUsers,contextemail,setConEmail,proName,setProName,setauthUser,authUser}}>
            {children}
        </LoginContext.Provider>
    )
}