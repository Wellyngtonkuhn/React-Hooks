import { useState, createContext, useRef} from "react";

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
    const [showComponent, setShowComponent] = useState(false);
    const counterRef = useRef(0);
    const emailRef = useRef('')
  return (
    <>
      <GlobalContext.Provider value={{ emailRef, counterRef,showComponent, setShowComponent }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}
