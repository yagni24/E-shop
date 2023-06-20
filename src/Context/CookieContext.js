import { createContext} from "react";
import Cookies from "universal-cookie";
export const CookieContext = createContext("");
export const CookieProvider = ({children}) =>{
  const cookie = new Cookies;
  const setCookie = (name, value, options) => {
        cookie.set(name, value, options);
      };
      const getCookie = (name) => {
        return cookie.get(name);
      };
      const removeCookie = (name) => {
        cookie.remove(name);
      };
      const contextValue ={
        cookie,
        setCookie,
        getCookie,
        removeCookie
      }
      return (
        <CookieContext.Provider value={contextValue}>
            {children}
        </CookieContext.Provider>
      )
}