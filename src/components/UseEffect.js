import { useEffect, useContext } from "react";

import { GlobalContext } from "../contexts/ContextProvider";

export default function UseEffect() {
  
  const { showComponent, setShowComponent} = useContext(GlobalContext)

  const handleShowComponent = () => {
    setShowComponent(!showComponent);
  };

  const ExibirComponent = () => {
    useEffect(() => {
      document.title = "UseEffet";

      return () => {
        document.title = "React App";
      };
    }, [showComponent]);
    return (
      <>
        <h1>UseEffect</h1>
      </>
    );
  };

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={handleShowComponent}>
        {showComponent ? "Fechar Componente" : "Abrir Componente"}
      </button>

      {showComponent && <ExibirComponent />}
    </>
  );
}
