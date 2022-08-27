import { useState, useEffect, useContext } from "react";

import { GlobalContext } from "../contexts/ContextProvider";

function UseState() {
  
  const [title, setTitle] = useState("Hallo World");

  const {showContent, setShowContent} = useContext(GlobalContext)

  const handleChangeState = () => {
    setTitle("State changed");
  };

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  const ExclusivContent = () => {
    return <h1>Thanks for everything</h1>;
  };

  const ExibirComponent = () => {
    useEffect(() => {
      document.title = "UseState";

      return () => {
        document.title = "React App";
      };
    }, [!showContent]);
    return (
      <>
        <h2>{title}</h2>
        <button onClick={handleChangeState}>Change State</button>
        <button onClick={handleShowContent}>
          {showContent === false ? "Mostrar Conteúdo" : "Fechar"}
        </button>

        {showContent && <ExclusivContent />}
        <hr />
      </>
    );
  };

  const [showComponent, setShowComponent] = useState(false);

  const handleShowComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <>
      <h1>UseState</h1>
      <button onClick={handleShowComponent}>
        {showComponent ? "Fechar Componente" : "Abrir Componente"}
      </button>

      {showComponent && <ExibirComponent />}
    </>
  );
}

export default UseState;
