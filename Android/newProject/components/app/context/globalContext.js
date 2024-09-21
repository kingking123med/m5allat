import React, { useState, useEffect, useRef, createContext} from "react";


const Context = createContext()

const Provider = ( { children } ) => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [profilo, setProfile] = useState({});

  const globalContext = {
    isLoggedIn,
    setIsLoggedIn,
    profilo,
    setProfile
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>

};

export { Context, Provider };
